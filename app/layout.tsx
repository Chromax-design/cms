import { Open_Sans, Lora } from "next/font/google";
import "./globals.css";
const openSans = Open_Sans({subsets: ['latin'], weight: ['300','400', '500', '600', '700', '800']});
export const LoraFont = Lora({subsets: ['latin'], weight:['700']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} h-full`}>
        {children}
      </body>
    </html>
  );
}
