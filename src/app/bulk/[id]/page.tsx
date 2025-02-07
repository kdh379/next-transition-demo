import React from "react";

interface BulkDetailPageProps {
  params: Promise<{ id: string }>

}

async function BulkDetailPage({ params }: BulkDetailPageProps) {
  const { id } = await params;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1 className="text-2xl font-bold vt-bulk-detail-header">BulkDetailPage {id}</h1>
    </div>



  );
}

export default BulkDetailPage;