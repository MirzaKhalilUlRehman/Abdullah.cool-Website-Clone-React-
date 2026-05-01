import { useState } from "react";

import project1 from "../assets/images/project-images/project1.webp";
import project2 from "../assets/images/project-images/project2.webp";
import project3 from "../assets/images/Project-images/project3.webp";
import project4 from "../assets/images/Project-images/project4.webp";
import project5 from "../assets/images/project-images/project5.webp";
import project6 from "../assets/images/project-images/project6.webp";
import project7 from "../assets/images/Project-images/project7.webp";
import project8 from "../assets/images/Project-images/project8.webp";

function Projects() {
  const [count, setCount] = useState(4);

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
    {
      id: 5,
      nodes: ["Healthcare", "React Native", "Mobile App"],
      title: "Rauha — Mental Health Therapy App",
      desc: "Led React Native development of a CBT-based therapy app from scratch to production on both App Store and Play Store — delivering structured 8-week programs, journaling, real-time chat, and certified accessibility.",
      img: project5,
    },
    {
      id: 6,
      nodes: ["Next.js", "Admin Dashboard", "Web App"],
      title: "Catering Kvatrić — Booking & Sales Dashboard",
      desc: "Led frontend development of a Next.js admin dashboard managing the full inquiry-to-reservation lifecycle for an enterprise catering operation — with role-based access, payment-triggered workflows, and Google Maps integration.",
      img: project6,
    },
    {
      id: 7,
      nodes: ["React Native", "Mobile App", "Hospitality"],
      title: "Catering Kvatrić — Event Booking App",
      desc: "Led frontend development of a cross-platform React Native app for a catering platform — letting clients browse venues, submit inquiries, and manage reservations, while staff handled operations from their phone with full role-based access.",
      img: project7,
    },
    {
      id: 8,
      nodes: ["Chrome Extension", "Developer Tool", "Open Source"],
      title: "Grid System — Layout Debugging Extension",
      desc: "A Manifest V3 Chrome extension that overlays a customizable column grid on any live website — built for frontend developers and published on the Chrome Web Store with 4,000+ users and 5-star ratings.",
      img: project8,
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

      {/* 👇 SHOW BASED ON COUNT */}
      {projectsData.slice(0, count).map((project) => (
        <div className="projects" key={project.id}>
          <div className="project1">
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

            <div className="project-img">
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* BUTTON */}
      <button
        className="view-more"
        onClick={() => setCount(count === 4 ? 8 : 4)}
      >
        {count === 4 ? "View More (more 4)" : "View Less"}
      </button>
    </section>
  );
}

export default Projects;
