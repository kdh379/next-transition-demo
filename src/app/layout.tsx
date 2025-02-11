import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";

import "./globals.css";


const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Next View Transition Demo",
  description: "Next View Transition Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ko">
        <body
          className={`${pretendard.className} antialiased container mx-auto mt-10`}
        >
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Next.js View Transitions</h1>
            <p>
              Next.js App Router 환경에서
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API'
                target='_blank'
                className="text-blue-500 mx-1 underline"
              >
                View Transitions API
              </a>
              사용해보기
            </p>
            <p className='support'>
              <span className='no'>
                ️🔴 브라우저가 View Transitions를 지원하지 않습니다.
              </span>
              <span className='yes'>
                ️🟢 브라우저가 View Transitions를 지원합니다.
              </span>
            </p>
          </div>
          <main className="mt-10 vt-container">{children}</main>
        </body>
      </html>
    </ViewTransitions>
  );
}
