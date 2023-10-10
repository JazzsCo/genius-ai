import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex justify-center h-full gap-3 mt-5">
      <h1 className="text-xl font-bold text-center mt-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-orange-700">
        Im come back baby.
      </h1>
      <h2 className="text-lg font-medium text-center text-muted-foreground">
        Hello Test
      </h2>
      <ModeToggle />
    </main>
  );
}
