import Link from "@/components/Link";
import React from "react";

async function BulkPage() {
  return (
    <div className="space-y-4">
      <p>Bulk 페이지입니다.</p>
      <div className="flex flex-col gap-4">
        <Link href="/" className="text-blue-500">
          Go to /
        </Link>

        <Link href="/bulk/loading" className="text-blue-500">
          Go to /bulk/loading (loading.js 사용)
        </Link>

        <Link href="/bulk/streaming" className="text-blue-500">
          Go to /bulk/streaming (Suspense 사용)
        </Link>

        <Link href="/bulk/no-loading" className="text-blue-500">
          Go to /bulk/no-loading (로딩 처리 없음)
        </Link>
      </div>
    </div>
  );
}

export default BulkPage;