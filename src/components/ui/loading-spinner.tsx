import { Loader2 } from "lucide-react";

export function LoadingSpinner({ className = "" }) {
  return <Loader2 className={`h-4 w-4 animate-spin ${className}`} />;
}

export function LoadingPage() {
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <LoadingSpinner className="h-8 w-8 text-blue-900" />
    </div>
  );
}
