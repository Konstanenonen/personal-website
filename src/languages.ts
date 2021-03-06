const languages = {
  english: {
    name: "english",
    navItems: ["About", "Experience", "Projects"],
    mainItems: [
      "About",
      "Experience",
      "Projects",
      "Here comes information about me",
      "Here comes information about my experience",
      "Vaihda kieli suomeksi",
    ],
    projects: [
      {
        name: "Quizzical App",
        gitHub: "https://github.com/Konstanenonen/Quizzical-App",
        link: "https://konstanenonen.github.io/Quizzical-App/",
        linkName: "Link to live site",
        about:
          "Quizzical is a React.js based front-end web application that uses Open Trivia Database API. Open Trivia DB is created and maintained by PIXELTAIL GAMES LLC.",
      },
      {
        name: "Pomodoro Timer",
        gitHub: "https://github.com/Konstanenonen/Pomodoro-Timer",
        linkName: "Link to live site",
        link: "https://konstanenonen.github.io/Pomodoro-Timer/",
        about:
          "Timer for studying. This was the final project of freeCodeCamp's frontend frameworks course. I also moved this project to TypeScript to learn more about it.",
      },
      {
        name: "Calculator",
        gitHub: "https://github.com/Konstanenonen/Calculator",
        linkName: "Link to live site",
        link: "https://konstanenonen.github.io/Calculator/",
        about:
          "Simple calculator for basic math. Displays the end value and the formula. I did this project as a task for two different learning platforms. freeCodeCamp and The Odin Project.",
      },
      {
        name: "Drum Machine",
        gitHub: "https://github.com/Konstanenonen/Drum-Machine",
        linkName: "Link to live site",
        link: "https://konstanenonen.github.io/Drum-Machine/",
        about:
          "Play sounds by clicking the buttons or by using keyboard. Displays my best imitation of every sound. This was one of freeCodeCamp's learning projects for their JavaScript frameworks course.",
      },
    ],
    footerItems: {
      connectText: "Drop a message!",
    },
  },
  finnsih: {
    name: "finnish",
    navItems: ["Min??", "Kokemus", "Projektit"],
    mainItems: [
      "Min??",
      "Kokemus",
      "Projektit",
      "T??nne tulee tietoa minusta",
      "T??nne tulee tietoa kokemuksestani",
      "Change language to English",
    ],
    projects: [
      {
        name: "Tietovisa sovellus",
        gitHub: "https://github.com/Konstanenonen/Quizzical-App",
        link: "https://konstanenonen.github.io/Quizzical-App/",
        linkName: "Linkki demosivulle",
        about:
          "React.js pohjainen frontti Open Trivia Database API:lle. Open Trivia DB:n on kehitt??nyt ja yll??pit???? PIXELTAIL GAMES LLC.",
      },
      {
        name: "Pomodoro Ajastin",
        gitHub: "https://github.com/Konstanenonen/Pomodoro-Timer",
        linkName: "Linkki demosivulle",
        link: "https://konstanenonen.github.io/Pomodoro-Timer/",
        about:
          "Ajastin opiskeluun ja keskittymiseen. T??m?? oli viimeinen projekti freeCodeCamp:n frontend frameworks -kurssilla. Siirsin projektin TypeScriptiin oppiakseni sit?? paremmin.",
      },
      {
        name: "Laskin",
        gitHub: "https://github.com/Konstanenonen/Calculator",
        linkName: "Linkki demosivulle",
        link: "https://konstanenonen.github.io/Calculator/",
        about:
          "Yksinkertainen laskin React.js -kirjastolla kehitettyn??. N??ytt???? laskukaavan ja lopputuloksen omilla riveill????n. Projekti oli osa kahden eri oppimisalustan kurssia: freeCodeCamp ja The Odin Project.",
      },
      {
        name: "Rumpukone",
        gitHub: "https://github.com/Konstanenonen/Drum-Machine",
        linkName: "Linkki demosivulle",
        link: "https://konstanenonen.github.io/Drum-Machine/",
        about:
          "Soittaa ????nen nappeja tai n??pp??imist???? painamalla. N??yt??ss?? lukee paras imitaationi kaikille ????nille. T??m??kin kurssi oli osa freeCodeCamp:n frontend frameworks -kurssia",
      },
    ],
    footerItems: {
      connectText: "L??het?? viesti!",
    },
  },
};

export default languages;
