import "./App.css";
import FadeInSection from "./FadeInSection";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <section className="web-section">
          {" "}
          {/* contenedor*/}
          <div className="web-section-content">
            {/* <h2>Front-end |
              Back-end |
              Software 
              {"\n"}
              Developer</h2> */}

            <p className="title">
              Front-end | Back-end | Software
              {"\n"}
              Developer
            </p>
            <div className="typewriter-box" id="home">
              <p className="title-hello typewriter">Hello, World! I'm Ali Goush...</p>
            </div>

            <div class="dropup">
              <button class="dropbtn">
                <div className="menu-button"></div>
                <div className="menu-button"></div>
                <div className="menu-button"></div>
              </button>
              <div class="dropup-content">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#interests">Interests</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </section>

        <FadeInSection>
          <section className="web-section" id="about">
            <div className="web-section-content">
              <h2>About Me</h2>
              <p>
                My name is Ali. I'd like to talk you a bit about me. I'm from Russia, but I've lived
                in Spain for 14 years. I started my journey as a developer with my first team
                project in 2020, it was a subject in University where we had to develop a platform,
                and you know I liked it. Since then I wanted to be a full-stack developer.
              </p>
              <p>
                I started studying by myself, and next months got in a Samsung program which is
                bootcamp alike.
              </p>

              <div class="dropup">
                <button class="dropbtn">
                  <div className="menu-button"></div>
                  <div className="menu-button"></div>
                  <div className="menu-button"></div>
                </button>
                <div class="dropup-content">
                  <a href="#">Home</a>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#interests">Interests</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="web-section" id="projects">
            <div className="web-section-content">
              <h2>My Projects</h2>
              <div className="project-boxes">
                <div className="box col-sm-5 col-lg-5">
                  <h3>Platform</h3>
                </div>
              </div>
              <div className="project-boxes">
                <div className="box col-sm-5 col-md-5 col-lg-5">
                  <h3>BD users</h3>
                  <Video />
                  <br />
                  <p>
                    It's a list of users saved in MongoDB. You can add new ones, update and delete
                    users on the list. Made in Samsung Program.
                  </p>
                </div>
              </div>
              <div class="dropup">
                <button class="dropbtn">
                  <div className="menu-button"></div>
                  <div className="menu-button"></div>
                  <div className="menu-button"></div>
                </button>
                <div class="dropup-content">
                  <a href="#">Home</a>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#interests">Interests</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="web-section" id="interests">
            <h2>My Interests</h2>
            <div class="dropup">
              <button class="dropbtn">
                <div className="menu-button"></div>
                <div className="menu-button"></div>
                <div className="menu-button"></div>
              </button>
              <div class="dropup-content">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#interests">Interests</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="web-section" id="contact">
            <h2>Contact Me</h2>
            <div class="dropup">
              <button class="dropbtn">
                <div className="menu-button"></div>
                <div className="menu-button"></div>
                <div className="menu-button"></div>
              </button>
              <div class="dropup-content">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#interests">Interests</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}

export default App;
