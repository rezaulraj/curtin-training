"use cliend";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">This Page Under Development</h1>
      <p className="mb-6 text-gray-500">Please come again and Support us!</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back home →
      </Link>
    </div>
  );
}
