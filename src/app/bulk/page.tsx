import Link from "@/components/Link";
import React from "react";

async function BulkPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="space-y-4">
      <p>Bulk 페이지입니다.</p>
      <div className="flex flex-col gap-4">
        <Link href="/" className="text-blue-500">
          Go to /
        </Link>

        <Link href="/bulk/1" className="text-blue-500">
          Go to /bulk/1
        </Link>
      </div>
    </div>


  );
}


export default BulkPage;