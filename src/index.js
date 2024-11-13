import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "./assets/scss/black-tag-devs.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

import Index from "views/Index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
