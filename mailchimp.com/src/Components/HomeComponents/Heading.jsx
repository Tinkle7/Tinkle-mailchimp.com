import "./Heading.css";
import React from "react";
import Button from "../Button";

export default function Heading() {
  return (
    <div id="Heading">
      <h1 id="Heading_headline">Turn Emails into Revenue</h1>
      <p id="Heding_para">
        Win new customers with the #1 email marketing and automations brand*
        that recommends ways to get more opens, clicks, and sales.
      </p>
      <Button type="Sign Up" />
    </div>
  );
}
