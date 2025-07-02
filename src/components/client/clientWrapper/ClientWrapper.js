import React from "react";
import "./style.css";


export default function ClientWrapper({ children }) {
  return <div className="client-wrapper-container">{children}</div>;
}
