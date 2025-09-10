import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel_Decorative, Amita } from "next/font/google"; 
import { ThemeProvider } from "next-themes";
import { ThemeProvider as CustomThemeProvider } from "@/lib/contexts/ThemeContext";
import { CategoriesProvider } from "@/lib/contexts/CategoriesContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  weight: '400', // Or any desired weight
  subsets: ['latin'], // Or other desired subsets
  variable: '--font-cinzel' // Optional, for using with Tailwind CSS
});

const amita = Amita({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amita',
});

export const metadata: Metadata = {
  title: "Loam & Root",
  description: "Discover timeless treasures at Loam & Root",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${amita.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <CustomThemeProvider>
            <CategoriesProvider>
              {children}
            </CategoriesProvider>
          </CustomThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
