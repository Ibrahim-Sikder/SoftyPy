import  { Component } from "react";
import "./CountDown.css";
class PortfolioCountdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectCount: 0,
      developerCount: 0,
      experienceYears: 0,
      clientCount: 0,
    };
  }

  startCounting = (countType) => {
    const totalCounts = {
      projectCount: 70,
      developerCount: 20,
      experienceYears: 5,
      clientCount: 50,
    };

    this.countdownInterval = setInterval(() => {
      this.setState((prevState) => ({
        [countType]: Math.min(prevState[countType] + 1, totalCounts[countType]),
      }));

      if (this.state[countType] === totalCounts[countType]) {
        clearInterval(this.countdownInterval);
      }
    }, 1000); // Adjust the interval duration as needed
  };

  componentDidMount() {
    // Start all countdowns when the component mounts (page reload)
    this.startCounting("projectCount");
    this.startCounting("developerCount");
    this.startCounting("experienceYears");
    this.startCounting("clientCount");

    // Add a scroll listener to start countdown when page is scrolled down
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.startCounting("projectCount");
      this.startCounting("developerCount");
      this.startCounting("experienceYears");
      this.startCounting("clientCount");
    }
  };

  resetCounts = (countType) => {
    clearInterval(this.countdownInterval);
    this.setState({
      [countType]: 0,
    });
    this.startCounting(countType);
  };

  render() {
    return (
      <div className="portFolioExample">
        <div className="countDownWrap">
          <div className="countdown" onClick={() => this.resetCounts("projectCount")}>
            <div className="singleCountDown">
              <p>{this.state.projectCount}</p>
              <span>+</span>
            </div>
            <h2>Projects</h2>
          </div>
          <div className="countdown" onClick={() => this.resetCounts("developerCount")}>
            <div className="singleCountDown">
              <p>{this.state.developerCount}</p>
              <span>+</span>
            </div>
            <h2>Professional Developers</h2>
          </div>
          <div className="countdown" onClick={() => this.resetCounts("experienceYears")}>
            <div className="singleCountDown">
              <p>{this.state.experienceYears}</p>
              <span>+</span>
            </div>
            <h2>Years of Experience</h2>
          </div>
          <div className="countdown" onClick={() => this.resetCounts("clientCount")}>
            <div className="singleCountDown">
              <p>{this.state.clientCount}</p>
              <span>+</span>
            </div>
            <h2>Esteemed Clients</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioCountdown;
