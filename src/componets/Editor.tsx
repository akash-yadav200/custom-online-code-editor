import Editor from "@monaco-editor/react";
import { useState } from "react";
import languageMap from "./LanguageMap";
import { editorThemesMap, defineTheme } from "./ThemeMap";

interface LanguageProps {
  [key: string]: {
    name: string;
    value: string;
  };
}
interface ThemeProps {
  [key: string]: string;
}

export default function CustomEditor() {
  const languages: LanguageProps = languageMap;
  const themeOptions: ThemeProps = editorThemesMap;
  const [seletedLanguage, setSelectedLanguage] = useState("javascript");
  const [seletedTheme, setSelectedTheme] = useState("vs-dark");
  const defaultValue: string = languages[seletedLanguage].value || "";
  console.log(seletedTheme);

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
    <div className="overlay w-full h-screen shadow-4xl bg-slate-600">
      <div className="flex h-1/6 items-center justify-center w-full ">
        <div className="w-2/5 h-full  bg-slate-950 text-white">
          <div className="text-2xl h-full flex items-center ">
            Judge0 Code Editor
          </div>
        </div>
        <div className="languageSelector w-1/5 h-full flex items-center bg-slate-950 text-white">
          <select
            name="language"
            id="language"
            className="w-80 h-10 rounded-md bg-blue-950  text-white"
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {Object.keys(languages).map((key) => (
              <option key={key} value={key}>
                {languages[key].name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/5 h-full flex items-center bg-slate-950 text-white ps-3">
          <select
            name="theme"
            id="theme"
            className="w-80 h-10 rounded-md bg-blue-950  text-white"
            onChange={handleThemeChange}
          >
            <option value="vs-dark">vs-dark</option>

            {Object.keys(themeOptions).map((key) => (
              <option key={key} value={key}>
                {themeOptions[key]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="h-4/5 rounded-md w-full flex  items-center justify-center">
        <Editor
          language={seletedLanguage}
          value={defaultValue}
          theme={seletedTheme}
          options={{
            wordWrap: "on",
            minimap: {
              enabled: false,
            },
          }}
          height={`80vh`}
          width={`100%`}
        />
        <div className="w-2/5 h-full bg-slate-950 text-white">
          <div className="text-2xl w-full h-2/5 p-2 rounded-md bg-slate-400 text-white border-gray-200">
            output section
          </div>
          <div className="text-2xl w-full h-1/5 flex items-center justify-center">
            <button
              type="button"
              className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Compile and Execute
            </button>
          </div>
          <div className="text-2xl w-full h-2/5 p-2 rounded-md bg-slate-400 text-white border-gray-200">
            input section
          </div>
        </div>
      </div>
    </div>
  );
}
