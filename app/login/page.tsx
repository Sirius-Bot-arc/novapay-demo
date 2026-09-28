import { Page } from "@/components/Shell";
import DemoForm from "@/components/DemoForm";
export const metadata = { title: "Log in | NovaPay Technologies" };
export default function Login() {
  return (
    <Page title="Welcome back." lead="Visual demo only. There is no authentication behind this page.">
      <DemoForm cta="Log in" done="Demo only: no login was attempted." fields={[["Email", "email", "email"], ["Password", "password", "password"]]} />
    </Page>
  );
}
