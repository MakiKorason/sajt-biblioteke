import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  Navigate
} from 'react-router-dom';

import {
  Container,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

import Contact from './components/Contact';
import Home from './components/Home';
import History from './components/AboutAs/History';
import Employees from './components/AboutAs/Employees';
import Services from './components/Services';
import Competition from './components/AboutAs/Competition';
import Recommendations from './components/Books/Recommendations';
import DigitalLibrary from './components/Books/DigitalLibrary';
import BooksSearche from './components/Books/BooksSearche';
import Events from './components/Events';
import OurPublic from './components/Books/OurPublic';

import Kid from './components/Department/Kid';
import Adult from './components/Department/Adult';
import Scientific from './components/Department/Scientific';
import Homeland from './components/Department/Homeland';
import Legati from './components/Department/Legati';

import Project from './components/AboutAs/Project';
import MisionAndVision from './components/AboutAs/MisionAndVision';

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

import { HelmetProvider } from 'react-helmet-async';

import { useState } from 'react';

import AnimatedPage from './components/Department/AnimatedPage';
import ImageModal from './components/ImageModal';

import { AnimatePresence } from 'framer-motion';

import NotFound from './components/NotFound';


/* =========================================================
   LANGUAGE
========================================================= */

const LANGUAGE_STORAGE_KEY = 'siteLanguage';


function getInitialLanguage() {

  try {

    return (
      localStorage.getItem(
        LANGUAGE_STORAGE_KEY
      ) || 'sr'
    );

  } catch {

    return 'sr';

  }

}


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

  sr: {

    notice:
      'Са задовољством обавештавамо наше кориснике да је библиотека обогатила своју понуду аудио-књигама.',

    workingHours:
      'Радно време: 08:00–20:00',

    cobiss:
      'COBISS',

    cobissDescription:
      'Претражите фонд',

    digitalLibrary:
      'ДИГИТАЛНА БИБЛИОТЕКА',

    digitalLibraryDescription:
      'Истражите дигитални фонд',

    library:
      'ГРАДСКА БИБЛИОТЕКА',

    name:
      '„Атанасије Стојковић“',

    city:
      'РУМА',

    about:
      'О БИБЛИОТЕЦИ',

    history:
      'Историјат библиотеке',

    employees:
      'Запослени',

    vision:
      'Визија и мисија',

    projects:
      'Пројекти',

    competition:
      'Конкурс',

    fund:
      'ФОНД',

    recommendations:
      'Препорука библиотекара',

    publications:
      'Наша издања',

    digital:
      'Дигитална библиотека',

    search:
      'Претраживање фонда',

    legacies:
      'Легати',

    departments:
      'ОДЕЉЕЊА',

    children:
      'Одељење за децу',

    adults:
      'Одељење за одрасле',

    scientific:
      'Одељење научне и стручне литературе',

    homeland:
      'Завичајна збирка',

    services:
      'УСЛУГЕ',

    events:
      'МАНИФЕСТАЦИЈЕ',

    contact:
      'КОНТАКТ',

    contactTitle:
      'КОНТАКТ',

    quickLinks:
      'БРЗИ ЛИНКОВИ',

    follow:
      'ПРАТИТЕ НАС',

    address:
      'Главна 114, Рума',

    weekdays:
      'Пон–Пет: 08–20h',

    saturday:
      'Субота: 08–13h',

    footerLibrary:
      'Градска библиотека',

    footerName:
      '„Атанасије Стојковић“ Рума',

    footerRights:
      'Сва права задржана.'

  },


  en: {

    notice:
      'We are pleased to inform our users that the library has expanded its collection with audiobooks.',

    workingHours:
      'Working hours: 08:00–20:00',

    cobiss:
      'COBISS',

    cobissDescription:
      'Search the collection',

    digitalLibrary:
      'DIGITAL LIBRARY',

    digitalLibraryDescription:
      'Explore the digital collection',

    library:
      'CITY LIBRARY',

    name:
      '"Atanasije Stojković"',

    city:
      'RUMA',

    about:
      'ABOUT THE LIBRARY',

    history:
      'Library History',

    employees:
      'Employees',

    vision:
      'Vision and Mission',

    projects:
      'Projects',

    competition:
      'Competition',

    fund:
      'COLLECTION',

    recommendations:
      'Librarian Recommendations',

    publications:
      'Our Publications',

    digital:
      'Digital Library',

    search:
      'Search the Collection',

    legacies:
      'Legacies',

    departments:
      'DEPARTMENTS',

    children:
      'Children\'s Department',

    adults:
      'Adult Department',

    scientific:
      'Scientific and Professional Literature Department',

    homeland:
      'Local Heritage Collection',

    services:
      'SERVICES',

    events:
      'EVENTS',

    contact:
      'CONTACT',

    contactTitle:
      'CONTACT',

    quickLinks:
      'QUICK LINKS',

    follow:
      'FOLLOW US',

    address:
      '114 Glavna Street, Ruma',

    weekdays:
      'Mon–Fri: 08–20h',

    saturday:
      'Saturday: 08–13h',

    footerLibrary:
      'City Library',

    footerName:
      '"Atanasije Stojković" Ruma',

    footerRights:
      'All rights reserved.'

  }

};


