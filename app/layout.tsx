import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="WiseGen" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen bg-[#fffdf8] text-slate-900">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
