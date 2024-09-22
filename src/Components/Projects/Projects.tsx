import hobbystation from "../../assets/Hobbystation.jpg";
import "./Projects.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export default function Projects() {
  return (
    <>
      <div className="projects-section">
        <div className="container mt-4">
          <div className="row">
            <h3 className="text-center fw-bolder text-white my-4 text-3xl">My Projects</h3>
            <div className="col-md-4 my-4">
              <div className="card shadow">
                <a target="_blank" href="https://hobbystation.co/">
                  <img src={hobbystation} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <h6 className="text-center fw-bold text-xl">
                    Hobby Station Landing Page
                  </h6>
                  <p className="card-text">
                    Landing Page For a platform of event Organization company in
                    Saudia Arabia
                    <br></br>I have used React for this project as front-end
                    framework {"  "}
                    <a href="https://hobbystation.co/" target="_blank">
                      <OpenInNewIcon />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
