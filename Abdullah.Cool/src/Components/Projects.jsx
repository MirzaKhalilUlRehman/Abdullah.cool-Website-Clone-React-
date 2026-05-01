import project1 from "../assets/images/project-images/project1.webp";
import project2 from "../assets/images/project-images/project2.webp";
import project3 from "../assets/images/Project-images/project3.webp";
import project4 from "../assets/images/Project-images/project4.webp";
function Projects() {
  const projectsData = [
    {
      id: 1,
      nodes: ["Next.js", "Marketing Site", "CMS"],
      title: "Solace — Recruitment Agency Website",
      desc: "Built a high-performance Next.js marketing website for a recruitment agency serving venture-backed startups — with dynamic job listings, application flows, and Notion CMS integration for full content control.",
      img: project1,
    },
    {
      id: 2,
      nodes: ["Next.js", "GSAP", "Marketing Site"],
      title: "Endshift — Scroll-Based Marketing Website",
      desc: "Built a high-impact Next.js marketing website with GSAP-powered scroll animations for a product and consulting company serving enterprises and startups — designed to feel as capable as the services it represents.",
      img: project2,
    },
    {
      id: 3,
      nodes: ["Saas", "ERP/Dashboard", "Web App"],
      title: "OSneo — ERP Dashboard",
      desc: "Built a centralized web-based ERP dashboard to unify dispatch, ticket management, and live field team tracking for a growing field services company.",
      img: project3,
    },
    {
      id: 4,
      nodes: ["React Native", "Mobile App", "Field Operations"],
      title: "OSneo — Workforce App",
      desc: "Built a cross-platform React Native app for HVAC field workers to manage jobs, log time, track attendance, and capture digital signatures — all synced with the ERP in real time.",
      img: project4,
    },
  ];

  return (
    <section className="project-section">
      <div className="project-content">
        <p>PROJECTS</p>

        <h4>
          Work That <br />
          <span>Speaks</span> for Itself
        </h4>

        <p>
          A selection of products, apps, and tools I've shipped <br />
          end-to-end.
        </p>
      </div>

      {projectsData.map((project) => (
        <div className="projects" key={project.id}>
          <div className="project1">
            {/* LEFT */}
            <div className="project-details">
              {project.nodes.map((node, i) => (
                <div className={`node${i + 1}`} key={i}>
                  {node}
                </div>
              ))}

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <button>View Case Study →</button>
            </div>

            {/* RIGHT */}
            <div className="project-img">
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="view-more">
        View More (4 more)
      </button>
    </section>
  );
}

export default Projects;
