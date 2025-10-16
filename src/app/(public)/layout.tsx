import { ChatButton } from '@/components/chat-bot/chat-button';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import Footer from '@/components/shared/footer';
import WebSiteNavbar from '@/components/shared/navbar/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="z-10 mx-auto min-h-screen w-full">
      {/* NAVBAR */}
      <WebSiteNavbar />
      <ScrollProgress />
      <div className="">{children}</div>
      {/* AI Assistance */}
      <ChatButton />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
