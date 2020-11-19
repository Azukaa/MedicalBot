// ActionProvider starter code

class ActionProvider2 {
    constructor(createChatBotMessage, setStateFunc, createClientMessage,value) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      
    };
    
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
  
  export default ActionProvider2;