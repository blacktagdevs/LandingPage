/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

export default function PresentationHeader() {
  const scrollPage = (e) => {
    e.preventDefault();
    document.getElementById("pricing").scrollIntoView();
  };
  return (
    <>
      <div className="page-header">
        <img alt="..." className="path" src={require("assets/img/blob.png")} />
        <img
          alt="..."
          className="path2"
          src={require("assets/img/path2.png")}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require("assets/img/triunghiuri.png")}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require("assets/img/waves.png")}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require("assets/img/patrat.png")}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require("assets/img/cercuri.png")}
        />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">BlackTagDevs</h1>
            <h3>
              Start the Development With this Badass Bootstrap 4 Design System.
            </h3>
            <img src={"/logo2.svg"} className="App-logo" alt="logo" />
            <Button
              className="btn-link mt-4 d-block"
              color="warning"
              href="#pablo"
              onClick={scrollPage}
              size="lg"
            >
              <u>Show pricing</u>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
