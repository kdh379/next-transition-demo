# Next.js View Transitions Demo

Next.js App Router 환경에서 View Transitions API를 활용한 페이지 전환 데모 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 Next.js의 App Router와 View Transitions API를 결합하여 부드러운 페이지 전환 효과를 구현하는 방법을 보여줍니다. 특히 RSC(React Server Components)와 함께 사용할 때의 로딩 상태 처리와 전환 애니메이션 구현에 초점을 맞추고 있습니다.

## 주요 기술 스택

- Next.js 15 (App Router)
- next-view-transitions
- Tailwind CSS
  - Tailwind는 View Transition API를 지원하지 않는다.

## 학습 내용

### 1. App Router의 RSC 동작 방식

- App Router에서 RSC의 비동기 요청이 진행중일 경우, 페이지 전환이 이루어지지 않음

### 2. Loading 상태 관리

- Next.js의 loading.tsx는 예상과 달리 계층적으로 동작하지 않음
- 각 페이지 디렉토리마다 개별적인 loading.tsx 구성이 필요
- layout.tsx와 loading.tsx를 적절히 조합하여 더 나은 UX 구현 가능
  - layout.tsx: 즉시 표시되어야 하는 정적 요소 배치
  - loading.tsx: 비동기 데이터를 기다리는 동안의 로딩 UI

### 3. 페이지 전환과 상태 관리

- Next.js의 페이지 전환은 React의 useTransition 훅을 기반으로 함
- 하지만 RSC의 비동기 요청 완료 여부와 isPending 상태가 완벽히 동기화되지 않음
  - RSC의 비동기 요청이 진행 중이어도 isPending이 false로 변경될 수 있음

### 4. View Transitions API 활용

- 페이지 간 전환 시 부드러운 애니메이션 효과 구현
- 특정 요소의 view-transition-name을 지정하여 연속성 있는 UI 구현
- next-view-transitions 라이브러리를 통한 손쉬운 구현

## 구현된 기능

1. 기본 페이지 전환
2. 커스텀 트랜지션 효과
3. 비동기 데이터 로딩 처리
4. 로딩 상태 UI
5. 중첩 라우트에서의 전환 효과
