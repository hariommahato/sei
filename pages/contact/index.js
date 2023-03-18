import SeiMap from "@/frontend/components/Map";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerDiv}>
        <h1 className={styles.heading}>CONTACT US</h1>
      </div>
      <Row className={styles.row}>
        <Col>
          <div style={{ textAlign: "center" }}>
            <h5>SEI INSTITUTE</h5>
            <h6>9843577214, 9841621432</h6>
            <h6>
              <AiOutlineMail />{" "}
              <span className="mx-1">seieducationalinstitute@gmail.com</span>
            </h6>
            <h5>Have any questions ? We'd love to hear for you.</h5>
          </div>

          <div className={styles.formContainer}>
            <Form>
              <div>
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </div>
              <div>
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </div>
              <div>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Contact Number"
                />
              </div>
              <div>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address" />
              </div>
              <div>
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Enter Message/Queries" />
              </div>

              <div style={{ width: "100%" }}>
                <Button style={{ width: "100%", marginTop: "1rem" }}>
                  Submit Details
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <SeiMap />
    </div>
  );
};

export default Contact;
