import React from "react";
import Chatbot from "react-chatbot-kit";
import config2 from "./chatbot/config2";
import ActionProvider2 from "./chatbot/ActionProvider2";
import MessageParser2 from "./chatbot/MessageParser";
import "./App.css";

function App2() {
  return (
    <div className="App">
        <Chatbot
          config={config2}
          actionProvider={ActionProvider2}
          messageParser={MessageParser2}
        />
    </div>
  );
}

export default App2;


