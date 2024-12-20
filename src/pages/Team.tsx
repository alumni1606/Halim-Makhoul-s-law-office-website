import React from "react";
import Navbar from "@/components/layout/Navbar";
import TeamSection from "@/components/sections/TeamSection";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <TeamSection />
      </main>
    </div>
  );
};

export default TeamPage;
