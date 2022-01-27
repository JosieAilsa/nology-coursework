import "./Greeting.scss";

const Greeting = (props) => {
  const {
    createdBy,
    greeting,
    originCountry
  } = props.greeting;

  return (
    <div className="greeting">
      <h3>{greeting}</h3>
      <p>Usually spoken in: {originCountry}</p>
      <p>Added by: {createdBy}</p>
    </div>
  )
}

export default Greeting
