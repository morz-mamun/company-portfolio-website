'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Effect to check if the theme is mounted - to avoid hydration errors
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {/* Theme Toggle Button */}
      {mounted && resolvedTheme === 'light' ? (
        <Button
          variant="outline"
          className="cursor-pointer rounded-full"
          size="icon"
          onClick={() => setTheme('dark')}
        >
          <Sun className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer rounded-full"
          onClick={() => setTheme('light')}
        >
          <Moon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
