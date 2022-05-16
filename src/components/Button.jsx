import React from "react";

function Button({ className, children, Add }) {
  return (
    <button onClick={Add} className={className}>
      {children}
    </button>
  );
}

export default Button;
