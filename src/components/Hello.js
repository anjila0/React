import React from "react";
const Hello = () => {
  //   return (
  //     <div>
  //       <h1>HELLO ANJILA</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "HELLO ANJILA")
  );
};
export default Hello;
