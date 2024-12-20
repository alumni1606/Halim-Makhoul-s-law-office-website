import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AttorneyCardProps {
  name?: string;
  image?: string;
  title?: string;
  credentials?: string[];
  specializations?: string[];
  bio?: string;
}

const AttorneyCard = ({
  name = "Jane Smith",
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=lawyer1",
  title = "Senior Partner",
  credentials = ["J.D., Harvard Law School", "Bar Association Member"],
  specializations = ["Corporate Law", "Intellectual Property"],
  bio = "Specializing in corporate law with over 15 years of experience in handling complex business transactions and intellectual property matters.",
}: AttorneyCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className="w-[350px] bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <CardHeader className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-2xl font-bold text-blue-900">
          {name}
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          {t(`team.positions.${title.toLowerCase().replace(/ /g, "")}`)}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2 text-sm text-gray-700">
            {t("team.credentials")}
          </h4>
          <div className="space-y-1">
            {credentials.map((credential, index) => (
              <p key={index} className="text-sm text-gray-600">
                {credential}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm text-gray-700">
            {t("team.practiceAreas")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {specializations.map((specialization, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-50 text-blue-900"
              >
                {t(`nav.${specialization.toLowerCase().replace(/ /g, "")}`)}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttorneyCard;
