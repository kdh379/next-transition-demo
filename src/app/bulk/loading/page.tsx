import React from "react";
import Link from "next/link";
import { getPost, getSlowPost } from "@/lib/actions";
import Post from "@/components/Post";

async function BulkDetailPage() {
  const [post1, post2] = await Promise.all([
    getPost(1),
    getSlowPost(4),
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold vt-bulk-detail-header">loading.js Page</h2>
      <p>Loading.js를 이용한 테스트 페이지입니다.</p>
      <p>모든 비동기 요청이 완료된 이후에 화면이 렌더링됩니다.</p>
      <div className="space-y-4">
        <Post title={post1.title} body={post1.body} />
        <Post title={post2.title} body={post2.body} />
      </div>
      <div className="flex flex-col gap-4">
        <Link href="/bulk" className="text-blue-500">
          Go to /bulk
        </Link>
      </div>
    </div>
  );
}

export default BulkDetailPage;