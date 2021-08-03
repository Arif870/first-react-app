import React, { Component } from "react";
import Styles from "./FormStyle.module.css";

class App extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
    gender: "",
    agree: false,
  };
  changeHandalar = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changeAgreeHnadalar = event => {
    this.setState({
      agree: event.target.checked,
    });
  };
  render() {
    const { name, country, bio, birthday, agree } = this.state;
    return (
      <div className={Styles.forms}>
        <h1>Working with forms in React</h1>
        <hr />
        <h3>About yourself : </h3>
        <input
          className={Styles.formControl}
          type="text"
          name="name"
          value={name}
          placeholder="Please enter your name"
          onChange={this.changeHandalar}
        />
        <select
          name="country"
          className={Styles.formControl}
          onChange={this.changeHandalar}
          value={country}
        >
          <option>-Select-</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
        </select>
        <textarea
          value={bio}
          onChange={this.changeHandalar}
          className={Styles.formControl}
          name="bio"
          id=""
          rows="5"
          placeholder="Tell us about yourself"
        ></textarea>
        <input
          style={{ marginBottom: "20px" }}
          value={birthday}
          onChange={this.changeHandalar}
          name="birthday"
          className={Styles.formControl}
          type="date"
        />
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={this.changeHandalar}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={this.changeHandalar}
          style={{ marginLeft: "10px" }}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Others"
          style={{ marginLeft: "10px" }}
          onChange={this.changeHandalar}
        />
        Others
        <br />
        <br />
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={this.changeAgreeHnadalar}
        />
        Agree all the terms and conditions
        <br />
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Show in Console
        </button>
      </div>
    );
  }
}

export default App;
