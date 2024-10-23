import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../lib/AuthContext';
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, loading, signOut } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Linkd
          </Link>
          <div>
            {user ? (
              <>
                <span className="mr-4">Welcome, {user.email}</span>
                <Button
                  onClick={signOut}
                  variant="destructive"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="mr-2">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>
    </div>
  );
}
