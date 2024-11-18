import "./App.css";
import CustomEditor from "./componets/EditoLayout";
import { EditorProvider } from "./context/EditorContext";

function App() {
  return (
    <EditorProvider>
      <CustomEditor />
    </EditorProvider>
  );
}

export default App;
