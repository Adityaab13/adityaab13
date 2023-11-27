/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Badiger",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / AngularJS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1z93xjFze2ZBamu_koojdBjAXGrKzrIeu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adityaab13",
  linkedin: "https://www.linkedin.com/in/aditya-badiger",
  gmail: "adityabadiger1997@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@adityabadiger1997",
  stackoverflow: "https://stackoverflow.com/users/22990175/aditya-badiger",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AngularJS",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
      logo: require("./assets/images/Stevens_Institute_of_Technology.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2021 - May 2023",
      desc: "Ranked top 10% in the program. Took courses about Web Development, DataStructures and Algorithms, DBMS, Agile Methods, HCI, Machine Learning, Knowledge Discovery and DataMining",
      descBullets: [
        "Led the development of a Secure File Sharing application for Stevens Institute of Technology as part of my Web Development course",
        "Developed a Machine Learning model to predict the risk of Heart diseases in the US using Python and Jupyter Notebook",
      ]
    },
    {
      schoolName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/Dsce.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "Participated in the research of Blockchain and published a paper that has been cited by more than 50 more papers",
      descBullets: ["Achieved FirstClass with Distinction honour"
    , "Participated in various hackathons and competitions"
    , "Won the 1st prize in the Hackathon conducted by the college"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "VRIT",
      companylogo: require("./assets/images/Vrit.png"),
      date: "May 2020 – July 2021",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Spearheaded the development of a high-traffic e-commerce website using React JS and Redux, leading to a 30% increase in online sales",
        "Optimized large-scale data processing, achieving a 20% reduction in page load times through advanced techniques, including efficient bundling and transpiling with Webpack and Babel, and implementing optimized caching strategies",
        "Played a key role in developing and maintaining robust data pipelines, enhancing the website's performance and user engagement by 18%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Learnyst Insight",
      companylogo: require("./assets/images/learnyst.png"),
      date: "May 2019 – Sep 2019",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed and implemented a Scientific Computational Tool on an educational platform, optimizing large-scale data computations and reducing time by 20%",
        "Designed and maintained scalable front-end architecture, resulting in an 18% increase in user engagement",
        "Ensured high system reliability and performance in large-scale deployment of the computational tool, maintaining an error rate of less than 0.5%"
      ]
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
  subtitle: "Projects I've completed recently",
  projects: [
    {
      image: require("./assets/images/Stevens_Institute_of_Technology.png"),
      projectName: "Secure File Sharing",
      projectDesc: "Led the development of a scalable file-sharing app using AWS S3 and Lambda, catering to high user volumes and achieving a 50% increase in user adoption  ", 
    },
    {
      image: require("./assets/images/Stevens_Institute_of_Technology.png"),
      projectName: "ATrak",
      projectDesc: "Pioneered the development of an Assignment Tracker application for large-scale educational use, enhancing task management and deadline tracking",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle:
        "Completed certification from AWS",
      image: require("./assets/images/aws-dev.png"),
      imageAlt: "AWS logo",
      // footerLink: [
      //   {
      //     name: "Certification",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
      //   },
      //   {
      //     name: "Award Letter",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
      //   },
      //   {
      //     name: "Google Code-in Blog",
      //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
      //   }
      // ]
    },
    {
      title: "Google UI/UX Developer",
      subtitle:
        "Completed Certifcation from Google",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Logo",
      // footerLink: [
      //   {
      //     name: "View Google Assistant Action",
      //     url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
      //   }
      // ]
    },

    {
      title: "AWS Solutions Architect - Associate",
      subtitle: "Completed Certifcation from AWS",
      image: require("./assets/images/sol.png"),
      imageAlt: "AWS Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi? My Inbox is open for all.",
  number: "+1(551)-279-9107 ",
  email_address: "adityabadiger1997@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
