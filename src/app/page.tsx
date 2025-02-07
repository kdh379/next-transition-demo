import RouterPush from "@/components/RouterPush";

export default function Home() {
  return (
    <main className="min-h-screen p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section className="p-6 bg-white rounded-lg shadow-lg vt-intro-section">
          <h2 className="text-2xl font-semibold mb-4">소개</h2>
          <p className="text-gray-600 mb-4">
            Next.js View Transitions API를 사용한 페이지 전환 데모입니다.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-lg vt-features-section">
          <h2 className="text-2xl font-semibold mb-4">기능</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>페이지 전환 애니메이션</li>
            <li>커스텀 트랜지션 효과</li>
          </ul>
        </section>
      </div>

      <RouterPush />
    </main>
  );
}
