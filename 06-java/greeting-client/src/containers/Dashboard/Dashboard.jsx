import { useState, useEffect } from "react";
import "./Dashboard.scss";
import GreetingList from "../../components/GreetingList/GreetingList";
import Form from "../../components/Form/Form";
import Home from "../../components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [greetings, setGreetings] = useState([]);

  const getGreetings = () => {
    fetch("http://localhost:8080/greetings")
      .then(res => res.json())
      .then(json => setGreetings(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getGreetings();
  }, [greetings]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<GreetingList greetings={greetings} />} />
        <Route path="/new-greeting" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default Dashboard
