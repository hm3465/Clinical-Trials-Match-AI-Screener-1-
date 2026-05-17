import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
        <span className="text-xl font-bold text-[var(--primary)]">
          ClinicalTrialMatch
        </span>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium hover:underline"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Find clinical trials you{" "}
          <span className="text-[var(--primary)]">actually qualify for</span>
        </h1>
        <p className="mt-6 text-lg text-[var(--muted-foreground)] max-w-xl">
          Stop reading walls of medical jargon. Our AI reads the eligibility
          criteria for you and gives you a clear YES / NO / MAYBE for every
          requirement.
        </p>
        <Link
          href="/signup"
          className="mt-8 px-8 py-3 text-lg font-semibold bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition"
        >
          Get Started Free
        </Link>

        {/* How it works */}
        <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="p-6 rounded-xl bg-[var(--muted)] text-left">
            <div className="text-2xl font-bold text-[var(--primary)] mb-2">
              1
            </div>
            <h3 className="font-semibold text-lg mb-1">Search trials</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Search ClinicalTrials.gov by condition, location, or keyword.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[var(--muted)] text-left">
            <div className="text-2xl font-bold text-[var(--secondary)] mb-2">
              2
            </div>
            <h3 className="font-semibold text-lg mb-1">Build your profile</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Enter your conditions, medications, age, and lab values once.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[var(--muted)] text-left">
            <div className="text-2xl font-bold text-[var(--accent)] mb-2">
              3
            </div>
            <h3 className="font-semibold text-lg mb-1">Get matched</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              AI scores each eligibility criterion and explains it in plain
              English.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-[var(--muted-foreground)] border-t border-[var(--border)]">
        ClinicalTrialMatch is not medical advice. Always confirm eligibility
        with a physician.
      </footer>
    </div>
  );
}
