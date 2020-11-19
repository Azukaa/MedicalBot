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
  
    parse(message) {
            console.log(message);

            this.lowercase = message.toLowerCase();

        
            if(this.email === '' && localStorage.getItem('emailResponse')) {
                this.email = JSON.parse(localStorage.getItem("emailResponse"))
            }
        
            
            this.re = /^[0-9]+$/
            // console.log(this.lowercase)
            this.healthIssues = ["severe headache","headache","cough", "cattarh", "asthma","stomach pain", "body pains","malaria","fever",
            "feverish", "body pains","pregnancy", "asthama", "Allergy", "aneamia", "high blood pressur", "Urinary Retention", "hepatitis B",
            "diabetes", "Diarrhea", "chicken pox", "pneumonia", "high blood pressure", "jaundice", "cold/flu", "vomitting"];
        
            if(this.lowercase.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)){
                this.actionProvider.handleIntro()
                this.email = this.lowercase
                // console.log('New email is', this.email)
                localStorage.setItem('emailResponse', JSON.stringify(this.email))

            }else if(this.lowercase === "hello" || this.lowercase === "hey" || this.lowercase === "hi"){
                this.actionProvider.greet();

            }else if (this.lowercase.includes("yes")|| this.lowercase.includes("no") || this.lowercase.includes("yeah")|| 
            this.lowercase.includes("nah") || this.lowercase.includes("yh") || this.lowercase.includes("took")
            || this.lowercase.includes("drugs")|| this.lowercase.includes("medicine")){
            this.actionProvider.handleTreatment()
            if(this.email){
                // console.log('sending to database', this.email)
                postData(this.email, this.lowercase)
            }

            }else if (this.lowercase.includes("last") && this.lowercase.includes( "week")){
            this.actionProvider.handleDuration();
            if(this.email){
                // console.log('sending to database', this.email)
                postData(this.email, this.lowercase)
            }

            }else if(this.re.test(this.lowercase) != null && this.lowercase.includes( "days")){
                this.actionProvider.handleDuration();  
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }  

            }else if(this.lowercase.includes("since") && this.lowercase.includes( "night")){
                this.actionProvider.handleDuration();
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }

            }else if(this.lowercase.includes("this") && this.lowercase.includes("morning")){
                this.actionProvider.handleDuration(); 
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }   
                
            }else if(this.lowercase.includes("since") && this.lowercase.includes("week")){
                this.actionProvider.handleDuration(); 
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }   

            }else if(this.lowercase.includes("week") && this.lowercase.includes( "ago")){
                this.actionProvider.handleDuration();  
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }

            }else if(this.lowercase.includes("days") && this.lowercase.includes("ago")){
                this.actionProvider.handleDuration();   
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                } 

            }else if(this.lowercase.includes("days") && this.lowercase.includes("ago")){
                this.actionProvider.handleDuration(); 
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                } 

            }else if(this.re.test(this.lowercase) != null && this.lowercase.includes( "week")){
                this.actionProvider.handleDuration();    
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }

            }else if(this.re.test(this.lowercase) != null && this.lowercase.includes( "night")){
                this.actionProvider.handleDuration(); 
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }  

            }else if(this.re.test(this.lowercase) != null && this.lowercase.includes( "ago")){
                this.actionProvider.handleDuration(); 
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                } 

            }else if(this.re.test(this.lowercase) != null && this.lowercase.includes( "month")){
                this.actionProvider.handleDuration();  
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }   

            }else if(this.lowercase.includes("since") && this.lowercase.includes("month")){
                this.actionProvider.handleDuration();   
                if(this.email){
                    console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }   
            }else if(this.lowercase.includes("month") && this.lowercase.includes( "ago")){
                this.actionProvider.handleDuration();  
                if(this.email){
                    // console.log('sending to database', this.email)
                    postData(this.email, this.lowercase)
                }

            }else {
                // this.actionProvider.notUnderstood()
                // console.log(this.valid)
                for (let i = 0; i < this.healthIssues.length; i++){
                    if(this.lowercase.includes(this.healthIssues[i])){
                        this.actionProvider.handleIllness()
                        // console.log('Hi!',this.email, this.lowercase)
                        if(this.email){
                            // console.log('sending to database', this.email)
                            postData(this.email, this.lowercase)
                        }
                        this.valid = true
                        break;
                        }
                    }

                    // console.log(this.valid)

                    if (!this.valid) {
                        this.actionProvider.notUnderstood()
                    }

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