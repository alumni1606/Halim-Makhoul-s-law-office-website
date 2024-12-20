import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            practiceAreas: "Practice Areas",
            familyLaw: "Family Law",
            criminalDefense: "Criminal Defense",
            corporateLaw: "Corporate Law",
            civilRights: "Civil Rights",
            autoAccidents: "Auto Accidents",
            estatePlanning: "Estate Planning",
            team: "Our Team",
            contact: "Contact",
            quickLinks: "Quick Links",
          },
          team: {
            credentials: "Credentials",
            practiceAreas: "Practice Areas",
            positions: {
              managingpartner: "Managing Partner",
              seniorpartner: "Senior Partner",
              associatepartner: "Associate Partner",
              partner: "Partner",
              associate: "Associate",
            },
            bio: "Biography",
          },
          hero: {
            subtitle: "Dedicated to Justice, Committed to Excellence",
            cta: "Schedule a Consultation",
          },
          sections: {
            practiceAreas: {
              title: "Our Practice Areas",
              description:
                "We offer comprehensive legal services across multiple practice areas, providing expert counsel and representation for all your legal needs.",
            },
            team: {
              title: "Our Legal Team",
              description:
                "Meet our experienced attorneys dedicated to serving your legal needs with expertise and professionalism.",
            },
            contact: {
              title: "Contact Us",
              description:
                "Get in touch with our legal team for a consultation. We're here to help you navigate your legal matters with expertise and dedication.",
              form: {
                title: "Send us a Message",
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone",
                message: "Message",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent!",
                successMessage: "We'll get back to you as soon as possible.",
                error: "Error",
                errorMessage: "Failed to send message. Please try again.",
                firstNamePlaceholder: "John",
                lastNamePlaceholder: "Doe",
                emailPlaceholder: "john@example.com",
                phonePlaceholder: "(555) 123-4567",
                messagePlaceholder: "Please describe your legal matter...",
              },
              office: {
                title: "Office Hours",
                address: "Office Address",
                weekdays: "Monday - Friday",
                saturday: "Saturday",
                sunday: "Sunday",
                closed: "Closed",
              },
            },
          },
          footer: {
            description:
              "Providing expert legal services with integrity and dedication.",
            copyright: "All rights reserved.",
          },
          errors: {
            network:
              "Unable to connect to the server. Please check your internet connection and try again.",
            server: "A server error occurred. Please try again later.",
            unexpected: "An unexpected error occurred. Please try again.",
            validation: {
              firstName: "First name must be at least 2 characters",
              lastName: "Last name must be at least 2 characters",
              email: "Invalid email address",
              phone: "Invalid phone number",
              message: "Message must be at least 10 characters",
            },
          },
        },
      },
      he: {
        translation: {
          nav: {
            home: "דף הבית",
            practiceAreas: "תחומי התמחות",
            familyLaw: "דיני משפחה",
            criminalDefense: "משפט פלילי",
            corporateLaw: "משפט מסחרי",
            civilRights: "זכויות אזרח",
            autoAccidents: "תאונות דרכים",
            estatePlanning: "תכנון עזבון",
            team: "הצוות שלנו",
            contact: "צור קשר",
            quickLinks: "קישורים מהירים",
          },
          team: {
            credentials: "הסמכות",
            practiceAreas: "תחומי התמחות",
            positions: {
              managingpartner: "שותף מנהל",
              seniorpartner: "שותף בכיר",
              associatepartner: "שותף",
              partner: "שותף",
              associate: "עורך דין",
            },
            bio: "ביוגרפיה",
          },
          hero: {
            subtitle: "מחויבים לצדק, מחויבים למצוינות",
            cta: "קבע פגישת ייעוץ",
          },
          sections: {
            practiceAreas: {
              title: "תחומי התמחות",
              description:
                "אנו מציעים שירותים משפטיים מקיפים במגוון תחומים, ומספקים ייעוץ וייצוג מקצועי לכל הצרכים המשפטיים שלך.",
            },
            team: {
              title: "הצוות המשפטי שלנו",
              description:
                "הכירו את עורכי הדין המנוסים שלנו המחויבים לשרת את הצרכים המשפטיים שלכם במקצועיות.",
            },
            contact: {
              title: "צור קשר",
              description:
                "צרו קשר עם הצוות המשפטי שלנו לייעוץ. אנחנו כאן כדי לעזור לכם לנווט בענייניכם המשפטיים במומחיות ובמסירות.",
              form: {
                title: "שלח לנו הודעה",
                firstName: "שם פרטי",
                lastName: "שם משפחה",
                email: "דוא״ל",
                phone: "טלפון",
                message: "הודעה",
                send: "שלח הודעה",
                sending: "שולח...",
                success: "ההודעה נשלחה!",
                successMessage: "נחזור אליך בהקדם האפשרי.",
                error: "שגיאה",
                errorMessage: "שליחת ההודעה נכשלה. אנא נסה שוב.",
                firstNamePlaceholder: "ישראל",
                lastNamePlaceholder: "ישראלי",
                emailPlaceholder: "israel@example.com",
                phonePlaceholder: "(055) 123-4567",
                messagePlaceholder: "אנא תאר את הנושא המשפטי שלך...",
              },
              office: {
                title: "שעות פעילות",
                address: "כתובת המשרד",
                weekdays: "שני - שישי",
                saturday: "שבת",
                sunday: "ראשון",
                closed: "סגור",
              },
            },
          },
          footer: {
            description: "מספקים שירותים משפטיים מקצועיים ביושרה ומסירות.",
            copyright: "כל הזכויות שמורות.",
          },
          errors: {
            network:
              "לא ניתן להתחבר לשרת. אנא בדוק את חיבור האינטרנט שלך ונסה שוב.",
            server: "אירעה שגיאת שרת. אנא נסה שוב מאוחר יותר.",
            unexpected: "אירעה שגיאה בלתי צפויה. אנא נסה שוב.",
            validation: {
              firstName: "שם פרטי חייב להכיל לפחות 2 תווים",
              lastName: "שם משפחה חייב להכיל לפחות 2 תווים",
              email: "כתובת דואר אלקטרוני לא תקינה",
              phone: "מספר טלפון לא תקין",
              message: "ההודעה חייבת להכיל לפחות 10 תווים",
            },
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
