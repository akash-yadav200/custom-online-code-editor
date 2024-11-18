import { useContext, useState } from "react";
import { languageOptions } from "../config/languageMap";
import { editorThemesMap as themeOptions } from "../config/ThemeMap";
import EditorComponent from "./EditorComponent";
import { EditorContext } from "../context/EditorContext";
import axios from "axios";
import { LanguageProps } from "../types/types";

export default function CustomEditor() {
  const { handleLanguageChange, seletedLanguage, code, handleThemeChange } =
    useContext(EditorContext);
  const [outputSection, setOutputSection] = useState("");
  const [inputSection, setInputSection] = useState("");
  const getExecutionStatus = async (token: string) => {
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

      // check execution status
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          getExecutionStatus(token); //if execution is still processing, poll every 1000
        }, 1000);
        return;
      } else {
        setOutputSection(atob(response.data.stdout));
        return;
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  async function runCode() {
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
        getExecutionStatus(token); // Poll every 1000 ms (1 second)
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
            Custom Code Editor with Judge0
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
        <EditorComponent />
        <div className="w-2/5 h-full bg-slate-950 text-white">
          <div className="text-2xl w-full h-2/5 p-2 rounded-md bg-slate-400 text-white border-gray-200">
            <textarea
              name="outputSection"
              id="outputSection"
              placeholder="Output"
              className="w-full h-full p-2 rounded-md bg-slate-400 text-white border-gray-200"
              value={outputSection}
              rows={10}
              cols={50}
              onChange={() => {
                console.log("test");
              }}
            ></textarea>
          </div>
          <div className="text-2xl w-full h-1/5 flex items-center justify-center">
            <button
              type="button"
              className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={runCode}
            >
              Run
            </button>
          </div>
          <div className="text-2xl w-full h-2/5 p-2 rounded-md bg-slate-400 text-white border-gray-200">
            <textarea
              name="inputSection"
              id="inputSection"
              placeholder="Input"
              rows={10}
              cols={50}
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
