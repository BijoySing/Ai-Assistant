import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Assistant - Personal AI Assistants',
  description: 'Chat with specialized AI Assistant for coding, writing, research, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}