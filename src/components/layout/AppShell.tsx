import Link from "next/link";
import { useRouter } from "next/router";
import { FileText, Home, LayoutDashboard, LifeBuoy, PanelsTopLeft, Download, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/editor", label: "Builder", icon: LayoutDashboard },
  { href: "/templates", label: "Templates", icon: PanelsTopLeft },
  { href: "/download", label: "Download", icon: Download },
  { href: "/support", label: "Support", icon: LifeBuoy },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-slate-200 bg-white/95 px-4 py-5 shadow-sm lg:block">
        <Link href="/" className="mb-8 flex items-center gap-3 px-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
            <FileText className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-950">Resume Builder</span>
            <span className="block text-xs text-slate-500">Professional CV studio</span>
          </span>
        </Link>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition",
                  active && "bg-blue-50 text-blue-700",
                  !active && "hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5 text-blue-600" />
            Resume Builder
          </Link>
          <Button size="sm" className="gap-2">
            <Menu className="h-4 w-4" />
            <Link href="/editor">Editor</Link>
          </Button>
        </div>
        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-slate-600",
                  active && "bg-blue-50 text-blue-700"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="lg:pl-64">{children}</main>
    </div>
  );
}
