import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Halim Makhoul's Law Office",
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
  ctaText,
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[600px] w-full bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center h-full text-center text-white space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200">
            {subtitle || t("hero.subtitle")}
          </p>
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-lg"
          >
            {ctaText || t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
