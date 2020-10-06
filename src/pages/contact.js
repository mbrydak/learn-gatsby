import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>You can contct me via:</p>
      <ul>
        <li>
          Phone: <a href="tel:+48782727782">+48 782 727 782</a>
        </li>
        <li>
          Mail:{" "}
          <a href="mailto:brydakwojciech@gmail.com">
            {" "}
            brydakwojciech@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/wbrydak">Wojciech Brydak</a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
