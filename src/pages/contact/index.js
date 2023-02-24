import React, { useState, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://getform.io/f/43a55c06-5c4c-488f-8e83-adda5126b5d8", {
      method: "POST",
      body: new FormData(document.querySelector(".form")),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Oops, something went wrong, please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Oops, something went wrong, please try again");
      });
  }

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              className="form"
              method="POST"
              accept-charset="UTF-8"
              id="form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <input
                type="phone"
                name="phone"
                placeholder="phone number"
                required
              />
              <textarea
                type="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">send</button>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
