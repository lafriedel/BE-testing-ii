import React from "react";
import Display from "../Display/Display";

class Dashboard extends React.Component {
  state = {
    strikes: 0,
    balls: 0
  };

  recordStrike = e => {
    e.preventDefault();
    if (this.state.strikes === 2 && e.target.name === "foul") return;
    if (this.state.strikes === 2) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState(prevState => ({
        ...this.state,
        strikes: prevState.strikes + 1
      }));
    }
  };

  recordBall = e => {
    e.preventDefault();
    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState(prevState => ({
        ...this.state,
        balls: prevState.balls + 1
      }));
    }
  };

  recordHit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      strikes: 0,
      balls: 0
    });
  };
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <div>
          <button
            name="strike"
            data-testid="strikeBtn"
            onClick={e => this.recordStrike(e)}
          >
            Record Strike
          </button>
          <button
            name="ball"
            data-testid="ballBtn"
            onClick={e => this.recordBall(e)}
          >
            Record Ball
          </button>
          <button
            name="foul"
            data-testid="foulBtn"
            onClick={e => this.recordStrike(e)}
          >
            Record Foul
          </button>
          <button
            name="hit"
            data-testid="hitBtn"
            onClick={e => this.recordHit(e)}
          >
            Record Hit
          </button>
        </div>
      </>
    );
  }
}

export default Dashboard;
