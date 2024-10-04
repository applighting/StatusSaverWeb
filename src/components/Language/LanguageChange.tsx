'use client'

import { langs } from "@/config";
import { LanguageIcon } from "@heroicons/react/16/solid";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react"

export default function LanguageBox() {

  const router = useRouter();
  const localActive = useLocale();


  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`)
  }

  return (
    <form className="flex justify-center items-center">
      <label htmlFor="countries" className="text-sm mr-2">
        <LanguageIcon className="h-5 w-5 text-gray-50" />
      </label>
      <select defaultValue={localActive}
        onChange={onSelectChange}
        id="countries" className="border-none outline-none text-sm rounded-lg block w-full p-1 bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
        {langs.map(({ locale, name }) => (
          <option
          
            
            key={locale}
            value={locale}
          >
            {name}
          </option>
        ))}
      </select>
    </form>
  )
}