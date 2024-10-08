import { Open_Sans} from "next/font/google";
import "./globals.css";
const openSans = Open_Sans({subsets: ['latin'], weight: ['300','400', '500', '600', '700', '800']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} h-full`}>
        {children}
      </body>
    </html>
  );
}
