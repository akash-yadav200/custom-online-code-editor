import Editor from "@monaco-editor/react";
import { useState } from "react";
import { languageOptions } from "../config/languageMap";
import { editorThemesMap, defineTheme } from "./ThemeMap";
import axios from "axios";

interface LanguageProps {
  id: number;
  name: string;
  label: string;
  value: string;
  template: string;
}
interface ThemeProps {
  [key: string]: string;
}

export default function CustomEditor() {
  const themeOptions: ThemeProps = editorThemesMap;
  const [seletedLanguage, setSelectedLanguage] = useState({
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
    template: `console.log('Hello, World!');`,
  });
  const [seletedTheme, setSelectedTheme] = useState("vs-dark");
  const [code, setCode] = useState(seletedLanguage.template || "");

  const [outputSection, setOutputSection] = useState("");
  const [inputSection, setInputSection] = useState("");

  //console.log(apiUrl, apiKey, apiHost);
  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const theme = e.target.value;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme)) {
      setSelectedTheme(theme);
    } else {
      defineTheme(theme).then(() => setSelectedTheme(theme));
    }
  }
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    console.log("language...", language);
    const languageValue: LanguageProps =
      languageOptions.find((l) => l.value === language) || languageOptions[0];
    setSelectedLanguage(languageValue);
  };
  const checkStatus = async (token: string) => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    };
    try {
      const response = await axios.request(options);
      const statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutputSection(atob(response.data.stdout));
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  async function SubmitData() {
    console.log(code);
    const formData = {
      language_id: seletedLanguage.id,
      source_code: btoa(code),
      stdin: btoa(inputSection),
    };

    const options = {
      method: "POST",
      url: import.meta.env.VITE_RAPID_API_URL,
      params: {
        base64_encoded: "true",
        wait: "false",
        fields: "*",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
        "Content-Type": "application/json",
      },
      data: formData,
    };

    try {
      const response = await axios.request(options);

      if (response.data) {
        const { token } = response.data;
        checkStatus(token); // Poll every 1000 ms (1 second)
      }
    } catch (error) {
      console.error("Error submitting data:", error);
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
            onChange={handleLanguageChange}
          >
            {languageOptions.map((language: LanguageProps) => (
              <option key={language.id} value={language.value}>
                {language.label}
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
          language={seletedLanguage.value}
          value={code}
          theme={seletedTheme}
          options={{
            wordWrap: "on",
            minimap: {
              enabled: false,
            },
          }}
          height={`80vh`}
          width={`100%`}
          onChange={(value) => setCode(value!)}
        />
        <div className="w-2/5 h-full bg-slate-950 text-white">
          <div className="text-2xl w-full h-2/5 p-2 rounded-md bg-slate-400 text-white border-gray-200">
            <textarea
              name="outputSection"
              id="outputSection"
              className="w-full h-full p-2 rounded-md bg-slate-400 text-white border-gray-200"
              value={outputSection}
              onChange={() => {
                console.log("test");
              }}
            ></textarea>
          </div>
          <div className="text-2xl w-full h-1/5 flex items-center justify-center">
            <button
              type="button"
              className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={SubmitData}
            >
              Compile and Execute
            </button>
          </div>
          <div className="text-2xl w-full h-2/5 p-2 rounded-md bg-slate-400 text-white border-gray-200">
            <textarea
              name="inputSection"
              id="inputSection"
              className="w-full h-full p-2 rounded-md bg-slate-400 text-white border-gray-200"
              value={inputSection}
              onChange={(e) => setInputSection(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
