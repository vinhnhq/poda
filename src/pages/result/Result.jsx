import React from "react";
import { Doughnut, Line } from "react-chartjs-2";

const doughnutData = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Result = () => (
  <>
    <div className="container is-fullhd">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            Drug Abuse and Addiction Survey
          </a>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column">
              <div className="content">
                <Doughnut data={doughnutData} />
              </div>
            </div>
            <div className="column">
              <div className="content">
                <Line data={lineData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer has-text-centered">
      <div className="container">
        <p>
          <strong>Drug Abuse and Addiction Survey</strong> by{" "}
          <a href="https://jgthms.com">Nhan Nguyen</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  </>
);

export default Result;
