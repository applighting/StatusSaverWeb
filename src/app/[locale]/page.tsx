import Image from "next/image";

import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Home() {

  const t = useTranslations();

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden">
      <div className="flex-1">
        <Container className='h-full w-full flex justify-center items-center flex-col gap-6'>
          <Image src="/image.png" alt="Title Image" width={160} height={160} className="rounded-2xl border-2 border-slate-800" />
          <h1 className=" text-2xl sm:text-6xl font-bold tracking-wider text-center">{t('title')}</h1>
          <p className="sm:text-xl text-lg font-thin max-w-screen-sm text-center tracking-wider leading-6 sm:leading-[42px]">{t('text')}</p>
          <div className="flex gap-4">
            <Link href="https://apps.apple.com/us/app/status-saver-for-story-save-wa/id6736476639" target="_blank">
              <Image src="/appstore.svg" alt="App Store" width={180} height={60} />
            </Link>
            <div className="relative">
              <Image src="/playstore.svg" alt="Play Store" width={180} height={60} />
              <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-[2px] flex justify-center items-center font-semibold ">{t('verySoon')}</div>
            </div>
          </div>
        </Container>
      </div>
    </div>

  );
}
