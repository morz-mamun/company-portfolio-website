import { ScrollProgress } from '@/components/magicui/scroll-progress';
import Footer from '@/components/shared/footer';
import WebSiteNavbar from '@/components/shared/navbar/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="z-10 mx-auto min-h-screen max-w-screen-xl border">
      {/* NAVBAR */}
      <WebSiteNavbar />
      <ScrollProgress />
      <div className="mx-3 border-x md:mx-6">{children}</div>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
