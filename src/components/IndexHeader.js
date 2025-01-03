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
import { Container } from "reactstrap";

export default function Index() {
  return (
    <>
      <div className="page-header">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1
              className="h1-seo"
              style={{
                fontSize: "3em",
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                columnGap: "6px",
              }}
            >
              BlackTagDevs
              <img
                src={require("../assets/blacktag/simpleLogo.png")}
                alt=""
                style={{
                  filter: "invert(1)",
                  height: "auto",
                  maxWidth: "1em",
                }}
              />
            </h1>
            <h3>Information technology consulting</h3>
          </div>
        </Container>
      </div>
    </>
  );
}
