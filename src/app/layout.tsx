// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'MyProject',
  description: 'A Tauri + Next.js project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
