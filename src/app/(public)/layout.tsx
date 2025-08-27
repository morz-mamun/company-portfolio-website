import { ChatButton } from '@/components/chat-bot/chat-button';
import Footer from '@/components/shared/footer';
import WebSiteNavbar from '@/components/shared/navbar/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl border">
      {/* NAVBAR */}
      <WebSiteNavbar />
      <div className="mx-3 border-x md:mx-6">{children}</div>
      {/* AI Assistance */}
      <ChatButton />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
