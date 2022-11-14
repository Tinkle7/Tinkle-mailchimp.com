// import React from "react";
// import Navbar from "../Components/Navbar";

// export default function Signup() {
//   return (
//     <div>
//       <Navbar />
//       <h1>signup</h1>
//     </div>
//   );
// }

import axios from "axios";
import styles from "../Components/SignupComponents/Signup.module.css";
import { useState } from "react";
import styled from "styled-components";
import PasswordTab from "../Components/SignupComponents/PasswordTab";
import { Link } from "react-router-dom";

export default function Signup() {
  var pattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/;
  const [email, setEmail] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [user, setUser] = useState(false);
  const [button, setButton] = useState(false);
  const [detail, setDetail] = useState({
    email: "",
    username: "",
    password: "",
  });

  const Button = styled.button`
    height: 4.5rem;
    width: 13.7rem;
    background-color: ${button ? "#007C89" : "white"};
    border: 1px solid ${button ? "#007C89" : "#BDBBB9"};
    color: ${button ? "#FFFFFF" : "#BDBBB9"};
    font-size: 1.6rem;
    letter-spacing: -3%;
    font-weight: 500;
    cursor: pointer;
  `;

  const CheckBox = styled.input`
    height: 2.2rem;
    width: 2.3rem;
    border: 1px solid #bdbbb9;
    border-radius: 0.2rem;
    margin: 0rem 1rem 0rem 4.3rem;
  `;

  const handleEmail = (e) => {
    if (e.target.value.match(pattern) || e.target.value === "") {
      setEmail(false);
      e.target.style.outlineColor = "#007C89 !important";
    } else {
      setEmail(true);
      e.target.style.outlineColor = "#F25F25 !important";
    }
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3001/create", detail);
    } catch (err) {
      console.log(err);
    }
    localStorage.setItem("user", JSON.stringify(detail));
  };

  return (
    <div className={styles.signup}>
      <img
        src="https://avatar-prod-us-east-2.webexcontent.com/Avtr~V1~6078fba4-49d9-4291-9f7b-80116aab6974/V1~caa7881d-d16f-464c-afc2-af291c9e8fcc~63dffdd181b0464790934671fcc70c04"
        alt=""
      />
      <div className={styles.signupComponent}>
        <h3 className={styles.h3}>Sign up for Mailchimp</h3>
        <p>
          Create a free account or <span>Log in</span>
        </p>
        <div className={styles.formS}>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={detail.email}
              onChange={handleEmail}
            />
            <br />
            {email ? <span>Please enter a valid email</span> : <></>}
          </div>
          <div>
            <p>Username</p>
            <br />
            <input
              type="text"
              name="username"
              value={detail.username}
              onChange={handleUser}
              onClick={() => setUsername(true)}
              onBlur={() => setUsername(false)}
            />
            {username ? (
              <h5 className={styles.h5}>
                Choose a username that contains only letters and numbers, or use
                your email address. This is for login only.
              </h5>
            ) : user ? (
              <span>
                Another user with this username already exists. Maybe it’s your
                evil twin. Spooky
              </span>
            ) : (
              <></>
            )}
          </div>
          <PasswordTab
            password={password}
            setPassword={setPassword}
            setButton={setButton}
            detail={detail}
            setDetail={setDetail}
          />
          <Button
            className={styles.signupBtn}
            onClick={submitData}
            type="submit"
          >
            <Link to="/">Sign Up</Link>
          </Button>
          <CheckBox type="checkbox" />
          <p>
            I don't want to receive updates from Mailchimp related to marketing
            best practices, product and feature updates, and promotions.
          </p>
        </div>
        <p>
          By clicking the "Sign Up" button, you are creating a Mailchimp
          account, and you agree to Mailchimp's <span>Terms of Use</span> and{" "}
          <span>Privacy Policy</span>.
        </p>
        <p>
          ©2001–2021 All Rights Reserved. Mailchimp® is a registered trademark
          of The Rocket Science Group. Cookie Preferences, Privacy, and Terms.
        </p>
      </div>
      <img className={styles.image} src="/images/signup.png" alt="" />
    </div>
  );
}
