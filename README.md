# Next.js View Transitions Demo

Next.js App Router 환경에서 페이지 전환 로딩 인디케이터 및 View Transitions API를 활용한 페이지 전환 애니메이션 구현 데모 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 Next.js의 App Router와 View Transitions API를 결합하여 부드러운 페이지 전환 효과를 구현하는 방법을 보여줍니다. 특히 RSC(React Server Components)와 함께 사용할 때의 로딩 상태 처리와 전환 애니메이션 구현에 초점을 맞추고 있습니다.

## 주요 기술 스택

- Next.js 14 (App Router)
- next-view-transitions
- Tailwind CSS
  - Tailwind는 View Transition API를 지원하지 않음

## 구현된 기능

1. 기본 페이지 전환
2. 커스텀 트랜지션 효과
3. loading.js, Streaming 로딩 전략
4. 중첩 라우트에서의 전환 효과

## 학습 내용

### 1. App Router의 RSC 동작 방식

- App Router 환경에서, RSC의 비동기 요청이 진행중일 경우 페이지 전환이 이루어지지 않음

### 2. 페이지 전환과 상태 관리

- Next.js의 페이지 전환은 React의 useTransition 훅을 기반으로 함 [next.js issue #41934](https://github.com/vercel/next.js/discussions/41934#discussioncomment-8996669)
- 하지만 실험 결과,RSC의 비동기 요청 완료 여부와 isPending 상태가 완벽히 동기화되지 않음
  - RSC의 비동기 요청이 진행 중이어도 isPending이 false로 변경될 수 있음

### 3. View Transitions API 활용

- 페이지 간 전환 시 부드러운 애니메이션 효과 구현
- 특정 요소의 view-transition-name을 지정하여 연속성 있는 UI 구현
- next-view-transitions 라이브러리를 통한 손쉬운 구현

### 4. 로딩 전략 비교

#### loading.tsx를 사용한 페이지 (/bulk/loading)

- 페이지 전체에 대한 로딩 UI 표시
- 모든 데이터 요청(2초, 4초)이 완료될 때까지 로딩 상태 유지
- 장점:
  - RSC Payload 요청도 loading.tsx의 로딩 UI를 표시함
  - 일관된 로딩 경험 제공
  - 비동기 요청을 page.tsx에서 직접 처리 가능
  - 컴포넌트 설계가 단순하고 직관적
  - 별도의 아키텍처 설계 부담이 없음
- 단점:
  - 빠른 데이터도 느린 데이터를 기다려야 함
  - Next.js의 loading.tsx는 예상과 달리 계층적으로 동작하지 않음
  - 각 페이지 디렉토리마다 개별적인 loading.tsx 구성이 필요

#### Suspense를 사용한 스트리밍 (/bulk/streaming)

- 컴포넌트 단위의 독립적인 로딩 UI
- 빠른 데이터(2초)가 먼저 표시되고, 느린 데이터(4초)는 개별적으로 로딩
- 장점: 점진적인 콘텐츠 로딩으로 더 나은 UX
- 단점:
  - RSC Payload 요청은 로딩 UI를 표시하지 않음
  - 페이지가 여러 번 업데이트되어 레이아웃 시프트 발생 가능
  - page.tsx를 순수 레이아웃 컴포넌트로 유지해야 함
  - 비동기 요청을 하위 컴포넌트로 분리해야 함
  - 컴포넌트 계층 구조 설계가 복잡해질 수 있음
  - Suspense 경계를 고려한 세밀한 아키텍처 설계 필요

#### loading.tsx와 Suspense를 함께 사용하는 페이지 (/bulk/hybrid)

- RSC Payload 요청은 loading.tsx의 로딩 UI를 표시함
- Suspense 경계 내부의 컴포넌트에서 느린 데이터(외부 API 호출)를 로딩함
- 장점:
  - loading.tsx의 로딩 UI와 Suspense의 스트리밍 로딩을 결합하여 최적의 로딩 경험을 제공함
- 단점:
  - 두 가지 로딩 패턴이 혼재하여 사용자가 혼란스러울 수 있음
  - 컴포넌트 설계가 더 복잡해질 수 있음
  - 로딩 상태 관리가 두 가지 방식으로 분산됨

#### 로딩 처리가 없는 페이지 (/bulk/no-loading)

- 로딩 UI 없이 모든 데이터가 로드될 때까지 이전 페이지 유지
- Promise.all을 사용하여 모든 데이터(2초, 4초)를 동시에 요청
- 장점: 구현이 단순하고 레이아웃 시프트 없음
- 단점:
  - 요청이 시작되면 브라우저가 멈춘 것 처럼 보임
    - CSR 환경이라서 브라우저의 로딩표시조차 나오지 않음

Claude 답변

> 프로젝트 환경과 README에 작성한 내용을 포함해서, 어떤 로딩 전략이 가장 좋을거라고 생각해?

제 생각에는 loading.tsx + Suspense 하이브리드 전략이 가장 좋을 것 같습니다. 그 이유는:

- RSC Payload 로딩 처리
  - loading.tsx가 RSC Payload 로딩 중에도 로딩 UI를 보여줌
  - 사용자에게 즉각적인 피드백 제공
  - 페이지가 멈춘 것처럼 보이지 않음
- 데이터 로딩 처리
  - Suspense를 통해 데이터 로딩을 컴포넌트 단위로 스트리밍
  - 빠른 데이터는 먼저 표시하여 사용자 경험 향상
  - 느린 데이터는 개별적으로 로딩하여 전체 페이지 차단 방지
- 아키텍처 관점
  - page.tsx는 레이아웃과 구조에만 집중
  - 데이터 로딩 로직은 하위 컴포넌트로 분리
  - 관심사 분리가 잘 이루어짐
- 단점 보완
  - loading.tsx의 "모든 것을 기다려야 하는" 문제 해결
  - Suspense의 "RSC Payload 로딩 UI 없음" 문제 해결
  - 두 전략의 장점을 결합
- 물론 이 전략도 완벽하지는 않습니다:
  - 두 가지 로딩 패턴이 혼재
  - 컴포넌트 설계가 더 복잡해짐
  - 로딩 상태 관리가 분산됨

하지만 이러한 단점들은 더 나은 사용자 경험을 제공하기 위한 합리적인 트레이드오프라고 생각합니다.
