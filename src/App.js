import "./App.css";
import MenuButton from "./components/MenuButton";
import FadeInSection from "./components/FadeInSection";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <main>
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

              <MenuButton />
            </div>
          </section>

          <FadeInSection>
            <section className="web-section" id="about">
              <div className="web-section-content">
                <h2>About Me</h2>
                <p>
                  My name is Ali. I'd like to talk you a bit about me. I'm from Russia, but I've
                  lived in Spain for 14 years. I started my journey as a developer with my first
                  team project in 2020, it was a subject in University where we had to develop a
                  platform, and you know I liked it. Since then I wanted to be a full-stack
                  developer.
                </p>
                <p>
                  I started studying by myself, and next months got in a Samsung program which is
                  bootcamp alike.
                </p>
              </div>
            </section>
          </FadeInSection>

          <Projects />

          <FadeInSection>
            <section className="web-section" id="interests">
              <h2>My Interests</h2>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="web-section" id="contact">
              <h2>Contact Me</h2>
            </section>
          </FadeInSection>
        </div>
      </main>
    </div>
  );
}

export default App;
