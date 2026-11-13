var config = {
  resumeImageSrc: "https://avatars3.githubusercontent.com/u/4176190?v=3&s=460",
  resumeOwner: "Nate Harris",
  occupation: "Staff Software Engineer",
  location: "Colorado Springs, CO",
  summary: "Staff-level engineer and former engineering manager with 12+ years of experience building web platforms used by millions. Early engineer at Quantum Metric (now valued at over $1B), leading the Session Replay product, architecting major features from scratch, and cutting p95 first-frame load time from 19 seconds to under 5. Equally comfortable leading teams, making architectural decisions, and writing the code.",
  education: {
    schoolName: "Cedarville University",
    degree: "B.S. in Computer Science",
    fieldOfStudyInfo: "Minors in Mathematics and Graphic Design. Graduated with honors."
  },
  moreInfo: [
    {
      link: "mailto:nate@natepharris.me",
      linkName: "nate@natepharris.me"
    },
    {
      link: "https://linkedin.com/in/n8harris",
      linkName: "linkedin.com/in/n8harris"
    },
    {
      link: "https://github.com/n8harris",
      linkName: "github.com/n8harris"
    }
  ],
  skills: [
    { label: "Languages", items: "Go, TypeScript, JavaScript, Python, Elixir, Ruby, C#, SQL" },
    { label: "Frontend", items: "React, Redux, MobX, D3, Webpack" },
    { label: "Backend and data", items: "Node.js, MariaDB, MySQL, MongoDB, DynamoDB, graph databases" },
    { label: "Infrastructure", items: "Kubernetes, Docker, ArgoCD, Grafana, GCP, AWS, Serverless, Chef, Jenkins" },
    { label: "Leadership", items: "Team lead, engineering management, architecture and technical design" }
  ],
  experiences: [
    {
      position: "Staff Software Engineer",
      companyName: "Quantum Metric",
      timeAtCompany: "Jan 2024 - Nov 2026",
      accomplishments: [
        "Led the Session Replay product team.",
        "Redesigned how replays are stored and delivered to the client, reducing p95 first-frame load time from 19 seconds to under 5 seconds.",
        "Completely rewrote the replay loader service, which retrieves stored replays and delivers them to the client with any needed data adjustments.",
        "Built an HTML-to-JSON serializer that converts native app HTML view representations into a unified JSON format.",
        "Fixed hundreds of bugs, many involving complex browser mechanics and optimizations."
      ],
      techUsed: "Go, TypeScript, JavaScript, React, Kubernetes, ArgoCD, Grafana, Google Cloud Platform (BigTable, GCS, BigQuery)"
    },
    {
      position: "Founding Engineer",
      companyName: "Audience Plus",
      timeAtCompany: "Mar 2023 - Jan 2024",
      accomplishments: [
        "Wrote the first iteration of a custom graph database that takes content and media assets and changes how they display based on user personas."
      ]
    },
    {
      position: "Software Engineering Manager",
      companyName: "Quantum Metric",
      timeAtCompany: "Jul 2021 - Mar 2023",
      accomplishments: [
        "Oversaw and contributed to a complete frontend architectural overhaul of the Session Replay product.",
        "Architected a custom windowed scrolling solution for the replay redesign, turning event scrolling on large replays from jittery to smooth.",
        "Oversaw and contributed to Visible, a product that lets customers view UX friction metrics directly on their own site through widgets and browser overlays."
      ]
    },
    {
      position: "Senior Software Engineer",
      companyName: "Quantum Metric",
      timeAtCompany: "Jan 2019 - Jul 2021",
      accomplishments: [
        "One of the first engineers at a company now valued at over $1B.",
        "Team lead on multiple projects.",
        "Architected brand-new features from the ground up."
      ],
      techUsed: "JavaScript, TypeScript, React, Node.js, MariaDB, D3, Webpack, MobX, Google Cloud Platform, Docker"
    },
    {
      position: "Senior Software Developer",
      companyName: "Sling TV",
      timeAtCompany: "May 2017 - Jan 2019",
      accomplishments: [
        "Worked on the user management and payment processing system on sling.com.",
        "Architected generic solutions to support a wide range of business and marketing flows.",
        "Contributed to a new platform built on Elixir microservices and a React component library.",
        "Team lead and part of the group making architectural decisions for an app reaching millions of people daily."
      ],
      techUsed: "React, Redux, Angular, Rails, Elixir"
    }
  ],
  earlierExperiences: [
    {
      position: "Co-Founder / Software Developer",
      companyName: "TipJar and Hively",
      timeAtCompany: "2016 - 2017",
      summary: "Built a Serverless/AWS microservice backend for tipping and authentication (TipJar). As sole developer, built a single-page app and REST API that matched employers with candidates by culture fit, using MapReduce to speed up matching (Hively, a 2016 Go Code Colorado winner)."
    },
    {
      position: "Software Developer",
      companyName: "Focus on the Family",
      timeAtCompany: "May 2015 - 2017",
      summary: "Lead developer on a product reaching millions of people per month. Cut release time from 2 hours to a few minutes with Chef and Jenkins automation, redesigned the payment system to support multiple plans and free trials, and added end-to-end and visual testing."
    },
    {
      position: "Software Engineer",
      companyName: "Air Force Research Lab",
      timeAtCompany: "May 2014 - May 2015",
      summary: "Sole developer on a radar simulator project. Built a C#/Python application that helped senior engineers run tests more easily by providing an interface to generate files for flight trajectory simulators, and raised test coverage to 80%."
    },
    {
      position: "Software Engineer Intern",
      companyName: "Ball Aerospace",
      timeAtCompany: "May 2013 - May 2014",
      summary: "Built a PHP/Java web app, improved UX through A/B testing, and improved database performance with indexing, query fixes, and Memcached."
    }
  ]
};
