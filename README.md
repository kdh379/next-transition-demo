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

- App Router 환경에서, 아래의 경우 페이지 전환이 이루어지지 않음
  - RSC Payload를 불러오는 중인 경우
  - **RSC의 비동기 요청이 진행중일 경우**

### 2. 페이지 전환과 상태 관리

- Next.js의 페이지 전환은 React의 useTransition 훅을 기반으로 함 [next.js issue #41934](https://github.com/vercel/next.js/discussions/41934#discussioncomment-8996669)
- 하지만 실험 결과, RSC의 비동기 요청 완료 여부와 isPending 상태가 완벽히 동기화되지 않음
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
  - 페이지가 여러 번 업데이트되어 레이아웃 시프트 발생 가능
  - page.tsx를 순수 레이아웃 컴포넌트로 유지해야 함
  - 비동기 요청을 하위 컴포넌트로 분리해야 함
  - 컴포넌트 계층 구조 설계가 복잡해질 수 있음
  - Suspense 경계를 고려한 세밀한 아키텍처 설계 필요

#### 로딩 처리가 없는 페이지 (/bulk/no-loading)

- 로딩 UI 없이 모든 데이터가 로드될 때까지 이전 페이지 유지
- Promise.all을 사용하여 모든 데이터(2초, 4초)를 동시에 요청
- 장점: 구현이 단순하고 레이아웃 시프트 없음
- 단점: 사용자가 동작이 완료되었는지 알기 어려움

