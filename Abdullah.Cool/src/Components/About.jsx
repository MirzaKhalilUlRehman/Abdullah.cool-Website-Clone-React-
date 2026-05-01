function About() {
  return (
    <section className="about-section">
      <div className="about-header">
        <p>ABOUT ME</p>
        <h4>The person behind the <span>code</span></h4>
      </div>
      
<div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <p className="about-text">
            I’m <span className="name" >Muhammad Abdullah</span>, a full-stack developer with{" "}
            <strong>7+ years of experience</strong> building pixel-perfect and
            accessible digital products that are as solid under the hood as they
            look on the surface.
          </p>

          <p className="about-text">
            I specialise in <strong>React, Next.js & React Native</strong> for
            the frontend and <strong>Supabase</strong> for the backend. I'm
            self-taught, obsessed with clean purposeful code, and I take
            ownership in everything I do and hold myself accountable for
            delivering results.
          </p>

          <div className="highlight-quote">
            My sweet spot is where clean code meets thoughtful design — building
            things that not only work well but feel right to use.
          </div>

          <p className="about-text muted">
            Whether you're a founder with a big idea or a team that needs
            someone who can own the full picture — I'm built for that.
          </p>

          <button className="cta-btn">Let’s Work Together →</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="stats-grid">
            <div className="stat-card">
              <h2>7+</h2>
              <p>Years of Experience</p>
            </div>

            <div className="stat-card">
              <h2>20+</h2>
              <p>Projects Shipped</p>
            </div>

            <div className="stat-card">
              <h2>4</h2>
              <p>Core Stacks</p>
            </div>

            <div className="stat-card">
              <h2>100%</h2>
              <p>Self-Taught</p>
            </div>
          </div>

          <div className="side-box">
            <h4>WHEN I’M NOT BUILDING</h4>

            <div className="side-item">
              <span>🏏</span>
              <div>
                <h5>Cricket</h5>
                <p>
                  Cricket taught me the importance of strategy and composure
                  under pressure
                </p>
              </div>
            </div>

            <div className="side-item">
              <span>📚</span>
              <div>
                <h5>Teaching Devs</h5>
                <p>
                  Teaching developers forced me to break down complex problems
                  clearly and make them easier to understand.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>
  );
}
export default About;
