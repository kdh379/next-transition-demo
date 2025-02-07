export default function BulkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold vt-bulk-header">Bulk</h1>
      {children}
    </div>
  );
}