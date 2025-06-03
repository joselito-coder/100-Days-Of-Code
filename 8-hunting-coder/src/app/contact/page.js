'use client';

import styles from "@/styles/contact.module.css";
import { useState } from "react";
import './style.css'

const Contact = () => {


  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const data = { name, email, phone, desc }

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)

    })
      .then(response => response.json())
      .then(data => {
        alert("Thank you for contacting us")
        setphone('')
        setdesc('')
        setname('')
        setemail('')

      })
      .catch(err => console.log(err))

  }

  const handleChange = (e) => {

    const targetValue = e.target.value;
    const targetName = e.target.name;

    if (targetName == "email") {
      setemail(targetValue)
    }
    else if (targetName == "name") {
      setname(targetValue)
    }
    else if (targetName == "phone") {
      setphone(targetValue)
    }
    else if (targetName == "desc") {
      setdesc(targetValue)
    }

  }
  return (
    <div className={styles.container} >
      <h1 className="text-center" >Contact us</h1>
      <form className="mt-3 ContactForm" onSubmit={handleSubmit} >

        <div className={styles.mb3}  >
          <label htmlFor="name" className={styles.formLabel}>Enter your name</label>
          <input type="text" placeholder="Type your name here" value={name} name="name" onChange={handleChange} className="form-control" id="name" aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb3}  >
          <label htmlFor="email" className={styles.formLabel}>Email address</label>
          <input type="email" placeholder="Type your email here" value={email} name="email" onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb3}  >
          <label htmlFor="phone" className={styles.formLabel}>Phone number</label>
          <input type="tel" placeholder="Type your phone here" value={phone} name="phone" onChange={handleChange} className="form-control" id="phone" aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb3}  >
          <label className="labelTextarea" htmlFor="desc">Elaborate your concern</label>
          <textarea className="form-control" onChange={handleChange} placeholder="Enter your concerns here" value={desc} name="desc" id="desc" ></textarea>
        </div>

        <button type="submit" className={styles.btn}>Submit</button>
      </form>


    </div>
  )
}

export default Contact