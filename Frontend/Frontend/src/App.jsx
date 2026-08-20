import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [code, setcode] = useState(`function sum() {
  return 1+1
  }`);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
