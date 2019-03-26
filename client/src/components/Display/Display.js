import React from "react";

const Display = props => {
  return (
    <>
      <div>
          <div>
              <h2>Strikes</h2>
              <p data-testid="strikes">{props.strikes}</p>
          </div>
          <div>
              <h2>Balls</h2>
              <p data-testid="balls">{props.balls}</p>
          </div>
      </div>
    </>
  );
};

export default Display;
