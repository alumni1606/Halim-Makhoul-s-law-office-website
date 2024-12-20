import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AttorneyCard from "@/components/cards/AttorneyCard";
import { LoadingPage } from "@/components/ui/loading-spinner";

interface TeamSectionProps {
  title?: string;
  description?: string;
  attorneys?: Array<{
    name: string;
    image: string;
    title: string;
    credentials: string[];
    specializations: string[];
    bio: string;
  }>;
}

const defaultAttorneys = [
  {
    name: "Sarah Johnson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lawyer1",
    title: "managingpartner",
    credentials: ["J.D., Yale Law School", "State Bar Association President"],
    specializations: ["Corporate Law", "Mergers & Acquisitions"],
    bio: "Over 20 years of experience in corporate law and complex business transactions.",
  },
  {
    name: "Michael Chen",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lawyer2",
    title: "seniorpartner",
    credentials: [
      "J.D., Stanford Law School",
      "Board Certified Trial Specialist",
    ],
    specializations: ["Civil Litigation", "Criminal Defense"],
    bio: "Dedicated litigator with extensive trial experience in both civil and criminal matters.",
  },
  {
    name: "Emily Rodriguez",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lawyer3",
    title: "associatepartner",
    credentials: ["J.D., Columbia Law School", "Family Law Specialist"],
    specializations: ["Family Law", "Estate Planning"],
    bio: "Specializing in family law matters with a compassionate approach to client advocacy.",
  },
];

const TeamSection = ({
  title,
  description,
  attorneys = defaultAttorneys,
}: TeamSectionProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAttorneys, setLoadedAttorneys] = useState(attorneys);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoadedAttorneys(attorneys);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [attorneys]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            {title || t("sections.team.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description || t("sections.team.description")}
          </p>
        </div>

        {isLoading ? (
          <LoadingPage />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {loadedAttorneys.map((attorney, index) => (
              <AttorneyCard
                key={index}
                name={attorney.name}
                image={attorney.image}
                title={attorney.title}
                credentials={attorney.credentials}
                specializations={attorney.specializations}
                bio={attorney.bio}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
