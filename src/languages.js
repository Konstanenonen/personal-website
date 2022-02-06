const languages = {
  english: {
    name: 'english',
    navItems: [
      'About',
      'Experience',
      'Projects',
    ],
    mainItems: [
      'About',
      'Experience',
      'Projects',
      'Here comes information about me',
      'Here comes information about my experience',
      'Vaihda kieli suomeksi',
    ],
    projects: [
      {
        name: 'To-do-list',
        gitHub: 'https://github.com/konstanenonen/To-Do-List-jQuery',
        link: 'https://objective-bhabha-b57a39.netlify.app/',
        linkName: 'Link to live site',
        about: 'Simple task list made with jQuery and Bootsrap. App also uses Local Storage, so the data will survive a page refresh.',
      },
      {
        name: 'Global Corona Statistics App',
        gitHub: 'https://github.com/Konstanenonen/Global-Corona-Statistics-App',
        linkName: 'Link to live site',
        link: 'https://gallant-wescoff-74ee5c.netlify.app/',
        about: 'A web app that fetches Corona pandemic statistics from "https://api.covid19api.com/',
      },
    ],
    footerItems: {
      connectText: 'Drop a message!',
    },
  },
  finnsih: {
    name: 'finnish',
    navItems: [
      'Minä',
      'Kokemus',
      'Projektit',
    ],
    mainItems: [
      'Minä',
      'Kokemus',
      'Projektit',
      'Tänne tulee tietoa minusta',
      'Tänne tulee tietoa kokemuksestani',
      'Change language to English',
    ],
    projects: [
      {
        name: 'Tehtävälista',
        gitHub: 'https://github.com/Konstanenonen/To-Do-List-jQuery',
        link: 'https://objective-bhabha-b57a39.netlify.app/',
        linkName: 'Linkki toimivalle sivulle',
        about: 'Yksinkertainen tehtävälista tehty jQuerya ja bootsrappia hyödyntäen. Toteutuksessa on myös käytetty Local Storagea, joten sovellus on sivun päivittämisen kestävä.',
      },
      {
        name: 'Koronatilanne sovellus',
        gitHub: 'https://github.com/Konstanenonen/Global-Corona-Statistics-App',
        link: 'https://gallant-wescoff-74ee5c.netlify.app/',
        linkName: 'Linkki toimivalle sivulle',
        about: 'Sovellus, jolla voi hakea tietoa eri maiden pandemiatilanteen tuoreimmista luvuista. Tietoa sovellus hakee api-rajapinnasta: "https://api.covid19api.com/".',
      },
    ],
    footerItems: {
      connectText: 'Lähetä viesti!',
    },
  },
};

export default languages;
