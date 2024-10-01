import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Data Analytics Engineer",
          "I'm a Data scientist ", 
          "I'm a Machine learning engineer",
          "I'm a Cloud Engineer",
          "I'm a Data Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
