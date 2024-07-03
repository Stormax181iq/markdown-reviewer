import { useState } from "react";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [content, setContent] = useState(
    "# Title 1 \n ## Title 2 \n [link](https://www.react.dev) \n\n `<div></div>` \n ``` //multi-line code \n <div></div> \n``` \n > quote \n\n > from author \n\n **bold** \n _italic_"
  );
  function handleEditorChange(e) {
    setContent(e.target.value);
  }
  return (
    <div className="bg-main flex flex-col justify-center items-center">
      <Editor content={content} onEditorChange={handleEditorChange} />
      <Preview content={content} />
    </div>
  );
}

export default App;
