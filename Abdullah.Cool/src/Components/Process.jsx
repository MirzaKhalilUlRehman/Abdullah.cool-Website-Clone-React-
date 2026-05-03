import { FaSearch } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
function Process() {
  return (
    <section className="process-section">
      <div className="process-wrapper">
        <p className="process-label">PROCESS</p>

        <h2 className="process-heading">
          A Simple Process to Build <br />
          <span>Scalable</span> Products
        </h2>

        <p className="process-subtext">
          From idea to launch — clear, fast, and built for growth.
        </p>

        <div className="process-grid">
          {/* Card 1 */}
          <div className="process-card">
            <div className="process-badge">01</div>

            <h3>Discover</h3>
            <p className="process-desc">Understand your idea and goals</p>

            <ul>
              <li>Goals & core features</li>
              <li>Users & use cases</li>
              <li>Scope for MVP</li>
            </ul>

            <div className="card-icon icon-1">
             <FaSearch className="search-icon" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="process-card">
            <div className="process-badge">02</div>

            <h3>Plan & Build</h3>
            <p className="process-desc">
              Design and develop your product
            </p>

            <ul>
              <li>Tech stack & architecture</li>
              <li>Clean, scalable code</li>
              <li>Iterations & updates</li>
            </ul>

            <div className="card-icon icon-2">
              <FaCog className="bg-icon gear" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="process-card">
            <div className="process-badge">03</div>

            <h3>Launch & Grow</h3>
            <p className="process-desc">
              Deploy and improve continuously
            </p>

            <ul>
              <li>Smooth deployment</li>
              <li>Performance & fixes</li>
              <li>Ongoing improvements</li>
            </ul>

            <div className="card-icon icon-3">
              <FaCube className="bg-icon cube" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;