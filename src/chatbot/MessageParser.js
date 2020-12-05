const axios = require("axios")
// MessageParser starter code
class MessageParser2 {
    
    constructor(actionProvider,  state) {
      this.actionProvider = actionProvider;
      this.state = state;
      this.lowercase = "";
      this.email = '';
      this.valid = false;
    }
  
    parse(message1) {
            console.log(message1);
            localStorage.setItem('message1', JSON.stringify(message1))
            
            this.lowercase = message1.toLowerCase();
            if(message1 === '' && localStorage.getItem('message1')) {
                message1 = JSON.parse(localStorage.getItem("message1"))
            }
            
            if(this.email === '' && localStorage.getItem('emailResponse')) {
                this.email = JSON.parse(localStorage.getItem("emailResponse"))
            }
        
            
            if(this.lowercase.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)){
                this.actionProvider.handleIntro()
                this.email = this.lowercase
                // console.log('New email is', this.email)
                localStorage.setItem('emailResponse', JSON.stringify(this.email))
                this.valid = true
        
            }else if(this.lowercase.includes("hi")|| this.lowercase.includes("hello") || this.lowercase.includes("hey")||
            this.lowercase.includes("good day")|| this.lowercase.includes("whats up")){
                this.actionProvider.greet()
            }else if (this.lowercase.includes("yes")|| this.lowercase.includes("no") || this.lowercase.includes("yeah")|| 
            this.lowercase.includes("nah") || this.lowercase.includes("yh") || this.lowercase.includes("took")
            || this.lowercase.includes("drugs")|| this.lowercase.includes("medicine") || this.lowercase.includes("bought")||
            this.lowercase.includes("bought") || this.lowercase.includes("not yet")|| this.lowercase.includes("started")){
                this.actionProvider.handleTreatment()
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }

            }else{
                this.actionProvider.toModel()

            }


            
        
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

export default MessageParser2;

