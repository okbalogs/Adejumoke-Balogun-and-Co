import React from "react";
import { Navbar, Footer } from "./Layout";
import { Outlet } from "react-router";

export const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
