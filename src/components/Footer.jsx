import React from "react";

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {currYear} - Vincent Tsai</p>
    </footer>
  );
}

export default Footer;