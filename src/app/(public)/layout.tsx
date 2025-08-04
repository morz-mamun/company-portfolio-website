import Footer from '@/components/shared/footer';
import WebSiteNavbar from '@/components/shared/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl border">
      {/* NAVBAR */}
      <WebSiteNavbar />
      <div>{children}</div>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
