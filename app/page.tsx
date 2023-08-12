import { MotoCard } from "./components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-3">
        <MotoCard />
        <MotoCard />
        <MotoCard />
        <MotoCard />
        <MotoCard />
        <MotoCard />
        <MotoCard />
        <MotoCard />
      </div>
    </main>
  )
}
