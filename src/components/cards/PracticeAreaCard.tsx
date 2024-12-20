import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scale, Briefcase, Gavel, Home, Car, FileText } from "lucide-react";

interface PracticeAreaCardProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
}

const practiceAreaIcons: Record<string, React.ElementType> = {
  "Family Law": Home,
  "Criminal Defense": Gavel,
  "Corporate Law": Briefcase,
  "Civil Rights": Scale,
  "Auto Accidents": Car,
  "Estate Planning": FileText,
};

const PracticeAreaCard = ({
  icon: IconComponent = Scale,
  title = "Family Law",
  description = "Providing compassionate legal support for families navigating complex domestic matters including divorce, custody, and adoption.",
}: PracticeAreaCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/practice-areas/${title.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <Card
      className="w-[350px] h-[300px] bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="text-center">
        <div className="mx-auto p-4 rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-blue-900" />
        </div>
        <CardTitle className="text-xl font-semibold text-blue-900 mt-4">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PracticeAreaCard;
