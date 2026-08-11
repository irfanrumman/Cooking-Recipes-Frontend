import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import ContactForm from "./_components/ContactForm";

const contactDetails = [
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@cookingrecipes.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPinIcon,
    label: "Address",
    value: "123 Kitchen Lane, Flavor Town",
  },
];

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Get in Touch</h1>
        <p className="text-balance text-muted-foreground sm:text-lg">
          Questions, feedback, or a recipe idea you&apos;d like to share?
          We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <Card key={detail.label}>
                <CardContent className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="lg:col-span-3">
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
