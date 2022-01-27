import "./GreetingList.scss";
import Greeting from "../Greeting/Greeting";

const GreetingList = (props) => {
  return (
    <>
      <h2 className="heading">All The Greetings In The World...</h2>
      <div className="container">
        {props.greetings && props.greetings.map(greeting => <Greeting key={greeting.id} greeting={greeting} />)}
      </div>
    </>
  )
}

export default GreetingList
