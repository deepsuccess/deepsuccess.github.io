import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , signInWithPopup } from "@firebase/auth";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKbPNkseqedw1RzvR1eZfo7lDmJvAR7uQ",
  authDomain: "deepsuccessss.firebaseapp.com",
  databaseURL:
    "https://deepsuccessss-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "deepsuccessss",
  storageBucket: "deepsuccessss.appspot.com",
  messagingSenderId: "406324659496",
  appId: "1:406324659496:web:a6883873039fa6da39bc1d",
  measurementId: "G-2WMZE5TW4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const Admin = () => {
  const [Data, setData] = useState({
    Earning: "",
  });
  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const getData = async () => {
    const response = await fetch(
      "https://deepsuccessss-default-rtdb.asia-southeast1.firebasedatabase.app/LandingPage.json"
    );
    const parsedResponse = await response.json();
    setData(parsedResponse);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSignInWithGoogle = async () => {
// Sign in using a popup.
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const result = await signInWithPopup(auth, provider);

// The signed-in user info.
const user = result.user;
// This gives you a Google Access Token.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Earning{" "}
          <input
            type="text"
            name="Earning"
            onChange={onChange}
            value={Data.Earning}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Admin;
