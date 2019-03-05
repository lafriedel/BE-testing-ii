import React from "react";
import Display from "../Display/Display";

class Dashboard extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
        fouls: 0
      };
    
      recordStrike = e => {
        e.preventDefault();
        if (this.state.strikes === 2) {
          this.setState({
              strikes: 0,
              balls: 0,
              fouls: 0
          })
        } else {
            this.setState(prevState => {
                return {
                  ...this.state,
                  strikes: prevState.strikes + 1
                }
              })
        }
      };

      recordBall = e => {
          e.preventDefault();
          if (this.state.balls === 3) {
              this.setState({
                  balls: 0,
                  strikes: 0,
                  fouls: 0
              })
          } else {
            this.setState(prevState => {
                return {
                    ...this.state,
                    balls: prevState.balls + 1
                }
            })
          }
      }

      recordFoul = e => {
          e.preventDefault();
          if (this.state.strikes === 2) {
              this.setState(prevState => {
                  return {
                      ...this.state,
                      fouls: prevState.fouls + 1
                  }
              })
          };

          if (this.state.strikes === 1) {
              this.setState(prevState => {
                  return {
                      ...this.state,
                      fouls: prevState.fouls + 1,
                      strikes: prevState.strikes + 1
                  }
              })
          };

          if (this.state.strikes === 0) {
              this.setState(prevState => {
                  return {
                      ...this.state,
                      fouls: prevState.fouls + 1,
                      strikes: prevState.strikes + 1
                  }
              })
          }
      }
    render() {
        return (
            <>
              <h1>Dashboard</h1>
              <Display strikes={this.state.strikes} balls={this.state.balls} fouls={this.state.fouls} />
                <div>
                    <button onClick={e => this.recordStrike(e)}>Record Strike</button>
                    <button onClick={e => this.recordBall(e)}>Record Ball</button>
                    <button onClick={e => this.recordFoul(e)}>Record Foul</button>
                </div>
            </>
          );
    }

};

export default Dashboard;
