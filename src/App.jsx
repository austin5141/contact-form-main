import './App.css'
import TextFields from './TextFields.jsx'
import Queries from './Queries.jsx'
import Message from './Message.jsx'
import Checkbox from './Checkbox.jsx'
import success from './assets/icon-success-check.svg'
import {useState} from 'react'

export default function App() {

  const domains = [".com", ".net", ".org", ".int", ".edu", ".gov", ".mil"]

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    message: "",
    checkbox: false
  })

  const [visibility, setVisibility] = useState("hidden")
  const [submitted, setSubmitted] = useState(false)
  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({...prevData, [name]: value}))
  }

  const handleCheckbox = (e) => {
    setData((prevData) => ({...prevData, checkbox: !prevData.checkbox}))
  }

  const error = "This field is required"
  const emailerror = "Please enter a valid email address"
  const checkerror = "To submit this form, please consent to being contacted"
  const queryerror = "Please select a query type"


  const submitHandler = (e) => {
    e.preventDefault()
    if (data.firstName != "" && data.lastName != "" && data.email != "" && data.email.includes("@") && domains.some(domain => data.email.endsWith(domain)) && data.query != "" && data.message != "" && data.checkbox == true) {
      setVisibility("visible")
    }
  }

  return (
    <main>
      <div className={`success ${visibility}`}>
        <div className="sent">
          <img src={success} alt="checkmark"/>
          <h2>Message Sent!</h2>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
      <div className="form">
        <form>
          <h1>Contact Us</h1>
            <TextFields 
              data = {data}
              handleChange = {handleChange}
              submitted = {submitted}
              error = {error}
              emailerror = {emailerror}
              domains = {domains}
            />
            <Queries
              data = {data}
              handleChange = {handleChange}
              submitted = {submitted}
              queryerror = {queryerror}
            />
            <Message
              data = {data}
              handleChange = {handleChange}
              submitted = {submitted}
              error = {error}
            />
            <Checkbox
              data = {data}
              handleCheckbox = {handleCheckbox}
              submitted = {submitted}
              checkerror = {checkerror}
            />
          <div className="submit formBox">
            <button type="submit" onClick={submitHandler}>Submit</button>
          </div>
        </form>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/austin5141">Austino</a>.
        </div>
      </div>
    </main>
  )
}