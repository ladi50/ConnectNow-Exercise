import React from "react";
import Link from "./Link/Link";

import "./Links.css";

const Links = () => {
  return (
    <div className="links">
      <Link href="/" firstWord="Video" name="games" />
      <Link href="/contact" firstWord="Contact" last />
    </div>
  );
};

export default Links;
