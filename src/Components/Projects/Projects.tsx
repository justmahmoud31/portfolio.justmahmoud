import hobbystation from "../../assets/Hobbystation.jpg";
import garvis from "../../assets/Garvis.jpg";
import HSDashboard from "../../assets/HSdashboard.jpg";
import "./Projects.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Navbar from "../Navbar/Navbar";
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
          </div>
        </div>
      </div>
    </>
  );
}
