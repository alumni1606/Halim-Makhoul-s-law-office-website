import React from "react";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
    </div>
  );
};

export default ContactPage;
