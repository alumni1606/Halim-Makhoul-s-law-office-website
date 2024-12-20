import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Home } from "lucide-react";

const FamilyLawPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-full bg-blue-50">
              <Home className="w-12 h-12 text-blue-900" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Family Law
          </h1>
          <div className="prose max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Our family law practice is dedicated to helping clients navigate
              complex domestic matters with compassion and expertise. We
              understand that family legal issues can be emotionally
              challenging, and we're here to provide the support and guidance
              you need.
            </p>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Our Family Law Services
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Divorce and Legal Separation</li>
              <li>Child Custody and Visitation</li>
              <li>Child Support</li>
              <li>Spousal Support/Alimony</li>
              <li>Property Division</li>
              <li>Adoption</li>
              <li>Domestic Violence Protection</li>
              <li>Prenuptial and Postnuptial Agreements</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Why Choose Us for Family Law
            </h2>
            <p className="text-gray-600 mb-6">
              Our experienced family law attorneys combine legal expertise with
              a compassionate approach to help you achieve the best possible
              outcome for your family situation. We prioritize your needs and
              those of your children while vigorously protecting your rights and
              interests.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FamilyLawPage;
