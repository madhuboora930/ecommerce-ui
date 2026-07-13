import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <h1 className="font-display text-5xl font-semibold text-gradient">404</h1>
      <p className="text-slate-400">This page doesn&apos;t exist.</p>
      <Button as={Link} href="/">
        Back to Home
      </Button>
    </div>
  );
}
