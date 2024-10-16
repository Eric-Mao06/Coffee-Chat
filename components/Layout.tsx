import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../lib/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Coffee Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Coffee Chat
          </Link>
          <div>
            {user ? (
              <>
                <span className="mr-4">Welcome, {user.email}</span>
                <button
                  onClick={signOut}
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="mr-4">
                  Login
                </Link>
                <Link href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Coffee Chat. All rights reserved.</p>
      </footer>
    </div>
  );
}
