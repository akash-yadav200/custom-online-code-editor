import React, { createContext, useState } from "react";
import { EditorContextType, LanguageProps } from "../types/types";
import { languageOptions } from "../config/languageMap";
import { defineTheme } from "../config/ThemeMap";

const defaultLanguage: LanguageProps = {
  id: 63,
  name: "JavaScript",
  label: "JavaScript",
  value: "javascript",
  template: `console.log('Hello, World!');`,
};

export const EditorContext = createContext<EditorContextType>({
  code: "",
  setCode: () => {},
  selectedLanguage: languageOptions[0] || defaultLanguage,
  handleLanguageChange: () => {},
  selectedTheme: "vs-dark",
  handleThemeChange: () => {},
});

export const EditorProvider = ({ children }: React.PropsWithChildren) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0] || defaultLanguage
  );
  const [code, setCode] = useState(selectedLanguage.template);
  const [selectedTheme, setSelectedTheme] = useState("vs-dark");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    const languageValue: LanguageProps =
      languageOptions.find((l) => l.value === language) || languageOptions[0];
    setSelectedLanguage(languageValue);
    setCode(languageValue.template);
  };
  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const theme = e.target.value;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme)) {
      setSelectedTheme(theme);
    } else {
      defineTheme(theme).then(() => setSelectedTheme(theme));
    }
  }

  return (
    <EditorContext.Provider
      value={{
        code,
        setCode,
        selectedLanguage,
        handleLanguageChange,
        selectedTheme,
        handleThemeChange,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
