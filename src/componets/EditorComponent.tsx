import Editor from "@monaco-editor/react";
import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

export default function EditorComponent() {
  const { selectedLanguage, selectedTheme, code, setCode } =
    useContext(EditorContext);

  return (
    <Editor
      language={selectedLanguage.value}
      value={code}
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
