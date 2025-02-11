import { Suspense } from "react";
import Link from "next/link";
import { getPost, getSlowPost } from "@/lib/actions";
import Post from "@/components/Post";

async function FastPost() {
  const data = await getPost(3);
  return <Post title={data.title} body={data.body} />;
}

async function SlowPost() {
  const data = await getSlowPost(5);
  return <Post title={data.title} body={data.body} />;
}

function LoadingComponent() {
  return <div className="h-20 bg-gray-200 rounded w-full animate-pulse"></div>;
}

export default function HybridPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">loading.js + Suspense</h2>
      <p>loading.js + Suspense를 이용한 테스트 페이지입니다.</p>
      <p>RSC Payload 요청 이전 페이지가 전환됩니다.</p>
      <p>빠른 데이터는 먼저 표시되고, 느린 데이터는 개별적으로 로딩됩니다.</p>


      <div className="space-y-4">
        <Suspense fallback={<LoadingComponent />}>
          <FastPost />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <SlowPost />
        </Suspense>
      </div>

      <div className="flex flex-col gap-4">
        <Link href="/bulk" className="text-blue-500">
          Go to /bulk
        </Link>
      </div>
    </div>
  );
}