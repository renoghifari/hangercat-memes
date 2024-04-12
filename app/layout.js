
import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/maladroit.ttf'
})

export const metadata = {
  title: "Hanger Cat",
  description: "Your Favorite Degenerate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
