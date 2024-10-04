import { Link } from "@/navigation";
import Container from "../Container";
import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations();

  return (
    <footer className=" text-white py-4">
      <Container className={""}>
        <div className="flex w-full justify-between items-center flex-col sm:flex-row gap-2">
          <span>Copyright © 2024 Status Saver for Story Save WA.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy">{t('privacyPolicy')}</Link>
            <Link href="/terms-of-use"> {t('termsOfUse')}</Link>
            <Link href="/eula"> E.U.L.A.</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}