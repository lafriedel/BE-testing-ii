import React from "react";
import Display from "../Display/Display";

class Dashboard extends React.Component {
    state = {
        balls: 0,
        strikes: 0
      };
    
      recordStrike = e => {
        e.preventDefault();
        if (this.state.strikes >=0 && this.state.strikes < 2) {
          this.setState(prevState => {
            return {
              ...this.state,
              strikes: prevState.strikes + 1
            }
          })
        } else {
          this.setState({
            ...this.state,
            strikes: 0
    
          })
        }
      };

      recordBall = e => {
          e.preventDefault();
          if (this.state.balls >= 0 && this.state.balls < 3) {
              this.setState(prevState => {
                  return {
                      ...this.state,
                      balls: prevState.balls + 1
                  }
              })
          } else {
              this.setState({
                  ...this.state,
                  balls: 0
              })
          }
      }
    render() {
        return (
            <>
              <h1>Dashboard</h1>
              <Display strikes={this.state.strikes} balls={this.state.balls} />
                <div>
                    <button onClick={e => this.recordStrike(e)}>Record Strike</button>
                    <button onClick={e => this.recordBall(e)}>Record Ball</button>
                </div>
            </>
          );
    }

};

export default Dashboard;
