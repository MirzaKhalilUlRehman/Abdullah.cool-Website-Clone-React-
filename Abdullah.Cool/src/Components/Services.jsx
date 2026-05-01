import {
  FaDesktop,
  FaMobileAlt,
  FaDatabase,
  FaPaintBrush,
  FaPuzzlePiece,
} from "react-icons/fa";

const servicesData = [
  {
    id: "01",
    icon: <FaDesktop />,
    title: "Frontend Development",
    desc: "Pixel-perfect, performant interfaces with buttery-smooth animations that users notice and remember.",
    tags: ["React", "Next.js", "Tailwind", "GSAP", "Framer Motion"],
  },
  {
    id: "02",
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Cross-platform apps that feel truly native — fast, fluid, and ready for the App Store and Play Store.",
    tags: ["React Native", "Expo", "EAS", "App Store", "Play Store"],
  },
  {
    id: "03",
    icon: <FaDatabase />,
    title: "Fullstack with Supabase",
    desc: "End-to-end product backends with tight schema design, row-level security, and auth out of the box.",
    tags: ["Supabase", "PostgreSQL", "Auth", "RLS"],
  },
  {
    id: "04",
    icon: <FaPaintBrush />,
    title: "Figma to Code",
    desc: "Turning your designs into living, breathing interfaces — faithfully, responsively, and pixel-precisely.",
    tags: ["Figma", "React", "Tailwind"],
  },
  {
    id: "05",
    icon: <FaPuzzlePiece />,
    title: "Chrome Extension Dev",
    desc: "Browser extensions that extend the web — built to Manifest V3 spec and compatible across browsers.",
    tags: ["Manifest V3", "Cross-browser"],
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-content">
        <p>SERVICES</p>

        <h4>
          Services built around shipping <span>real</span> products
        </h4>

        <p>
          From idea to scalable product — built with performance and <br />
          growth in mind.
        </p>
      </div>

      <div className="services-container">
        {servicesData.map((service) => (
          <div className="service-row" key={service.id}>
            
            <div className="service-left">
              <div className="icon-container">{service.icon}</div>

              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>

            <div className="service-right">
              <div className="tags">
                {service.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="service-number">{service.id}</div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;