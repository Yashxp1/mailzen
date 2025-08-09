import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/DarkMode/theme-provider';

export const metadata: Metadata = {
  title: 'MailZen',
  description:
    'MailZen — AI-powered Gmail productivity tool for drafting, summarizing, and smartly managing emails using the Gmail API.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
