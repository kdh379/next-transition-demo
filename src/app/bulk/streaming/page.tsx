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

export default function StreamingPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Streaming Page</h2>
      <p>Suspense를 사용한 스트리밍 테스트 페이지입니다.</p>

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