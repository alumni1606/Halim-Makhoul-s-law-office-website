import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PracticeAreaCard from "../cards/PracticeAreaCard";
import { LoadingPage } from "@/components/ui/loading-spinner";
import { Scale, Briefcase, Gavel, Home, Car, FileText } from "lucide-react";

interface PracticeArea {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface PracticeAreasSectionProps {
  areas?: PracticeArea[];
  sectionTitle?: string;
  sectionDescription?: string;
}

const defaultAreas: PracticeArea[] = [
  {
    icon: Home,
    title: "Family Law",
    description:
      "Providing compassionate legal support for families navigating complex domestic matters including divorce, custody, and adoption.",
  },
  {
    icon: Gavel,
    title: "Criminal Defense",
    description:
      "Expert defense representation for individuals facing criminal charges, ensuring their rights are protected throughout the legal process.",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description:
      "Comprehensive legal services for businesses, including formation, contracts, mergers and acquisitions, and regulatory compliance.",
  },
  {
    icon: Scale,
    title: "Civil Rights",
    description:
      "Dedicated advocacy for individuals whose constitutional rights have been violated, fighting for justice and equality.",
  },
  {
    icon: Car,
    title: "Auto Accidents",
    description:
      "Representing victims of vehicle accidents, helping them secure compensation for injuries, damages, and related losses.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Strategic planning for asset protection and distribution, including wills, trusts, and power of attorney arrangements.",
  },
];

const PracticeAreasSection = ({
  areas = defaultAreas,
  sectionTitle,
  sectionDescription,
}: PracticeAreasSectionProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAreas, setLoadedAreas] = useState(areas);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoadedAreas(areas);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [areas]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {sectionTitle || t("sections.practiceAreas.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {sectionDescription || t("sections.practiceAreas.description")}
          </p>
        </div>

        {isLoading ? (
          <LoadingPage />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {loadedAreas.map((area, index) => (
              <PracticeAreaCard
                key={index}
                icon={area.icon}
                title={t(`nav.${area.title.toLowerCase().replace(/ /g, "")}`)}
                description={area.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeAreasSection;
