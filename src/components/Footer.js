import React from "react";

function Footer() {
  return (
    <div
      className="footer a_shift align_items_center justify_content_space_between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2023 Tyler Quinn. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;