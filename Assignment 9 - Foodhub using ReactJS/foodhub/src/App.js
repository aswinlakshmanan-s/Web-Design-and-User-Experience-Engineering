import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Jobs from './Pages/Jobs/Jobs';
import Contact from './Pages/Contact/Contact';

function App() {

  const navigate = useNavigate();

  const login = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (validEmail && validUserName && validPassword) {
      axios.get('http://localhost:8000/user/getAll').then(res => {
        console.log(res);
        validateUserExistence(res.data);
      }).catch(err => {
        console.log(err);
      });
    }
    else {
      alert("Please fill the data properly");
    }
  }

  const validateUserExistence = (res) => {
    console.log(document.getElementById("userName").value, document.getElementById("emailId").value)
    for (let i = 0; i < res.length; i++) {
      if (res[i].fullName == document.getElementById("userName").value && res[i].email == document.getElementById("emailId").value) {
        document.getElementById("loginView").style.display = "none";
        document.getElementById("headerView").style.display = "block";
        navigate('/home');
        break;
      }
      else {
        alert("User does not exists in the database");
      }
    }
  }

  var regExUserName = /^[a-zA-Z]+$/;
  var regExEmail = /([\w\.]+)@northeastern.edu/;
  var regExPassword1 = /(?=.*[0-9])/;
  var regExPassword2 = /(?=.*[!@#$%^&*])/;

  var validEmail = false;
  var validUserName = false;
  var validPassword = false;

  $(document).ready(() => {
    $("input#emailId").bind('keyup', function (e) {
      validationCheck(e, "emailId");
    });
    $("input#userName").bind('keyup', function (e) {
      validationCheck(e, "userName");
    });
    $("input#password").bind('keyup', function (e) {
      validationCheck(e, "password");
    });
  });

  const validationCheck = (e, idText) => {
    var value, type, em;
    value = e.target.value;
    type = idText;
    em = "error_" + type;

    switch (type) {
      case "emailId":
        if (!value.trim().match(regExEmail)) {
          document.getElementById(em).style.display = "block";
          validEmail = false;
        }
        else {
          document.getElementById(em).style.display = "none";
          validEmail = true;
        }
        break;
      case "userName":
        if (!value.trim().match(regExUserName)) {
          document.getElementById(em).style.display = "block";
          validUserName = false;
        }
        else {
          document.getElementById(em).style.display = "none";
          validUserName = true;
        }
        break;

      case "password":
        if (isPasswordInvalid(value)) {
          document.getElementById(em).innerHTML = "Password should contain atleast 8 characters";
          document.getElementById(em).style.display = "block";
          validPassword = false;
        }
        else if (!value.trim().match(regExPassword1)) {
          document.getElementById(em).innerHTML = "Password should contain atleast 1 number";
          document.getElementById(em).style.display = "block";
          validPassword = false;
        }
        else if (!value.trim().match(regExPassword2)) {
          document.getElementById(em).innerHTML = "Password should contain atleast 1 special character";
          document.getElementById(em).style.display = "block";
          validPassword = false;
        }
        else {
          document.getElementById(em).style.display = "none";
          validPassword = true;
        }
        break;
    }

  }

  const isPasswordInvalid = password => {
    if (password.length < 8) return true;
    else return false;
  }

  return (
    <>
      <div id="headerView">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>

      <div id="loginView" style={{ marginTop: '110px' }}>
        <div className="queries">
          <form id="myform">
            <h2 style={{ textAlign: 'center' }}>Login</h2>

            <label>User Name*:</label>
            <input type="text" name="userName" id="userName" placeholder="Please enter your user name"
              required="required" />
            <br />
            <div id="error_userName" style={{ display: 'none', color: 'red' }}>
              Please enter valid User Name. User Name is wrong
              <br />
            </div>

            <label>Email Id*:</label>
            <input type="text" name="emailId" id="emailId" placeholder="yourname@domain.com" required="required" />
            <br />

            <div id="error_emailId" style={{ display: 'none', color: 'red' }}>
              Please enter valid email address. Email address is wrong
              <br />
            </div>

            <label>Password*:</label>
            <input type="password" name="password" id="password" placeholder="Please enter your password"
              required="required" />
            <br />

            <div id="error_password" style={{ display: 'none', color: 'red' }}>
              Please enter valid password. Password is wrong
            </div>

            <button className="add" onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;