import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Project Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        The project you are looking for doesn&apos;t exist or has been removed.
      </p>
      <Button asChild className="mt-8">
        <Link href="/projects">Back to Projects</Link>
      </Button>
    </div>
  );
}
