import React, { useState } from "react";
function Application() {
  const [text, setText] = useState("");

  function handlechange(event) {
    setText(event.target.value);
  }

  function uppercase() {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  function lowercase() {
    let newtext1 = text.toLowerCase();
    setText(newtext1);
  }

  function cleartext() {
    setText("");
  }

  function copytext(){
    let x=document.getElementById("inputtext");
    x.select();
    navigator.clipboard.writeText(x.value);

  }

  return (
    <div className="container my-10">
      <textarea
        value={text}
        onChange={handlechange}
        placeholder="Enter text here..."
       rows={10} cols={100} id="inputtext"></textarea>
      <br />
      <button className="btn btn-primary mx-2" onClick={uppercase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={lowercase}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={cleartext}>
        Clear text
      </button>
      <button className="btn btn-primary mx-2" onClick={copytext}>
        Copy text
      </button>

      <div>
        <p>
          {text.length} characters {text.split(" ").length}words
        </p>
      </div>
    </div>
  );
}

export default Application;
