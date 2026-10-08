// ─── Portfolio Content ────────────────────────────────────────────────
// Edit this file to update your portfolio without touching any component.

export const personalInfo = {
  name: "Emebet Mesfin",
  roles: ["Fullstack Developer", "Graphics Designer"],
  bio: "Dedicated and committed Junior Web Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, React, PHP, Java, and MySQL. Successfully completed a Full-Stack Web Development internship where I contributed to real development tasks and earned both a Certificate and a Recommendation Letter. Currently working at INSA. I am a fast learner who enjoys exploring new technologies and continuously improving my skills.",
  profilePhoto: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/emun-removebg-preview.png",
  aboutPhoto: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/EB.jpg",
  cvUrl: "profession cv.pdf",
  location: "Addis Ababa, Ethiopia",
  email: "elady473@gmail.com",
  phone: "+251-907 688605",
};

export const stats = [
  { value: 7, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 2, suffix: " Years", label: "Experience" },
  { value: 100, suffix: "%", label: "Passion" },
];

export const education = [
  {
    degree: "Bachelor's of Computer Science",
    school: "Hawassa University",
    years: "2016–2019",
  },
  {
    degree: "Bachelor's of Accounting and Finance",
    school: "Info Link University College",
    years: "2016–2019",
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "INSA — Information Network Security Administration",
    period: "2024 – Present",
    current: true,
    points: [
      "Developing and maintaining secure web applications for government systems",
      "Collaborating with cross-functional teams to build responsive, user-friendly interfaces",
      "Implementing frontend and backend features using modern web technologies",
    ],
  },
  {
    role: "Fullstack Web Developer",
    company: "Future Interns Plc.",
    period: "Mar – Apr 2024",
    current: false,
    points: [
      "Built and designed web pages using front-end languages",
      "Developed full frontend and backend projects using HTML, CSS, JavaScript, PHP, MySQL",
    ],
  },
];

export const certificates = [
  "Programming Fundamentals — Ethiocoders.et",
  "Full-Stack Development — Future Interns",
  "C++ Fundamentals — Awaqi.com",
];

export const skills = [
  {
    category: "Frontend",
    icon: "code",
    items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Figma UI/UX", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: "database",
    items: ["Node.js", "Express.js", "PHP", "MySQL", "PostgreSQL", "Supabase", "Keycloak", "Docker"],
  },
  {
    category: "Languages & Tools",
    icon: "design",
    items: ["Java", "C++", "Git & GitHub", "REST APIs"],
  },
  {
    category: "Graphics Design",
    icon: "design2",
    items: ["Business Card", "Social Media Posts", "Banner", "Logo", "Thumbnail"],
  },
];

export const projects = [
  {
    title: "PRMS Microservice",
    description: "Property and Resource Management System developed with a microservices architecture.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    tags: ["Backend", "Microservices", "Docker"],
    link: "#",
    status: "Ongoing",
  },
  {
    title: "ERP & App Development",
    description: "Enterprise Resource Planning system and mobile app development for businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Fullstack", "ERP", "Mobile App"],
    link: "#",
    status: "Ongoing",
  },
  {
    title: "Adey Coffee and Pastry App",
    description: "A modern application for a coffee and pastry shop with online ordering and menu browsing.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    tags: ["React", "Mobile App", "E-Commerce"],
    link: "#",
    status: "Ongoing",
  },
  {
    title: "Saminar E-commerce",
    description: "A complete e-commerce platform for Saminar, featuring a modern shopping experience.",
    image: "/saminar-preview.png",
    tags: ["React", "E-Commerce", "API"],
    link: "https://saminar-web-git-main-elady473-arts-projects.vercel.app/",
    status: "Finished",
  },
  {
    title: "Kenbon Computers",
    description: "Modern e-commerce platform for computer hardware and accessories",
    image: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/pcy.jpg",
    tags: ["TypeScript", "React", "TailwindCSS"],
    link: "https://www.kenbontech.com/",
    github: "https://github.com/elady473-art/kenbon_Computers",
    status: "Finished",
  },
  {
    title: "Email Template",
    description: "A comprehensive system for managing EMAIL samples for big companies",
    image: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/e.jpg",
    tags: ["React", "Node.js"],
    link: "https://elady473-art.github.io/email-template/",
    status: "Finished",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website showcasing projects and skills",
    image: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/pooo.jpg",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://elady473-art.github.io/emuportifolio/",
    status: "Finished",
  },
  {
    title: "Amazon Market",
    description: "Modern landing page for a marketplace with menu and online ordering",
    image: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/am.jpg",
    tags: ["React", "API", "Design"],
    link: "https://elady473-art.github.io/land/",
    status: "Finished",
  },
  {
    title: "Power Gym",
    description: "Modern website for a gym with coaches and online registration",
    image: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/gym.jpg",
    tags: ["React", "API", "CSS"],
    link: "https://elady473-art.github.io/FUTURE_FS_03/",
    status: "Finished",
  },
  {
    title: "Student Management System",
    description: "Web app for students with detailed data management and online registration",
    image: "https://raw.githubusercontent.com/elady473-art/CodeAlpha_task3/main/stud.jpg",
    tags: ["JavaScript", "API", "PostgreSQL"],
    link: "https://elady473-art.github.io/FUTURE_FS-02/",
    status: "Finished",
  },
  {
    title: "Restaurant Management App",
    description: "Elegant restaurant website with reservation system, gallery, and real-time order tracking",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["React", "Express", "MongoDB", "Real-time"],
    link: "https://elady473-art.github.io/resto/",
    status: "Finished",
  },
  {
    title: "Graphic Design: Logo",
    description: "Custom logo design demonstrating brand identity and creativity.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    tags: ["Graphic Design", "Branding", "Logo"],
    link: "#",
    status: "Finished",
  },
  {
    title: "Graphic Design: Business Card",
    description: "Professional business card design for various companies.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    tags: ["Graphic Design", "Print"],
    link: "#",
    status: "Finished",
  },
  {
    title: "Graphic Design: Social Media Posts",
    description: "Engaging social media post designs to boost online presence.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Graphic Design", "Social Media"],
    link: "#",
    status: "Finished",
  },
];

export const contactInfo = [
  {
    label: "Phone",
    value: "+251-907 688605",
    href: "tel:0907688605",
    icon: "phone",
  },
  {
    label: "Email",
    value: "elady473@gmail.com",
    href: "mailto:elady473@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "Emebet Mesfin",
    href: "https://www.linkedin.com/in/emebet-mesfin-780483358",
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    value: "elady473-art",
    href: "https://github.com/elady473-art",
    icon: "github",
    external: true,
  },
  {
    label: "Telegram",
    value: "@Ladyti24",
    href: "https://t.me/Ladyti24",
    icon: "telegram",
    external: true,
  },
];

export const socialLinks = [
  { name: "Facebook",  href: "https://www.facebook.com/share/p/18PwFFNKdX/", className: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/emu_ti_24",           className: "instagram" },
  { name: "Telegram",  href: "https://t.me/Ladyti24",                         className: "telegram" },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/emebet-mesfin-780483358", className: "linkedin" },
  { name: "YouTube",   href: "https://youtube.com/@eladymaster_lady",          className: "youtube" },
];
