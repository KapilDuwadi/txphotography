"use client";

import { useState } from "react";

const validateEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const handleSubmit = async (event: any, setError: any) => {
  event.preventDefault(); // Prevent the default form submission


  // Your form submission logic here
  // For example, you can use fetch to send the form data to the Google Forms endpoint
  const formData = new FormData(event.target);
  if (validateEmail(formData.get("entry.1866228464"))) {
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfji1izf8MEv63t3uIOBqb9KY67-ghZLIlhrdUWbvgijfARUg/formResponse', {
      method: 'POST',
      body: formData,
    }).then((_) => {
      window.location.href = 'https://txphotography.us/'
    }).catch((_) => {
      window.location.href = 'https://txphotography.us/'
    });

  } else {
    setError("Error")
  }
};

export default function Home() {
  const [error, setError] = useState('');
  return (
    <main className="flex flex-col justify-center 
      items-center h-screen  text-[#165d9b]">
      <img src="logo.png" width="150" height="150" />
      <p className="text-center pt-10 pb-5 text-4xl ">Welcome to Texas Photo & Video Service</p>
      {/* <p className="text-2xl"> Capture your important moment.</p> */}

      <form
        className="w-full px-20 flex flex-col justify-center items-center gap-y-10"
        method="POST"
        onSubmit={(event) => handleSubmit(event, setError)}
      >
        <input type="text" name="entry.1866228464" id="ph-number" placeholder="Please type your email"
          className="w-full h-16 rounded-md px-5 text-xl shadow-md border-none outline-none" />

        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="text-white bg-[#165d9b] rounded-md 
          px-3 py-2 w-max text-xl hover:bg-indigo-900 hover:font-bold"> Access All Photos </button>
          {error && <p className="text-red-500 pt-3"> Invalid or empty email. </p>}
        </div>


      </form>
      <p className="pb-3 pt-10 text-xl text-center"> Mohan KC , Digital Creator, Photographer & Graphic Designer</p>
      <p className="pb-5 text-xl text-center"> Fort Worth, Texas, +1 6828081450 </p>
    </main>
  )
}
