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
    <main>
      <h1>Welcome to MyProject</h1>
      <p>This is a Tauri + Next.js app.</p>
    </main>
  );
}
