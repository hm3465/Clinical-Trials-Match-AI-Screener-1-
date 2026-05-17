import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
        <Link href="/dashboard" className="text-xl font-bold text-[var(--primary)]">
          ClinicalTrialMatch
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[var(--muted-foreground)]">
            {user.email}
          </span>
          <form action="/api/auth/signout" method="post">
            <button
              type="submit"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              Sign out
            </button>
          </form>
        </div>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
