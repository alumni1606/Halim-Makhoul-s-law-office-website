import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import PracticeAreasSection from "./sections/PracticeAreasSection";
import TeamSection from "./sections/TeamSection";
import ContactSection from "./sections/ContactSection";

interface HomePageProps {
  firmName?: string;
  heroTitle?: string;
}

const HomePage = ({
  firmName = "Halim Makhoul's Law Office",
  heroTitle = "Halim Makhoul's Law Office",
}: HomePageProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar firmName={firmName} />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title={heroTitle}
          subtitle={t("hero.subtitle")}
          ctaText={t("hero.cta")}
        />

        {/* Practice Areas */}
        <PracticeAreasSection
          sectionTitle={t("sections.practiceAreas.title")}
          sectionDescription={t("sections.practiceAreas.description")}
        />

        {/* Team Section */}
        <TeamSection
          title={t("sections.team.title")}
          description={t("sections.team.description")}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{firmName}</h3>
              <p className="text-sm text-gray-300">
                Providing expert legal services with integrity and dedication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("nav.quickLinks")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/practice-areas"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {t("nav.practiceAreas")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {t("nav.team")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("sections.contact.office.title")}
              </h3>
              <address className="text-sm text-gray-300 not-italic">
                123 Legal Avenue, Suite 500
                <br />
                New York, NY 10001
                <br />
                Phone: (555) 123-4567
                <br />
                Email: contact@halimmakhoul.law
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} {firmName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
