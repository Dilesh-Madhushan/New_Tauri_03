'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isHydrated, setIsHydrated] = useState(false);

  // Prevent rendering until fully hydrated
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <main
      style={{
        backgroundImage: "url('https://us.123rf.com/450wm/brita123/brita1232312/brita123231200520/220947910-butterflies-in-the-springtime-meadows-green-garden.jpg?ver=6')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Full viewport height
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Ensure text is readable
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)', // Add text shadow for better contrast
      }}
    >
      <h1>Welcome to MyProject</h1>
      <p>This is a Tauri + Next.js app.</p>
      <p>Dilesh Madhushan</p>
    </main>
  );
}
