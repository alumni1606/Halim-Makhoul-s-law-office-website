import React from "react";
import Navbar from "@/components/layout/Navbar";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";

const PracticeAreasPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <PracticeAreasSection />
      </main>
    </div>
  );
};

export default PracticeAreasPage;
