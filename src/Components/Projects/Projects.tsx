import hobbystation from "../../assets/Hobbystation.jpg";
import garvis from "../../assets/Garvis.jpg";
import HSDashboard from "../../assets/HSdashboard.jpg";
import "./Projects.css";
import npm from "../../assets/1_y5YLuOKO5XM7MOzve6XsDQ.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Navbar from "../Navbar/Navbar";
import vsextension from "../../assets/1_KMH17OHDvGY_M-E4l8UKGQ.png";
import Rev_N_Rate from "../../assets/RevRate.png";
import Noon from "../../assets/1_NFTgwZ_TUmceZnSHCundBw.jpg";
export default function Projects() {
  return (
    <>
      <div className="navbar mb-4">
        <Navbar />
      </div>
      <div className="projects-section mt-4">
        <div className="container mt-4">
          <div className="row">
            <h2 className="text-center fw-bolder text-white my-4 text-4xl">
              My Projects
            </h2>
            <h3 className="fw-bolder text-white my-4 text-3xl">
              Front End Projects
            </h3>
            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a target="_blank" href="https://hobbystation.co/">
                    <img
                      src={hobbystation}
                      className="card-img-top"
                      alt="Hobby Station"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">
                      Hobby Station Landing Page
                    </h6>
                    <p className="card-text">
                      Landing Page for an event organization company in Saudi
                      Arabia. Built using React.
                      <br />
                      <a href="https://hobbystation.co/" target="_blank">
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a target="_blank" href="https://garvis-ai.vercel.app/">
                    <img
                      src={garvis}
                      className="card-img-top"
                      alt="Garvis Ai"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">Garvis Ai</h6>
                    <p className="card-text">
                      AI integrated React project using Google Gemini API.
                      <br />
                      <a href="https://garvis-ai.vercel.app/" target="_blank">
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1uERAUm5_unMkVTTJ9HYf3xuJMrFBYf1e/view?usp=sharing"
                  >
                    <img
                      src={HSDashboard}
                      className="card-img-top"
                      alt="Hobby Station Dashboard"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">
                      Hobby Station Dashboard
                    </h6>
                    <p className="card-text">
                      Admin dashboard for tracking platform states. Built the
                      front-end while the APIs were provided by the back-end
                      team.
                      <br />
                      <a
                        href="https://drive.google.com/file/d/1uERAUm5_unMkVTTJ9HYf3xuJMrFBYf1e/view?usp=sharing"
                        target="_blank"
                      >
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="fw-bolder text-white my-4 text-3xl">
              Open Source Contributions
            </h3>

            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a
                    target="_blank"
                    href="https://www.npmjs.com/package/api-features"
                  >
                    <img
                      src={npm}
                      className="card-img-top"
                      alt="Hobby Station Dashboard"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">
                      Api Features
                    </h6>
                    <p className="card-text">
                      To adapt the README.md for api-features so that it covers
                      both SQL and NoSQL (e.g., MongoDB) databases, you will
                      need to update the installation and usage instructions to
                      reflect the flexibility of the package for different
                      database types. Below is a revised version of the
                      README.md that covers both SQL and NoSQL usage:
                      <br />
                      <a
                        href="https://www.npmjs.com/package/api-features"
                        target="_blank"
                      >
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a
                    target="_blank"
                    href="https://marketplace.visualstudio.com/items?itemName=JustMahmoud.console-killer"
                  >
                    <img
                      src={vsextension}
                      className="card-img-top"
                      alt="Hobby Station Dashboard"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">
                      Console Killer
                    </h6>
                    <p className="card-text">
                      Console Killer is a Visual Studio Code extension that
                      helps you comment console.log() statements from your
                      JavaScript files with ease.
                      <br />
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=JustMahmoud.console-killer"
                        target="_blank"
                      >
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="fw-bolder text-white my-4 text-3xl">
              Backend Projects
            </h3>
            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a
                    target="_blank"
                    href="https://github.com/justmahmoud31/Rev-N-Rate/tree/main/Rev-N-Rate-back"
                  >
                    <img
                      src={Rev_N_Rate}
                      className="card-img-top"
                      alt="Hobby Station Dashboard"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">Rev_N_Rate</h6>
                    <p className="card-text">
                      This was a large-scale backend Project I have implemented
                      on AFRO Group using node js- mySql - Express js , and
                      collaberated with my fellows to complete the front end and
                      deliver a SAAS Project
                      <br />
                      <a
                        href="https://github.com/justmahmoud31/Rev-N-Rate/tree/main/Rev-N-Rate-back"
                        target="_blank"
                      >
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card project-card shadow">
                <div className="image-container">
                  <a
                    target="_blank"
                    href="https://github.com/justmahmoud31/Noon-Clone"
                  >
                    <img
                      src={Noon}
                      className="card-img-top"
                      alt="Hobby Station Dashboard"
                    />
                  </a>
                  <div className="overlay">
                    <h6 className="text-center fw-bold text-xl">Noon Clone</h6>
                    <p className="card-text">
                      This was a large-scale backend Project I have implemented
                      as a hobby side project with most features of Noon like
                      "Payment and other CRUD Operations" and I also had used
                      Node js - express js - mongo db and my package
                      API-Features
                      <br />
                      <a
                        href="https://github.com/justmahmoud31/Noon-Clone"
                        target="_blank"
                      >
                        <OpenInNewIcon />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
