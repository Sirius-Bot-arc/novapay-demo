import { Page } from "@/components/Shell";
import DemoForm from "@/components/DemoForm";
export const metadata = { title: "Contact | NovaPay Technologies" };
export default function Contact() {
  return (
    <Page title="Talk to our team." lead="Tell us what you are building. This form is a demo and sends nothing.">
      <DemoForm cta="Send message" done="Demo only: no data was sent." fields={[["Name", "text", "name"], ["Work email", "email", "email"], ["Message", "text", "message"]]} />
    </Page>
  );
}
