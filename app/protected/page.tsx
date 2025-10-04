import { EmptyDashboard } from "@/components/empty-dashboard";

export default function Dashboard() {
  return (
    <div>
      <header className="mb-5">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>
      <main className="">
        <div className="">
          <EmptyDashboard />
        </div>
      </main>
    </div>
  );
}
