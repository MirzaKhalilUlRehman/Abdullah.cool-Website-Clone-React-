import html from '../assets/images/icons/html.png';
import css from '../assets/images/icons/css.jpg';
import tailwind from '../assets/images/icons/tailwind.png';
import bootstrap from '../assets/images/icons/bootstrap.jpg';
import react from '../assets/images/icons/react.jpg';
import nextjs from '../assets/images/icons/nextjs.png';
import reactnative from '../assets/images/icons/react.jpg';
import expo from '../assets/images/icons/expo.png';
import figma from '../assets/images/icons/figma.png';
import firebase from '../assets/images/icons/firebase.jpg';
import appwrite from '../assets/images/icons/appwrite.png';
import supabase from '../assets/images/icons/supabase.jpg';
import chakra from '../assets/images/icons/chakra.jpg';
import shadcn from '../assets/images/icons/shadcn.png';
import zustand from '../assets/images/icons/zustand.jpg';
import reactquery from '../assets/images/icons/reactquery.jpg';
import claude from '../assets/images/icons/claude.jpg';

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
<div className="track track-left">
  {[...stack1, ...stack1].map((item, index) => (
    <div className="card" key={index}>
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
    </div>
  ))}
</div>

<div className="track track-right">
  {[...stack2, ...stack2].map((item, index) => (
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