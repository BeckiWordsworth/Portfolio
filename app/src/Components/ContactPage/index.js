import React from "react"
import "./style.css"



class ContactPage extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""

    }
  }


  handleSubmit = () =>  {



  }


  queryChange = (evt) => {
  this.setState({query: evt.target.value})
}


   render() {
     return (

       <div className="ContactItem">

       <h2> Contact me </h2>
       <hr />

       <p> If you have any questions about my projects, then you’re welcome to send me an email at the address below. </p>

       <p><strong>Email me: Becki.Wordsworth - AT - Gmail.com</strong> </p>

       <p>If you just want to say hello or make contact, then ping me on <a href="www.twitter.com/beckiwordsworth">Twitter</a> or connect with me on <a href="www.linkedin.com/beckiwordsworth">LinkedIn</a></p>
       </div>

     );
   }
 }

export default ContactPage
