// src/App.jsx
import React, { useRef, useState } from "react";
import { HashRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Braces,
  Server,
  Wrench,
  GitBranch,
  Mail,
  ExternalLink,
  Eye,
  Download,
  School,
  Rocket,
  Menu,
  X,
  Check,
} from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// --------------------------- Data ---------------------------
const EMAIL = "praveenudayagiri724@gmail.com";
const RESUME_URL = "./Praveen_Udayagiri_Resume.pdf";

const EDUCATION = [
  {
    badge: "B.Tech",
    title: "Vignan University",
    place: "Guntur, AP, India",
    stream: "CSE",
    score: "8.19 CGPA",
    period: "2022 – Present",
    endYear: 2025,
  },
  {
    badge: "12th",
    title: "Bhashyam Junior College",
    place: "Guntur, AP, India",
    stream: "MPC",
    score: "94%",
    period: "2020 – 2022",
    endYear: 2022,
  },
  {
    badge: "10th",
    title: "Bhashyam High School",
    place: "Guntur, AP, India",
    stream: "SSC",
    score: "97%",
    period: "2019 – 2020",
    endYear: 2020,
  },
];

const SKILL_LOGOS = {
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  AWS: "https://www.marketingmilk.com/wp-content/themes/marketing-milk/static/img/aws.png",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  Keras: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  OpenCV: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo.svg",
  "Socket.io":"https://tse4.mm.bing.net/th/id/OIP.2gTirRDwK2kTZxpX-ru1fAAAAA?w=256&h=256&rs=1&pid=ImgDetMain&o=7&rm=3",
};

const SKILLS = [
  {
    icon: <Code2 className="h-5 w-5" aria-hidden />,
    title: "Languages",
    items: ["C", "C++", "Java", "JavaScript", "Python"],
  },
  {
    icon: <Braces className="h-5 w-5" aria-hidden />,
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "React", "Redux"],
  },
  {
    icon: <Server className="h-5 w-5" aria-hidden />,
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB","Socket.io"],
  },
  {
    icon: <Wrench className="h-5 w-5" aria-hidden />,
    title: "Tools",
    items: ["Git", "GitHub", "AWS", "Postman"],
  },
];

const PROJECTS = [
  {
    title: "DevTinder",
    subtitle: "Developer Networking Web App",
    live: "http://13.203.102.109/",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.IO",
      "AWS EC2",
      "Nginx",
    ],
    points: [
      "Networking platform for developers to connect via skills & interests.",
      "Connection request system: send, receive, accept.",
      "Real-time chat via Socket.IO with history in MongoDB.",
      "Deployed on AWS EC2 with Nginx (prod-ready).",
    ],
  },
  {
    title: "Swiggy Clone",
    subtitle: "Dynamic Food Delivery Web App",
    live: "https://swiggy-clone-ten-iota.vercel.app/",
    stack: ["React", "Redux", "CSS"],
    points: [
      "Replicates core Swiggy UX with real-time API data.",
      "Redux for global state (restaurants, cart).",
      "Search & top-rated filters.",
      "Add-to-Cart with quantity & real-time updates.",
    ],
  },
  {
    title: "Image Steganography Framework",
    subtitle: "Comparative Analysis of CNN and GAN Models",
    live: "",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    points: [
      "Implemented LSB, CNN and GAN-based steganography.",
      "Designed CNN encoder–decoder & GAN adversarial models.",
      "Improved imperceptibility & robustness with GANs vs CNNs.",
    ],
  },
];


const Chip = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
    {children}
  </span>
);
// Helpers
const Page = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">{children}</div>
);

const SectionTitle = ({ icon, title, kicker }) => (
  <div className="mb-8 flex items-end justify-between gap-4">
    <div>
      <div className="text-xs uppercase tracking-widest text-slate-400">{kicker}</div>
      <h2 className="mt-1 inline-flex items-center gap-2 text-2xl font-semibold text-white">
        {icon}
        {title}
      </h2>
    </div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={
    "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 backdrop-blur " +
    className
  }>
    {children}
  </div>
);

const GradientBg = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/20 blur-[100px]" />
  </div>
);

const TIMELINE_ICONS = {
  "10th": <School className="h-5 w-5" />,
  "12th": <School className="h-5 w-5" />,
  "B.Tech": <School className="h-5 w-5" />,
};

