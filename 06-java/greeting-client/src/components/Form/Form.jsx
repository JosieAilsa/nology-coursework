import { useState } from "react";
import "./Form.scss";

// form styles jacked from here
// https://codepen.io/banunn/pen/AFnal

const Form = () => {
  const [greeting, setGreeting] = useState({
    createdBy: "",
    greeting: "",
    originCountry: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(greeting)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Add A New Greeting</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" onInput={(e) => setGreeting({ ...greeting, createdBy: e.target.value })} />
        <input type="text" placeholder="greeting" onInput={(e) => setGreeting({ ...greeting, greeting: e.target.value })} />
        <input type="text" placeholder="origin country" onInput={(e) => setGreeting({ ...greeting, originCountry: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;