import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AverageRating from "./components/AverageRating";
import ListGroup from "./components/ListGroup";
import ChangeTheme from "./components/ChangeTheme";

const App = () => {
  // Change Theme

  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    theme ? setTheme(false) : setTheme(true);
  };

  return (
    <div>
      <Navbar theme={theme} ChangeTheme={ChangeTheme} />
      {/* <ChangeTheme /> */}
      <div className="container p-5">
        <Form />
        <AverageRating />
        <ListGroup />
      </div>
    </div>
  );
};
export default App;