const Nav = ({ onCopyEmail }) => {
  const [open, setOpen] = useState(false);
  const linkBase =
    "rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white";
  const active = "bg-white/10 text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">Praveen Udayagiri</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/education"
            className={({ isActive }) => `${linkBase} ${isActive ? active : "text-slate-300"}`}
          >
            Education
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => `${linkBase} ${isActive ? active : "text-slate-300"}`}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${linkBase} ${isActive ? active : "text-slate-300"}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => `${linkBase} ${isActive ? active : "text-slate-300"}`}
          >
            Resume
          </NavLink>
        </nav>
        <div className="hidden md:flex">
          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white transition hover:translate-y-[-1px] hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Copy Email
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-4 py-3 backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            {["/education", "/skills", "/projects", "/resume"].map((to) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm ${isActive ? "bg-white/10 text-white" : "text-slate-300"}`
                }
                onClick={() => setOpen(false)}
              >
                {to.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
              </NavLink>
            ))}
            <button
              onClick={() => {
                onCopyEmail();
                setOpen(false);
              }}
              className="mt-1 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white"
            >
              <Mail className="h-4 w-4" /> Copy Email
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
    Built with ❤️ by Praveen Udayagiri · © {new Date().getFullYear()}
  </footer>
);

const Home = () => {
  const words = [
    "Full-Stack Developer",
    "DSA Problem Solver",
    "MERN Enthusiast",
    "Clean-Code Advocate",
  ];
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <Page>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          >
            Hi, I'm <span className="whitespace-nowrap">Praveen Udayagiri</span>
          </motion.h1>
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-xl text-slate-300"
          >
            {words[index]}
          </motion.p>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-slate-400">
            I build fast, scalable web apps and love cracking algorithmic problems. I enjoy creating delightful UI, robust APIs, and clean architectures.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white shadow hover:translate-y-[-1px]"
            >
              <Eye className="h-4 w-4" /> View Projects
            </NavLink>
            <NavLink
              to="/resume"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-slate-200 hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Resume
            </NavLink>
          </div>
          <div className="mt-12 w-full">
            <SectionTitle icon={<Rocket className="h-5 w-5" />} title="Highlights" kicker="What I do" />
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <div className="text-slate-300">End-to-end product dev: idea → UI → API → deploy.</div>
              </Card>
              <Card>
                <div className="text-slate-300">Real-time features with websockets & scalable infra.</div>
              </Card>
              <Card>
                <div className="text-slate-300">Strong DSA foundation for performant solutions.</div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

const Education = () => (
  <Page>
    <SectionTitle icon={<School className="h-5 w-5" />} title="Education Timeline" kicker="Where I studied" />
    <VerticalTimeline animate={true} lineColor="#6366f1">
      {EDUCATION.map((e, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#18181b", color: "#fff", border: "1px solid #6366f1" }}
          contentArrowStyle={{ borderRight: "7px solid #6366f1" }}
          date={e.period}
          iconStyle={{ background: "#6366f1", color: "#fff" }}
          icon={TIMELINE_ICONS[e.badge]}
        >
          <h3 className="vertical-timeline-element-title">{e.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{e.place}</h4>
          <div style={{ margin: "0.5rem 0" }}>
            <span className="mr-2">{e.stream}</span>
            <span className="mr-2">{e.score}</span>
            <span>Year: {e.endYear}</span>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Page>
);

const Skills = () => (
  <Page>
    <SectionTitle icon={<Braces className="h-5 w-5" />} title="Skills" kicker="Tech I use" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SKILLS.map((category) => (
        <Card key={category.title}>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-white bg-white/10 p-2 rounded-md">{category.icon}</div>
            <h3 className="text-white text-xl font-semibold">{category.title}</h3>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {category.items.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.15, y: -5, boxShadow: "0 0 15px rgba(99,102,241,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer rounded-lg bg-white/5 p-3 backdrop-blur transition-transform"
                title={skill}
              >
                <LazyLoadImage
                  alt={skill}
                  src={SKILL_LOGOS[skill]}
                  effect="blur"
                  className="h-8 w-8 object-contain select-none"
                  draggable={false}
                />
                <span className="mt-2 text-sm text-white select-none">{skill}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Page>
);



const ProjectCard = ({ p }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{p.title}</h3>
          <p className="text-slate-300">{p.subtitle}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}

        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300">
        {p.points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
    </Card>
  );
};

const Projects = () => (
  <Page>
    <SectionTitle icon={<GitBranch className="h-5 w-5" />} title="Projects" kicker="What I've built" />
    <div className="grid gap-5 md:grid-cols-2">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
    </div>
  </Page>
);

const Resume = () => {
  const [src, setSrc] = React.useState(RESUME_URL);
  const inputRef = React.useRef(null);

  const onPick = (e) => {
    const f = e.target?.files?.[0];
    if (!f) return;
    setSrc(URL.createObjectURL(f));
  };

  return (
    <Page>
      <SectionTitle icon={<Download className="h-5 w-5" />} title="Resume" kicker="Preview & download" />
      <Card>
        <div className="flex flex-col gap-6 lg:flex-row">
<div className="flex-1 min-w-[700px] max-w-full h-[900px] border border-white/10 rounded-xl overflow-hidden bg-black">
  {src ? (
    <object data={src} type="application/pdf" className="w-full h-full">
      <iframe src={src} title="Resume" className="w-full h-full" />
    </object>
  ) : (
    <div className="flex items-center justify-center h-full text-slate-400">
      No PDF Selected
    </div>
  )}
</div>

          <div className="w-full max-w-sm">
            <a
              href={src}
              download
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/10 rounded-lg p-2 mb-4 text-white hover:bg-white/20"
            >
              <Download className="h-5 w-5" /> Download Resume
            </a>
          </div>
        </div>
      </Card>
    </Page>
  );
};



// --------------------------- Shell ---------------------------
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="min-h-[calc(100vh-64px)]"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};

const Toast = ({ show, text }) => (
  <div
    className={`pointer-events-none fixed inset-x-0 top-4 z-[60] mx-auto w-fit transition ${
      show ? "opacity-100" : "opacity-0"
    }`}
    role="status"
    aria-live="polite"
  >
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white shadow">
      <Check className="h-4 w-4" /> {text}
    </div>
  </div>
);

const App = () => {
  const [toast, setToast] = useState("");

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast("Email copied: " + EMAIL);
    } catch {
      setToast("Copy failed. Tap to copy manually: " + EMAIL);
    } finally {
      setTimeout(() => setToast(""), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <GradientBg />
      <HashRouter>
        <Nav onCopyEmail={onCopyEmail} />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
      <Toast show={!!toast} text={toast} />
    </div>
  );
};

export default App;
