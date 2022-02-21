import React from "react";
import { LanguageSelector } from "./style";
import { navigate } from "gatsby";
import linkResolver from "../../../prismic/linkResolver";

export default function LanguageSwitcher({ langData }) {
  const handleLangChange = (event) => {
    navigate(event.target.value);
  };
  return (
    <LanguageSelector defaultValue={langData.lang} onChange={handleLangChange}>
      <option value={langData.lang}>
        {langData.lang.slice(0, 2).toUpperCase()}
      </option>
      {langData.altLangs.map((altLang) => {
        return (
          <option value={linkResolver(altLang)} key={altLang.id}>
            {altLang.lang.slice(0, 2).toUpperCase()}
          </option>
        );
      })}
    </LanguageSelector>
  );
}