/* =========================================================
   INNER APP
========================================================= */

function InnerApp() {

  const location = useLocation();

  const [expanded, setExpanded] =
    useState(false);

  const [language, setLanguage] =
    useState(getInitialLanguage);

  const [showImageModal, setShowImageModal] =
    useState(false);

  const [selectedImage, setSelectedImage] =
    useState({
      src: '',
      alt: '',
      title: ''
    });


  const t =
    translations[language];


  /* =======================================================
     IMAGE MODAL
  ======================================================= */

  const handleCloseImageModal = () => {

    setShowImageModal(false);

    setSelectedImage({
      src: '',
      alt: '',
      title: ''
    });

  };


  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const handleLanguageChange = (
    targetLanguage
  ) => {

    if (
      targetLanguage === language
    ) {
      return;
    }

    try {

      localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        targetLanguage
      );

    } catch {
      // ignore
    }

    setLanguage(targetLanguage);

  };


  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMenu = () => {

    setExpanded(false);

  };


  return (

    <>

      {/* =================================================
          TOP INFORMATION BAR
      ================================================= */}

      <div className="top-bar">

        <div className="top-bar-inner">

          <div className="top-notice">

            <span className="notice-dot"></span>

            <span>
              {t.notice}
            </span>

          </div>


          <div className="top-info">

            <span>
              {t.workingHours}
            </span>

            <span className="top-divider">
              |
            </span>


            <a
              href="https://youtube.com/@gradskabibliotekaruma"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>


            <a
              href="https://www.instagram.com/gradska_biblioteka_ruma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>


            <a
              href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

          </div>

        </div>

      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="main-header">


        {/* BRAND AREA */}

        <div className="brand-area">

          <Container>

            <div className="brand-content">


              <Navbar.Brand
                as={Link}
                to="/"
                onClick={closeMenu}
                className="brand-link"
              >

                <img
                  src="/logo.webp"
                  alt="Грб Градске библиотеке „Атанасије Стојковић“ Рума"
                  className="main-logo"
                  width="140"
                  height="140"
                  fetchPriority="high"
                />


                <div className="brand-text">

                  <div className="brand-small">
                    {t.library}
                  </div>


                  <h1>
                    {t.name}
                  </h1>


                  <div className="brand-location">
                    {t.city}
                  </div>

                </div>

              </Navbar.Brand>


              {/* QUICK LINKS */}

              <div className="header-links">


                <a
                  href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <span>
                    {t.cobiss}
                  </span>

                  <small>
                    {t.cobissDescription}
                  </small>

                </a>


                <a
                  href="https://www.digitalna.bibliotekaruma.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <span>
                    {t.digitalLibrary}
                  </span>

                  <small>
                    {t.digitalLibraryDescription}
                  </small>

                </a>


              </div>

            </div>

          </Container>

        </div>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div className="navigation-area">

          <Container>

            <Navbar
              expand="lg"
              expanded={expanded}
              onToggle={setExpanded}
              className="main-navbar"
            >


              <Navbar.Toggle
                aria-controls="main-navigation"
              />


              <Navbar.Collapse
                id="main-navigation"
              >


                <Nav className="main-nav">


                  {/* O BIBLIOTECI */}

                  <NavDropdown
                    title={t.about}
                    id="about-dropdown"
                  >

                    <NavDropdown.Item
                      as={Link}
                      to="/istorijat-biblioteke"
                      onClick={closeMenu}
                    >
                      {t.history}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/zaposleni-biblioteke"
                      onClick={closeMenu}
                    >
                      {t.employees}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/vizija-misija-biblioteke"
                      onClick={closeMenu}
                    >
                      {t.vision}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/projekti-biblioteke"
                      onClick={closeMenu}
                    >
                      {t.projects}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/konkurs-biblioteke"
                      onClick={closeMenu}
                    >
                      {t.competition}
                    </NavDropdown.Item>

                  </NavDropdown>


                  {/* FOND */}

                  <NavDropdown
                    title={t.fund}
                    id="fund-dropdown"
                  >

                    <NavDropdown.Item
                      as={Link}
                      to="/preporuke-bibliotekara"
                      onClick={closeMenu}
                    >
                      {t.recommendations}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/nasa-izdanja"
                      onClick={closeMenu}
                    >
                      {t.publications}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/digitalna-biblioteka"
                      onClick={closeMenu}
                    >
                      {t.digital}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/pretrazivanje-fonda"
                      onClick={closeMenu}
                    >
                      {t.search}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/legati-biblioteke"
                      onClick={closeMenu}
                    >
                      {t.legacies}
                    </NavDropdown.Item>

                  </NavDropdown>


                  {/* ODELJENJA */}

                  <NavDropdown
                    title={t.departments}
                    id="sections-dropdown"
                  >

                    <NavDropdown.Item
                      as={Link}
                      to="/odeljenje-za-decu"
                      onClick={closeMenu}
                    >
                      {t.children}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/odeljenje-za-odrasle"
                      onClick={closeMenu}
                    >
                      {t.adults}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/odeljenje-naucne-i-strucne-literature"
                      onClick={closeMenu}
                    >
                      {t.scientific}
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/zavicajna-zbirka"
                      onClick={closeMenu}
                    >
                      {t.homeland}
                    </NavDropdown.Item>

                  </NavDropdown>


                  <Nav.Link
                    as={Link}
                    to="/usluge-biblioteka-ruma"
                    onClick={closeMenu}
                  >
                    {t.services}
                  </Nav.Link>


                  <Nav.Link
                    as={Link}
                    to="/manifestacije-biblioteka-ruma"
                    onClick={closeMenu}
                  >
                    {t.events}
                  </Nav.Link>


                  <Nav.Link
                    as={Link}
                    to="/kontakt-biblioteka-ruma"
                    onClick={closeMenu}
                  >
                    {t.contact}
                  </Nav.Link>


                  {/* =================================================
                      LANGUAGE SWITCHER
                  ================================================= */}

                  <div className="navbar-language">

                    <button
                      type="button"
                      className={
                        language === 'sr'
                          ? 'language-btn active'
                          : 'language-btn'
                      }
                      onClick={() =>
                        handleLanguageChange('sr')
                      }
                      aria-label="Српски језик"
                    >
                      SR
                    </button>


                    <span className="language-separator">
                      /
                    </span>


                    <button
                      type="button"
                      className={
                        language === 'en'
                          ? 'language-btn active'
                          : 'language-btn'
                      }
                      onClick={() =>
                        handleLanguageChange('en')
                      }
                      aria-label="English language"
                    >
                      EN
                    </button>

                  </div>


                </Nav>

              </Navbar.Collapse>

            </Navbar>

          </Container>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main
        id="main-content"
        role="main"
      >

        <AnimatePresence
          mode="wait"
        >

          <Routes
            location={location}
            key={location.pathname}
          >


            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />


            <Route
              path="/kontakt-biblioteka-ruma"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />


            <Route
              path="/istorijat-biblioteke"
              element={
                <AnimatedPage>
                  <History />
                </AnimatedPage>
              }
            />


            <Route
              path="/zaposleni-biblioteke"
              element={
                <AnimatedPage>
                  <Employees />
                </AnimatedPage>
              }
            />


            <Route
              path="/usluge-biblioteka-ruma"
              element={
                <AnimatedPage>
                  <Services />
                </AnimatedPage>
              }
            />


            <Route
              path="/manifestacije-biblioteka-ruma"
              element={
                <AnimatedPage>
                  <Events />
                </AnimatedPage>
              }
            />


            <Route
              path="/konkurs-biblioteke"
              element={
                <AnimatedPage>
                  <Competition />
                </AnimatedPage>
              }
            />


            <Route
              path="/preporuke-bibliotekara"
              element={
                <AnimatedPage>
                  <Recommendations />
                </AnimatedPage>
              }
            />


            <Route
              path="/nasa-izdanja"
              element={
                <AnimatedPage>
                  <OurPublic />
                </AnimatedPage>
              }
            />


            <Route
              path="/digitalna-biblioteka"
              element={
                <AnimatedPage>
                  <DigitalLibrary />
                </AnimatedPage>
              }
            />


            <Route
              path="/pretrazivanje-fonda"
              element={
                <AnimatedPage>
                  <BooksSearche />
                </AnimatedPage>
              }
            />


            <Route
              path="/odeljenje-za-decu"
              element={
                <AnimatedPage>
                  <Kid />
                </AnimatedPage>
              }
            />


            <Route
              path="/odeljenje-za-odrasle"
              element={
                <AnimatedPage>
                  <Adult />
                </AnimatedPage>
              }
            />


            <Route
              path="/odeljenje-naucne-i-strucne-literature"
              element={
                <AnimatedPage>
                  <Scientific />
                </AnimatedPage>
              }
            />


            <Route
              path="/zavicajna-zbirka"
              element={
                <AnimatedPage>
                  <Homeland />
                </AnimatedPage>
              }
            />


            <Route
              path="/projekti-biblioteke"
              element={
                <AnimatedPage>
                  <Project />
                </AnimatedPage>
              }
            />


            <Route
              path="/legati-biblioteke"
              element={
                <AnimatedPage>
                  <Legati />
                </AnimatedPage>
              }
            />


            <Route
              path="/vizija-misija-biblioteke"
              element={
                <AnimatedPage>
                  <MisionAndVision />
                </AnimatedPage>
              }
            />


            {/* =================================================
                OLD CYRILLIC URL REDIRECTS
            ================================================= */}

            <Route
              path="/контакт-библиотека-рума"
              element={
                <Navigate
                  to="/kontakt-biblioteka-ruma"
                  replace
                />
              }
            />


            <Route
              path="/историјат-библиотеке"
              element={
                <Navigate
                  to="/istorijat-biblioteke"
                  replace
                />
              }
            />


            <Route
              path="/запослени-библиотеке"
              element={
                <Navigate
                  to="/zaposleni-biblioteke"
                  replace
                />
              }
            />


            <Route
              path="/услуге-библиотека-рума"
              element={
                <Navigate
                  to="/usluge-biblioteka-ruma"
                  replace
                />
              }
            />


            <Route
              path="/манифестације-библиотека-рума"
              element={
                <Navigate
                  to="/manifestacije-biblioteka-ruma"
                  replace
                />
              }
            />


            <Route
              path="/конкурс-библиотеке"
              element={
                <Navigate
                  to="/konkurs-biblioteke"
                  replace
                />
              }
            />


            <Route
              path="/препоруке-библиотекара"
              element={
                <Navigate
                  to="/preporuke-bibliotekara"
                  replace
                />
              }
            />


            <Route
              path="/наша-издања"
              element={
                <Navigate
                  to="/nasa-izdanja"
                  replace
                />
              }
            />


            <Route
              path="/дигитална-библиотека"
              element={
                <Navigate
                  to="/digitalna-biblioteka"
                  replace
                />
              }
            />


            <Route
              path="/претраживање-фонда"
              element={
                <Navigate
                  to="/pretrazivanje-fonda"
                  replace
                />
              }
            />


            <Route
              path="/одељење-за-децу"
              element={
                <Navigate
                  to="/odeljenje-za-decu"
                  replace
                />
              }
            />


            <Route
              path="/одељење-за-одрасле"
              element={
                <Navigate
                  to="/odeljenje-za-odrasle"
                  replace
                />
              }
            />


            <Route
              path="/одељење-научне-и-стручне-литературе"
              element={
                <Navigate
                  to="/odeljenje-naucne-i-strucne-literature"
                  replace
                />
              }
            />


            <Route
              path="/завичајна-збирка"
              element={
                <Navigate
                  to="/zavicajna-zbirka"
                  replace
                />
              }
            />


            <Route
              path="/пројекти-библиотеке"
              element={
                <Navigate
                  to="/projekti-biblioteke"
                  replace
                />
              }
            />


            <Route
              path="/легати-библиотеке"
              element={
                <Navigate
                  to="/legati-biblioteke"
                  replace
                />
              }
            />


            <Route
              path="/визија-мисија-библиотеке"
              element={
                <Navigate
                  to="/vizija-misija-biblioteke"
                  replace
                />
              }
            />


            <Route
              path="*"
              element={<NotFound />}
            />


          </Routes>

        </AnimatePresence>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="modern-footer">

        <Container>

          <div className="footer-top">


            {/* BRAND */}

            <div className="footer-brand">

              <img
                src="/logo.webp"
                alt="Градска библиотека Рума"
                width="75"
                height="75"
              />


              <div>

                <h3>
                  {t.footerLibrary}
                </h3>

                <p>
                  {t.footerName}
                </p>

              </div>

            </div>


            {/* CONTACT */}

            <div className="footer-column">

              <h4>
                {t.contactTitle}
              </h4>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Glavna+114+Ruma"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaMapMarkerAlt />

                {t.address}

              </a>


              <a
                href="mailto:gradskabibliotekaruma@gmail.com"
              >

                <FaEnvelope />
gbasruma@gmail.com

              </a>


              <div>

                <FaClock />

                {t.weekdays}

              </div>


              <div className="footer-indent">

                {t.saturday}

              </div>

            </div>


            {/* QUICK LINKS */}

            <div className="footer-column">

              <h4>
                {t.quickLinks}
              </h4>


              <Link
                to="/preporuke-bibliotekara"
              >
                {t.recommendations}
              </Link>


              <Link
                to="/digitalna-biblioteka"
              >
                {t.digital}
              </Link>


              <Link
                to="/manifestacije-biblioteka-ruma"
              >
                {t.events}
              </Link>


              <Link
                to="/kontakt-biblioteka-ruma"
              >
                {t.contact}
              </Link>

            </div>


            {/* SOCIAL */}

            <div className="footer-column">

              <h4>
                {t.follow}
              </h4>


              <a
                href="https://www.instagram.com/gradska_biblioteka_ruma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>


              <a
                href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>


              <a
                href="https://youtube.com/@gradskabibliotekaruma"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>

            </div>


          </div>


          {/* FOOTER BOTTOM */}

          <div className="footer-bottom">

            <span>
              © 2026 {t.footerLibrary} „Атанасије Стојковић“ Рума
            </span>

            <span>
              {t.footerRights}
            </span>

          </div>


        </Container>

      </footer>


      {/* =================================================
          IMAGE MODAL
      ================================================= */}

      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />

    </>

  );

}


/* =========================================================
   APP
========================================================= */

function App() {

  return (

    <HelmetProvider>

      <Router>

        <InnerApp />

      </Router>

    </HelmetProvider>

  );

}


export default App;