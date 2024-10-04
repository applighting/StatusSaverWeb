import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import BackgroundVideo from "next-video/background-video";
// import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Status Saver for Story Save WA",
  description: "AI chatbot powered by ChatGPT & GPT-4.",
};


type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {/* <NextIntlClientProvider messages={messages}> */}
        <div className="flex flex-col h-lvh ">
          <Header />
          
          {children}
       
          <Footer />
          {/* <div className="hidden sm:block absolute -z-10 blur-2xl opacity-90 top-0 left-0 w-full h-full overflow-hidden">
            <BackgroundVideo src={'/bg.mp4'} playsInline/>
          </div> */}
          <div className="absolute -z-10  top-0 left-0 right-0 blur-2xl bottom-0 w-full h-full overflow-hidden">
            <Image
              src="/bg.png"
              width={1024}
              height={720}
              className=" w-full h-full"
              alt="Picture of the author"
            />
          </div>
          
        </div>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
