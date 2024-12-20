import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { NetworkError, ApiError, handleError } from "@/lib/errors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useToast } from "@/components/ui/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { submitContactForm } from "@/lib/contact";

interface ContactSectionProps {
  address?: string;
  phone?: string;
  email?: string;
}

const ContactSection = ({
  address = "123 Legal Avenue, Suite 500, New York, NY 10001",
  phone = "(555) 123-4567",
  email = "contact@halimmakhoul.law",
}: ContactSectionProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContactForm(data);
      toast({
        title: t("sections.contact.form.success"),
        description: t("sections.contact.form.successMessage"),
      });
      reset();
    } catch (error) {
      let title = t("sections.contact.form.error");
      let description = t("sections.contact.form.errorMessage");

      if (error instanceof NetworkError) {
        description = t("errors.network");
      } else if (error instanceof ApiError) {
        description = t("errors.server");
      } else {
        const handledError = handleError(error);
        description = handledError.message;
      }

      toast({
        title,
        description,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {t("sections.contact.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("sections.contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-900">
                {t("sections.contact.form.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t("sections.contact.form.firstName")}
                    </label>
                    <Input
                      {...register("firstName")}
                      placeholder={t(
                        "sections.contact.form.firstNamePlaceholder",
                      )}
                      className={`w-full ${errors.firstName ? "border-red-500" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t("sections.contact.form.lastName")}
                    </label>
                    <Input
                      {...register("lastName")}
                      placeholder={t(
                        "sections.contact.form.lastNamePlaceholder",
                      )}
                      className={`w-full ${errors.lastName ? "border-red-500" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("sections.contact.form.email")}
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder={t("sections.contact.form.emailPlaceholder")}
                    className={`w-full ${errors.email ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("sections.contact.form.phone")}
                  </label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder={t("sections.contact.form.phonePlaceholder")}
                    className={`w-full ${errors.phone ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("sections.contact.form.message")}
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder={t("sections.contact.form.messagePlaceholder")}
                    className={`w-full min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner className="mr-2" />
                      {t("sections.contact.form.sending")}
                    </>
                  ) : (
                    t("sections.contact.form.send")
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {t("sections.contact.office.address")}
                      </h3>
                      <p className="text-gray-600">{address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {t("sections.contact.form.phone")}
                      </h3>
                      <p className="text-gray-600">{phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {t("sections.contact.form.email")}
                      </h3>
                      <p className="text-gray-600">{email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {t("sections.contact.office.title")}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {t("sections.contact.office.weekdays")}
                    </span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {t("sections.contact.office.saturday")}
                    </span>
                    <span className="text-gray-900">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {t("sections.contact.office.sunday")}
                    </span>
                    <span className="text-gray-900">
                      {t("sections.contact.office.closed")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
