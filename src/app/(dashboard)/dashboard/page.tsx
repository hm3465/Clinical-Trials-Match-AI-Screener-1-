export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-[var(--muted-foreground)] mb-8">
        Welcome to ClinicalTrialMatch. Get started by searching for trials or
        building your health profile.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition">
          <h2 className="text-lg font-semibold mb-2">Search Trials</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Find clinical trials on ClinicalTrials.gov by condition, keyword, or
            location.
          </p>
          <span className="text-sm text-[var(--primary)]">Coming soon →</span>
        </div>

        <div className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--secondary)] transition">
          <h2 className="text-lg font-semibold mb-2">Health Profile</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Enter your conditions, medications, and lab values to match against
            trials.
          </p>
          <span className="text-sm text-[var(--secondary)]">Coming soon →</span>
        </div>
      </div>
    </div>
  );
}
