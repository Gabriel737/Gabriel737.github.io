/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gabriel Xu Henderson",
  title: "Hi, I'm Gabriel",
  subTitle: emoji(
    "A Software Engineer 🚀 with interests in Back-end Software Development, Distributed Systems, Big Data, and Cloud Computing"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LGJ7paLIwndTkZspK0y04tOxpYWkKmNb/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gabriel737",
  linkedin: "https://www.linkedin.com/in/gabrielhenderson",
  gmail: "gabriel.henderson@live.com",
  // gitlab: ""
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm an ambitious and passionate programmer who wants to explore every tech stack. Here's what I know so far:",
  skills: [
    emoji(
      "⚡ Develop highly robust and scalable distributed back-end systems"
    ),
    emoji(
      "⚡ Leverage modern cloud solutions like AWS to ensure flexibility, efficiency, and reliability"
    ),
    emoji(
      "⚡ Engineer robust solutions by using industry best practices such as agile methodology and test-driven development"
    ),
    emoji(
      "⚡ Deploy Machine Learning models to uncover important insights from your data"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Simon Fraser University",
      logo: require("./assets/images/SFULogo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "Graduated December 2022",
      descBullets: [
        "Grade Point Average: 4.0",
        "Relevant coursework: Machine Learning, Distributed Systems, Cloud Computing, and Natural Language Processing"
      ]
    },
    {
      schoolName: "University of British Columbia",
      logo: require("./assets/images/UBCLogo.jpg"),
      subHeader: "Bachelor of Science in Mathematics",
      duration: "Graduated May 2017",
      descBullets: [
        "Grade Point Average: 90%",
        "Relevant coursework: Advanced Data Structures and Algorithms, Functional & Parallel Programming, and Database Systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Back-end Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Front-end Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning & Data Science",
      progressPercentage: "60%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazon.jpg"),
      date: "May 2022 – August 2022",
      desc: "AWS Worklow - Step Functions (Core Engine Team)",
    },
    {
      role: "Graduate Teaching Assistant",
      company: "Simon Fraser University",
      companylogo: require("./assets/images/SFULogo.jpg"),
      date: "September 2021 – April 2022",
      desc: "School of Computing Science, Faculty of Science ",
    },
    {
      role: "Certified Flight Instructor",
      company: "Langley Flying School",
      companylogo: require("./assets/images/GURWLogo.jpg"),
      date: "November 2019 – August 2021",
      desc: "Class III Flight Instructor, Fixed Wing VFR",
    },
    {
      role: "NSERC Research Assistant",
      company: "Centre for Experimental and Constructive Mathematics",
      companylogo: require("./assets/images/CECMLogo.png"),
      date: "May 2017 – August 2017",
      desc: "Computer Algebra Group. Research project: Sparse Interpolation",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: emoji("Some cool projects I've worked on 👨‍💻🛠️"),
  projects: [
    {
      image: require("./assets/images/marketplace.png"),
      projectName: "Online NFT Marketplace",
      projectDesc: "A simulated NFT marketplace using Kubernetes, scaled to 5000+ concurrent users and 2800+ TPS.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Gabriel737/NFT-Marketplace-k8s"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/heatmap.png"),
      projectName: "Crime Prediction Heatmap",
      projectDesc: "Use machine learning on real data to predict crime-wise hotspots in your city!",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Gabriel737/Crime-Hotspot-Prediction"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CadorsLogo.svg"),
      projectName: "Aviation Safety Dashboard",
      projectDesc: "Your one-stop-shop for all data relating to Canadian civil aviation incidents and accidents, with a touch of ML.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Gabriel737/CadorsMap"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GameLogo.svg"),
      projectName: "Shinkei-Suijaku",
      projectDesc: "You played it on SEGA back in the day, now play it on your PC too!",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Gabriel737/Shinkei-Suijaku"
        }
      ]
    },
    {
      image: require("./assets/images/ProcasLogo.svg"),
      projectName: "ProCAS",
      projectDesc: "Need a computer to do your algebra? Can't afford Maple? Never heard of Wolfram Alpha? Well, here you go!",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Gabriel737/ProCAS"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Acheivements & Certifications",
  subtitle:
    "Learning doesn't end with university, here's what else I've done ...",

  achievementsCards: [
    {
      title: "Deep Dive into Modern Web Development",
      subtitle:
        "A course to learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go",
      image: require("./assets/images/FSOLogo.png"),
      footerLink: [
        {
          name: "Find out more",
          url: "https://fullstackopen.com/en/"
        }
      ]
    },
    {
      title: "Machine Learning for Python",
      subtitle:
        "This course dives into Machine learning using an approachable, and well-known programming language, Python",
      image: require("./assets/images/CourseraLogo.png"),
      footerLink: [
        {
          name: "Find out more",
          url: "https://www.coursera.org/learn/machine-learning-with-python"
        }
      ]
    },
    {
      title: "Intro to Deep Learning & Neutral Networks",
      subtitle:
        "Neural Networks, Supervised and Unsupervised Deep Learning Models, and Keras",
      image: require("./assets/images/IBMLogo.jpg"),
      footerLink: [
        {
          name: "Find out more",
          url: "https://www.coursera.org/learn/introduction-to-deep-learning-with-keras"
        }
      ]
    },
    {
      title: "CompTIA A+ Certified",
      subtitle:
        "CompTIA A+ certified professionals are proven problem solvers, supporting today’s core technologies from security to cloud to data management and more.",
      image: require("./assets/images/ComptiaLogo.png"),
      footerLink: [
        {
          name: "Find out more",
          url: "https://www.comptia.org/certifications/a"
        }
      ]
    },
    {
      title: "Certificate Program in University Teaching and Learning",
      subtitle: "A four-month, 120-hour, non-credit Senate-approved teaching certificate for SFU graduate students",
      image: require("./assets/images/CEELogo.jpg"),
      footerLink: [
        {
          name: "Find out more",
          url: "#"
        }
      ]
    },
    {
      title: "Commercial Pilot License",
      subtitle: "Issued by Transport Canada, on behalf of the Minister of Transport. VFR Land category",
      image: require("./assets/images/TCLogo.png"),
      footerLink: [
        {
          name: "Find out more",
          url: "https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433/standards/standard-421-flight-crew-permits-licences-ratings-canadian-aviation-regulations-cars#421_30"
        }
      ]
    },
    {
      title: "Flight Instructor Rating",
      subtitle: "Issued by Transport Canada, on behalf of the Minister of Transport. Class: III",
      image: require("./assets/images/TCLogo.png"),
      footerLink: [
        {
          name: "Find out more",
          url: "https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433/standards/standard-421-flight-crew-permits-licences-ratings-canadian-aviation-regulations-cars#421_70"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",

  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all!",
  number: "+1 604 838 1021",
  email_address: "gabriel.henderson@live.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
