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
    ],
    projects: [
      {
        name: 'To-do-list',
        gitHub: 'https://github.com/Konstanenonen/To-Do-List-jQuery',
        link: 'https://objective-bhabha-b57a39.netlify.app/',
        linkName: 'Link to live site',
        about: 'Simple task list made with jQuery and Bootsrap. App also uses local storage, so the data will survive a page refresh.',
      },
      {
        name: 'Global Corona Statistics App',
        gitHub: 'https://github.com/Konstanenonen/Global-Corona-Statistics-App',
        linkName: 'Link to live site',
        link: 'https://gallant-wescoff-74ee5c.netlify.app/',
        about: 'I made a web app that fetches information from "https://api.covid19api.com/ using a button for Global statistics, dropdown menu for a few selected countries, and then there is a search field to make a search for any wanted country. After fetching the data, it is shown in a table that uses colors, icons and bootstrap styling to make the data look nice and readable.',
      },
    ],
    footerItems: [
      'Let\'s connect!',
    ],
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
    ],
    projects: [
      {
        name: 'Tehtävälista',
        gitHub: 'https://github.com/Konstanenonen/To-Do-List-jQuery',
        link: 'https://objective-bhabha-b57a39.netlify.app/',
        linkName: 'Linkki toimivalle sivulle',
        about: 'Yksinkertainen tehtävälista tehty jQuerya ja bootsrappia hyödyntäen. Toteutuksessa on myös käytetty local storage, joten sovellus on sivun päivittämisen kestävä',
      },
      {
        name: 'Koronatilanne sovellus',
        gitHub: 'https://github.com/Konstanenonen/Global-Corona-Statistics-App',
        link: 'https://gallant-wescoff-74ee5c.netlify.app/',
        linkName: 'Linkki toimivalle sivulle',
        about: 'Sovellus, jolla voi hakea tietoa eri maiden pandemiatilanteen tuoreimmista luvuista.',
      },
    ],
    footerItems: [
      'Ota yhteyttä!',
    ],
  },
};

export default languages;
