// pages/index.tsx

import React from "react";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Application!</h1>
          <p className="text-gray-600">we are glad to see you here.</p>
        </div>
      </main>
    </>
  );
};

export default Home;
