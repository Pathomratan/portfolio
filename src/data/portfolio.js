import liveDemo from "../assets/images/Live Demo serious.mp4";
import webpageImage from "../assets/images/Webpageserious.png";
import webSecurity from "../assets/images/Websecurityscanner.png";

export const portfolio = {
  name: "Pathomrat Anusonpornpherm",
  role: "Project Management & Full Stack Web Developer",
  email: "Pathomrat.an@hotmail.com",
  location: "Bangkok, Thailand",
  cv: "https://drive.google.com/file/d/1AvlOpf4Cancyvf4wpgk5SAZPkmuRB791/view?usp=drive_link",
  github: "https://github.com/Pathomratan",
  linkedin: "https://www.linkedin.com/in/pathomrat-anusonpornpherm-655428406/",
  about: `I turn operational chaos into structured, on-time delivery — and now I speak both the language of business and the language of code.
          With 15+ years leading cross-functional teams across insurance, FMCG, and quality assurance, I've built a track record of translating complex stakeholder needs into executable project plans — managing teams of up to 15 people, overseeing ISO 9001 / GMP / HACCP compliance cycles, and driving operations across regulated environments governed by the OIC and SEC.
          In 2026, I doubled down on a deliberate evolution: completing an intensive Full-Stack Development program at Generation Thailand (JavaScript, React, Node.js, Express) — and shipping a live application along the way.
          That combination is rare. Most PMs can't read a pull request. Most developers can't run a board-level project review. I can do both — and that's what makes me effective as a Technical Project Manager inside teams where business and engineering need to actually understand each other.`,
  experience: [
    "Junior Software Developer Program, Generation Thailand",
    "Operations & Project Management Lead 2018 - 2025",
    "Chief of Admin 2014 - 2017",
    "Trade Marketing Manager 2012 - 2014",
    "Senior Marketing & Promotion 2010 - 2012"
  ],
  education: [
    "Generation Thailand - Junior Software Developer Program",
    "Master of Business Administration (Executive MBA) | Burapha University",
    "Bachelor of Business Administration (Industrial Management) | Ramkhamhaeng University"
  ],
  highlightSkills: ["HTML", "React", "CSS", "Tailwind", "JavaScript", "Node.js", "Express", "MongoDB"],
  meta: {
    longitude: "100.5018",
    latitude: "13.7563",
    browser: "Chrome",
    os: "Window 10"
  },
  projects: [
    {
      slug: "serious-fried-chicken-restaurant",
      name: "Serious Fried Chicken Restaurant",
      description:
        "A fried chicken restaurant with a complete management system and self-service delivery project.",
      techStack: ["Figma", "React", "CSS", "Node.js", "MongoDB"],
      image: webpageImage,
      github: "https://github.com/your-username/restoring-humanity",
      demo: liveDemo
    },
    {
      slug: "Web Security Scanner",
      name: "Web Security Scanner",
      description:
        "Automated Website Security Scanner — Tests 18 security checks ranging from HTTPS/TLS to security headers, DNS, CORS, and information disclosure, followed by risk analysis and remediation steps powered by AI.",
      techStack: ["React", "CSS"],
      image: webSecurity,
      github: "https://github.com/Pathomratan/web-security-scanner#tech-stack",
      demo: "https://your-project-demo.com"
    },
  ]
};
