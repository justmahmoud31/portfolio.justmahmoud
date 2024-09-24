import "./AboutMe.css";
import Navbar from "../Navbar/Navbar";

export default function AboutMe() {
  return (
    <>
   <div className="navbar mb-4">
    <Navbar />
    </div>
      <div className="about-section">
        <div className="container" id="about">
          <div className="row">
            <h3 className="text-center text-white fw-bolder text-4xl my-3">About Me</h3>
            <div className="card my-3">
              <div className="row g-0">
                <div className="col-md-12 ">
                  <div className="card-body">
                    <h4 className="text-2xl fw-semibold">Experience</h4>
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-date">
                          <strong>GDSC</strong>
                        </div>
                        <div className="timeline-content">
                          <em>Cairo, Egypt</em>
                          <p className="lead">
                            Vice-head Front-end at GDSC Elshorouck Academy
                          </p>
                          <p>
                            I have been instructing other fellows in GDSC in
                            Front-end development with other college in a
                            front-end development branch.
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-date">
                          <strong>IEEE</strong>
                        </div>
                        <div className="timeline-content">
                          <em>
                            Technical Member at IEEE as instructor UI/UX For 1
                            season
                          </em>
                          <p className="lead">
                            I have worked with a colleague to instruct some
                            other fellows in UI & UX design, gaining experience
                            with Figma and SDLC.
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-date">
                          <strong>ECPC</strong>
                        </div>
                        <div className="timeline-content">
                          <em>ECPC Finalist</em>
                          <p className="lead">
                            I have Competed with other fellows at ecpc with C++
                            programming language and problem solving skills
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-date">
                          <strong>Hobby Station</strong>
                        </div>
                        <div className="timeline-content">
                          <em>Front-end developer</em>
                          <p className="lead">
                            I have as a part-time front-end to build an admin
                            business dashboard and a Landing Page , I have used
                            The follwing technologies :-
                            <br></br>
                            <strong>Landing page :- </strong> Reactjs , React1l8
                            as translation packages and bootstrap
                            <br></br>
                            <strong>Dashboard :- </strong> Reactjs ,ContextApi
                            for handling the state managment and
                            react-Router-dom to handle Routes
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-date">
                          <strong>AFRO GROUP</strong>
                        </div>
                        <div className="timeline-content">
                          <em>
                            Intern Mern Stack (Node.js - Express) at AFRO GROUP
                            in 6th October City
                          </em>
                          <p className="lead">
                            I worked on a website as a Mern Stack intern,
                            implementing the backend and contributing to UI/UX
                            and Front-end development.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End of Timeline Wrapper */}
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
