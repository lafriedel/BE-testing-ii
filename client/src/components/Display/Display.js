import React from "react";

const Display = props => {
  return (
    <>
      <h1>Display</h1>
      <div>
          <div>
              <h2>Strikes</h2>
              <p>{props.strikes}</p>
          </div>
      </div>
    </>
  );
};

export default Display;
