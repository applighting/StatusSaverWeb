import Image from "next/image";
import Container from "../Container";
import LanguageChange from "../Language/LanguageChange";
import Link from "next/link";
import { memo } from "react";




function Header() {

  return (
    <header className="">
      <Container className={""}>
        <div className="w-full h-20 flex justify-between items-center pt-6 pb-6">
          <Link href="/">
            <Image src="/logo2.png" alt="Logo" width={160} height={130} />
          </Link>
          <LanguageChange />
        </div>
      </Container>
    </header>
  );
}

export default memo(Header);