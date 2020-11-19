import React, {Component} from 'react'

class FormContainer extends Component {
    constructor(){
        super()
        this.state = {
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        
        const {value, type, name} = event.target
        this.setState({
            [name]: value
        })
    }

    render (){
        return(
            <form>
                <h3>Please Enter your email</h3>
                <br />
                <input 
                    type = "text"
                    placeholder = "Enter your email"
                    value = {this.state.email}
                    name = "email"
                    onChange = {this.handleChange}
                    />
                <h3>Kindly explain what brings you to QuicHealth today</h3>
                <br />
                <textarea />
                <br />
                <h3>How long has it been going on for?</h3>
                <br />
                <textarea />
                <br />
                
                <button>Submit</button>
            </form>
        )
    }
}

export default FormContainer