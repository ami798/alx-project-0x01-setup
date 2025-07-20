// pages/index.jsx

import Head from "next/head";
import UserCard from "@/components/UserCard";

export default function Home() {
  const sampleUser = {
    full_name: "Amira Abdurahman",
    email: "amira@example.com",
    avatar: "https://i.pravatar.cc/150?img=3"
  };

  return (
    <>
      <Head>
        <title>User Card Demo</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-md mx-auto">
          <UserCard user={sampleUser} />
        </div>
      </main>
    </>
  );
}
