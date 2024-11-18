import Editor from "@monaco-editor/react";
import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

export default function EditorComponent() {
  const { seletedLanguage, selectedTheme, code, setCode } =
    useContext(EditorContext);

  return (
    <Editor
      language={seletedLanguage.value}
      value={seletedLanguage.template || code}
      theme={selectedTheme}
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
  );
}
