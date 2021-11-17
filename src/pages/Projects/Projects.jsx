import FadeInSection from "../../components/FadeInSection";
import Video from "../../components/Video";
import "./Projects.css";

const Projects = () => {
  return (
    <FadeInSection>
      <section className="web-section" id="projects">
        <div className="web-section-content">
          <h2>My Projects</h2>
          <div className="project-container">
            <div className="box col-sm-5 col-lg-5">
              <h3>Platform</h3>
            </div>
            <div className="box col-sm-5 col-md-5 col-lg-5">
              <h3>BD users</h3>
              <Video />
              <br />
              <p>
                It's a list of users saved in MongoDB. You can add new ones, update and delete users
                on the list. Made in Samsung Program.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Projects;
