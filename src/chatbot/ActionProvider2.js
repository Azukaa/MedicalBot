// ActionProvider starter code
const axios = require("axios")
class ActionProvider2 {
    constructor(createChatBotMessage, setStateFunc, createClientMessage,value) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      
    };

    toModel = () => {
        // This is where i want to get the message from the messageParser file so i can send it to the api
        // const axios = require("axios")
        // console.log(MessageParser.lowercase)
        if(localStorage.getItem('message1') && localStorage.getItem('emailResponse')) {
            const messag = JSON.parse(localStorage.getItem("message1"))
            const email = JSON.parse(localStorage.getItem("emailResponse"))
            const newPost = {
                "sentence": messag
                };
                let obj;
                
                
                const sendReq = async (newPost) => {
                    try{
                        const resp = await axios.post("https://quicbotapi.herokuapp.com/classify2", newPost);
                        obj = resp.data
                        if(obj === "I dont seem to understand what you entered, can you please re-enter your input"){
                            console.log(obj);
                            // console.log(obj.response)
                            const message = this.createChatBotMessage(obj);
                            this.addMessageToState(message);
                        }else{
                            console.log(obj);
                            console.log(obj.response)
                            const message = this.createChatBotMessage(obj.response);
                            this.addMessageToState(message);
                            postData(email,messag)
                        }
            
                    }catch(err){
                        console.error(err)
                    }
                };
                
                sendReq(newPost)
                // postData(email,messag)
        
        }
        
        
    }
    
    
    greet = () => {
        
        let message = this.createChatBotMessage("Hi!, I am Beatrice,  QuicHealth  assistant chatbot");
        let message2 = this.createChatBotMessage("Kindly tell me your working email")
    
        this.addMessageToState(message);
        this.addMessageToState(message2);
    }

    handleIntro  = () => {
        let message = this.createChatBotMessage("Kindly tell me your health challenges and I will deliver it to the expert of your choice")
        this.addMessageToState(message)
    }

    handleIllness = () => {
        let message = this.createChatBotMessage("How long has it been going on for?")
        this.addMessageToState(message)

    }
    handleDuration = () => {
        let message = this.createChatBotMessage("Have you started any treatment for it? if yes, what treatment is that?")
        this.addMessageToState(message)
    }
    handleTreatment = () => {
        let message = this.createChatBotMessage("Thanks fo sharing, your complaints would be under review by an expert before your appointment")
        this.addMessageToState(message)
        setTimeout(function(){
            window.location.replace('patient_dashboard.html')
         }, 5000);
        // window.location.replace("http://stackoverflow.com");
    }
    
    notUnderstood = () => {
        const message = this.createChatBotMessage("I don't understand, can you please re-enter your input");
        this.addMessageToState(message);
    }
    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    }
  }

  function postData (email, message) {
    axios({
            method: 'post',
            url: 'http://telemedicine.twcnigeria.org/api/v1/save-message',
            data: {email, message}
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        })
}
  
  export default ActionProvider2;