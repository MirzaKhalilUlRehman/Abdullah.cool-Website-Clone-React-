import html from '../assets/images/html.png';
import css from '../assets/images/css.jpg';
import tailwind from '../assets/images/tailwind.png';
import bootstrap from '../assets/images/bootstrap.jpg';
import react from '../assets/images/react.jpg';
import nextjs from '../assets/images/nextjs.png';
import reactnative from '../assets/images/react.jpg';
import expo from '../assets/images/expo.png';
import figma from '../assets/images/figma.png';
import firebase from '../assets/images/firebase.jpg';
import appwrite from '../assets/images/appwrite.png';
import supabase from '../assets/images/supabase.jpg';
import chakra from '../assets/images/chakra.jpg';
import shadcn from '../assets/images/shadcn.png';
import zustand from '../assets/images/zustand.jpg';
import reactquery from '../assets/images/reactquery.jpg';
import claude from '../assets/images/claude.jpg';

function TechStack() {

  const stack1 = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: tailwind, name: "Tailwind CSS" },
    { img: bootstrap, name: "Bootstrap" },
    { img: react, name: "React" },
    { img: nextjs, name: "Next.js" },
    { img: reactnative, name: "React Native" },
    { img: expo, name: "Expo" }
  ];

  const stack2 = [
    { img: figma, name: "Figma" },
    { img: firebase, name: "Firebase" },
    { img: appwrite, name: "Appwrite" },
    { img: supabase, name: "Supabase" },
    { img: chakra, name: "Chakra UI" },
    { img: shadcn, name: "shadcn/ui" },
    { img: zustand, name: "Zustand" },
    { img: reactquery, name: "React Query" },
    { img: claude, name: "Claude Code" }
  ];

  return (
    <section className="tech-stack">
      <div className="stack-content">
        <p>TECH STACK</p>
        <h2>
          Tools I <span>build</span> with
        </h2>
        <p>
          A curated set of technologies I rely on to ship fast, scalable,<br />
          and polished products.
        </p>
      </div>

      <div className="stack-cards">
        <div className="cards-section-1">
          {stack1.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="cards-section-2">
          {stack2.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;