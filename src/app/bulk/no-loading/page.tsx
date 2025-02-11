import Link from "next/link";
import { getPost, getSlowPost } from "@/lib/actions";
import Post from "@/components/Post";

async function NoLoadingPage() {
  const [post1, post2] = await Promise.all([
    getPost(2),
    getSlowPost(6),
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">No Loading Page</h2>
      <p>loading.tsx나 Suspense가 없는 페이지입니다.</p>
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

export default NoLoadingPage;