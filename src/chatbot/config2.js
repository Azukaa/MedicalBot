// Config starter code
// import React from "react";

import { createChatBotMessage } from "react-chatbot-kit";
const config2 = {
  initialMessages: [createChatBotMessage("Hi!, I am Beatrice,  QuicHealth consultant assistant" 
),createChatBotMessage("Kindly tell me your working email" 
)],

  customComponents: {
    // Replaces the default header
    header: () => null
 },


}

export default config2