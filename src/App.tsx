import "./App.css";
import CustomEditor from "./componets/EditorLayout";
import { EditorProvider } from "./context/EditorContext";

function App() {
  return (
    <EditorProvider>
      <CustomEditor />
    </EditorProvider>
  );
}

export default App;
