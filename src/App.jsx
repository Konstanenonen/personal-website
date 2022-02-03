import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Languages from './languages';

function App() {
  const languages = Languages;
  const [siteLanguage, setSiteLanguage] = React.useState(languages.english);

  function toggleLanguage() {
    setSiteLanguage((prevLanguage) => (
      prevLanguage.name === 'english' ? languages.finnsih : languages.english
    ));
  }

  return (
    <>
      <Navbar language={siteLanguage.navItems} handleClick={() => toggleLanguage()} />
      <Main languageProjects={siteLanguage.projects} language={siteLanguage.mainItems} />
      <Footer language={siteLanguage.footerItems} />
    </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     < className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     <<>
//   );
// }
