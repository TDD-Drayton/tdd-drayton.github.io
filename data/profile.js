const profileData = {
  title: "CV",

  name: "Toi Drayton",

  sub_title: "Network Automation | DevOps | Test Engineering",

  logoURL: "assets/images/dp.jpg",

  about: {
    intro: `
      Network engineer focused on <strong>network automation</strong>,
      <strong>network protocols</strong>, <strong>DevOps</strong>,
      and <strong>software test automation</strong>.
      Experienced with Python, C/C++, Cisco and Juniper networking,
      CI/CD, automated testing, and Layer 2–4 technologies.
    `,

    contact: {
      email: "-",
      phone: "-",
      address: "Remote - Global"
    }
  },

  links: [
    {
      title: "GitHub",
      src: "https://github.com/TDD-Drayton"
    },
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/toi-d-995a3a199/"
    }
  ],

  education: [
    {
      alma: "Harvard Extension School",
      duration: "",
      std: "Bachelor of Liberal Arts",
      score: ""
    },
    {
      alma: "Eastern Florida State College",
      duration: "",
      std: "Associate of Science",
      score: ""
    }
  ],

  skills: [
    {
      category: "Programming",
      topics: [
        "Python",
        "C",
        "C++",
        "JavaScript",
        "SQL"
      ]
    },

    {
      category: "Networking",
      topics: [
        "TCP/IP",
        "IPv4/IPv6",
        "BGP",
        "OSPF",
        "EIGRP",
        "MPLS",
        "VPLS",
        "EVPN",
        "VXLAN",
        "802.1Q VLAN",
        "LLDP",
        "LACP",
        "STP",
        "VRRP",
        "OAM",
        "MACsec",
        "DNS",
        "DHCP",
        "SNMP"
      ]
    },

    {
      category: "Network Automation",
      topics: [
        "Junos Automation",
        "Python/PyEZ",
        "XML/NETCONF",
        "REST APIs",
        "Ansible",
        "YAML",
        "JSON"
      ]
    },

    {
      category: "Testing & DevOps",
      topics: [
        "CMocka",
        "Robot Framework",
        "Selenium/WebDriver",
        "Postman",
        "Jenkins",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "Git"
      ]
    },

    {
      category: "Engineering Tools",
      topics: [
        "Jupyter Notebook",
        "Tableau",
        "Flask"
      ]
    }
  ],

  projects: [
    {
      title: "C/C++ Network Software",
      duration: "Development & Debugging",
      link: "https://github.com/TDD-Drayton/",
      desc: `
        Network software development, data structures,
        protocol implementation, testing, and debugging.
      `
    },

    {
      title: "Python Test Automation",
      duration: "Automation",
      link: "https://github.com/TDD-Drayton/",
      desc: `
        Automated unit and integration testing using Python
        and Robot Framework.
      `
    },

    {
      title: "Layer 2 Technologies",
      duration: "Networking",
      link: "https://github.com/TDD-Drayton",
      desc: `
        802.1Q VLAN bridging, VPLS, EVPN, VXLAN,
        MPLS, MC-LAG, OAM, and MACsec.
      `
    },

    {
      title: "Network Protocols",
      duration: "Layer 2–4",
      link: "https://github.com/TDD-Drayton",
      desc: `
        LLDP, LACP, STP, LFM, CFM, VRRP, ERP,
        MVRP, TCP, UDP, IPv4/IPv6, OSPF, and BGP.
      `
    }
  ],

  experiences: [
    {
      organization: "Freelance",

      title: "Network Software & Test Automation Engineer",

      /*
       * Existing main.js displays this field beside the job title.
       * Using work arrangement instead of employment dates.
       */
      date: "Remote - Global",

      details: [
        `Develop and test C/C++ network software involving
        Layer 3 and Layer 4 technologies, including TCP/IP
        and UDP, with emphasis on protocol behavior,
        reliability, and troubleshooting.`,

        `Design and implement automated unit and integration
        tests using CMocka to validate network software
        functionality and regression behavior.`,

        `Integrate automated testing into CI/CD pipelines
        using Jenkins and GitHub Actions to support
        repeatable software validation.`,

        `Analyze, design, implement, test, and maintain
        software modules supporting network infrastructure
        and protocol functionality.`,

        `Design, document, and execute unit and integration
        test cases for new features and automate
        repeatable test scenarios.`,

        `Collaborate with engineers and architects across
        geographically distributed teams using Git-based
        development workflows.`,

        `Troubleshoot and debug software and network behavior
        across Layer 2, Layer 3, and Layer 4 technologies.`
      ]
    },

    {
      organization: "Citizens Property Insurance",

      title: "Software Test Engineer",

      date: "Florida, USA - Hybrid",

      details: [
        `Tested front-end, back-end, and database changes
        to validate functionality across integrated systems.`,

        `Performed manual, functional, integration,
        and regression testing to identify defects
        and maintain product quality.`,

        `Developed and executed automated test workflows
        using Java, JavaScript, Selenium/WebDriver,
        Jenkins, and Postman.`,

        `Validated APIs and application integrations
        as part of end-to-end system testing.`,

        `Collaborated with vendors and internal stakeholders
        during system implementation and integration.`,

        `Documented test execution, defects, and validation
        results to support engineering and release decisions.`
      ]
    },

    {
      organization: "Amazon",

      title: "IT Engineer | Systems Administrator",

      date: "Florida, USA - On Site",

      details: [
        `Implemented, configured, monitored, and maintained
        Cisco and Juniper network infrastructure in
        collaboration with engineering teams.`,

        `Administered and troubleshot enterprise networking
        technologies including TCP/IP, IPv4/IPv6,
        DHCP, DNS, BGP, EIGRP, MPLS/VPLS, and SNMP.`,

        `Diagnosed network connectivity and infrastructure
        issues using ping, traceroute, MTR, SSH,
        and Telnet.`,

        `Used Python, Jupyter Notebook, and Tableau
        to analyze customer-support, uptime,
        and networking metrics.`,

        `Supported network-connected infrastructure and
        endpoints including laptops, desktops,
        thin clients, printers, scanners, tablets,
        and related operational technology.`,

        `Managed technology procurement across multiple
        accounts, overseeing assets valued at
        more than $500,000.`,

        `Collaborated with technology vendors on infrastructure
        and asset implementation to support reliable
        deployment and ongoing operations.`
      ]
    }
  ],

  certifications: [
    {
      desc: `
        <strong>JNCIA-DevOps</strong>
        by <strong>Juniper Networks</strong>.
        (<a
          target="_blank"
          rel="noreferrer"
          href="https://www.credly.com/users/toi-drayton/badges"
        >Credly</a>)
      `,
      date: ""
    },

    {
      desc: `
        <strong>Applied Data Science with Python - Level 2</strong>
        by <strong>IBM</strong>.
        (<a
          target="_blank"
          rel="noreferrer"
          href="https://www.credly.com/users/toi-drayton/badges"
        >Credly</a>)
      `,
      date: ""
    },

    {
      desc: `
        <strong>Docker Essentials: A Developer Introduction</strong>
        by <strong>IBM</strong>.
        (<a
          target="_blank"
          rel="noreferrer"
          href="https://www.credly.com/users/toi-drayton/badges"
        >Credly</a>)
      `,
      date: ""
    }
  ],

  events: []
};