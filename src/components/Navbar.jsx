import React from "react";

const Navbar = ({ theme, changetheme }) => {
  return (
    <nav class={theme ? "navbar bg-dark" : "navbar bg-danger"}>
      <div class="container-fluid">
        <span
          style={{ cursor: "pointer" }}
          class="navbar-brand text-light mb-0 h1"
        >
          <img
            style={{ height: "40px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wl3mX-88jiunuuxJQbTySsLaJfI7qCoqvJeOf0G9dvlFryMSFwc1t4X9qnpBoV8NRMY&usqp=CAU"
            alt=""
          />
          Feedback-app
        </span>
        <button
          className={
            theme ? "btn btn-info rounded-0" : "btn btn-warning rounded-0"
          }
          onClick={() => changetheme()}
        >
          {theme ? "LIGHT MODE" : "DARK MODE"}
        </button>
      </div>
      {/* <button
        className="float-end"
        // onClick={() => ChangeTheme()}
        style={{ border: "none", background: "transparent" }}
      >
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="checkbox" />
          <label class="form-check-label" for="checkbox">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="ball"></span>
          </label>
        </div>
      </button> */}
    </nav>
  );
};

export default Navbar;
