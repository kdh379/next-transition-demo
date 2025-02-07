import Link from "./Link";

export default function RouterPush() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">RouterPush</h2>

      <h3>
        <span className="text-lg font-bold vt-about-header">페이지 이동</span>
      </h3>

      <Link href="/about">
        Go to /about
      </Link>

      <Link href="/about" withTransition>
        Go to /about with custom transition
      </Link>

      <h3>
        <span className="text-lg font-bold vt-bulk-header">무거운 페이지 이동</span>
      </h3>

      <Link href="/bulk">
        Go to /bulk
      </Link>

      <Link href="/bulk" withTransition>
        Go to /bulk with custom transition
      </Link>
    </div>
  );
}
