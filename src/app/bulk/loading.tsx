/**
 * Next.js의 loading.tsx는 계층적으로 동작하지 않는듯 하다. ( claude와 o3-mini는 계층적이 맞다한다. )
 * 해당 loading.tsx의 파일명을 바꾸고 /bulk/1 로 이동 시
 * 상위 로딩이 표시되지 않고, 해당 페이지 RSC의 비동기 요청이 끝난 후 페이지가 전환된다.
 *
 * 학습 내용
 * 1. App Router의 RSC 비동기 요청이 끝난 후 페이지가 전환된다.
 * 2. 각 페이지마다 loading.tsx 파일을 구성하고, layout.tsx 파일에 로딩이 불필요한 요소를 배치하여 퀄리티높은 페이지간 이동을 구현할수 있다.
 * 3. Next의 페이지 이동은 React의 useTransition 훅 기반이라고 하지만,
 *  해당 페이지의 RSC 내에서 동작하는 비동기 요청이 완료되지 않았지만 isPending 상태가 false로 바껴버린다.
 */

export default function BulkLoading() {
  return (
    <div>
      <div className="animate-pulse mt-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}