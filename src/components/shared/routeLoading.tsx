import { Loader2 } from 'lucide-react';

export default function RouteLoading() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <div className="flex max-w-md flex-col items-center gap-6 px-4 text-center">
        {/* Animated logo/avatar */}
        <div className="bg-primary/10 relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full">
          <div className="from-primary/20 animate-spin-slow absolute inset-0 bg-gradient-to-r to-transparent" />
          <span className="text-primary text-3xl font-bold">TGC</span>
        </div>

        {/* Loading text with animation */}
        <h2 className="animate-pulse text-2xl font-bold">Loading...</h2>

        {/* Progress bar */}
        <div className="bg-muted mb-2 h-2.5 w-full overflow-hidden rounded-full">
          <div className="bg-primary animate-progress h-2.5 rounded-full"></div>
        </div>

        {/* Random loading messages */}
        <p className="text-muted-foreground">
          {
            [
              'Preparing our website content...',
              'Just a moment while everything loads...',
              'Gathering my backend expertise...',
            ][Math.floor(Math.random() * 5)]
          }
        </p>

        {/* Spinner */}
        <Loader2 className="text-primary mt-2 h-6 w-6 animate-spin" />
      </div>
    </div>
  );
}
