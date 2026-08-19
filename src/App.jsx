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
   INNER APP
========================================================= */

function InnerApp() {

  const location = useLocation();

  const [expanded, setExpanded] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    src: '',
    alt: '',
    title: ''
  });


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

            <div className="notice-marquee">

              <div className="notice-marquee-content">

                <span>
                  Са задовољством обавештавамо наше кориснике да је библиотека обогатила своју понуду аудио-књигама.
                </span>

                <span aria-hidden="true">
                  Са задовољством обавештавамо наше кориснике да је библиотека обогатила своју понуду аудио-књигама.
                </span>

              </div>

            </div>

          </div>


          <div className="top-info">

            <span>
              Радно време: 08:00–20:00
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
                    ГРАДСКА БИБЛИОТЕКА
                  </div>


                  <h1>
                    „Атанасије Стојковић“
                  </h1>


                  <div className="brand-location">
                    РУМА
                  </div>

                </div>

              </Navbar.Brand>


              <div className="header-links">

                <a
                  href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <span>
                    COBISS
                  </span>

                  <small>
                    Претражите фонд
                  </small>

                </a>


                <a
                  href="https://www.digitalna.bibliotekaruma.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <span>
                    ДИГИТАЛНА БИБЛИОТЕКА
                  </span>

                  <small>
                    Истражите дигитални фонд
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
                    title="О БИБЛИОТЕЦИ"
                    id="about-dropdown"
                  >

                    <NavDropdown.Item
                      as={Link}
                      to="/istorijat-biblioteke"
                      onClick={closeMenu}
                    >
                      Историјат библиотеке
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/zaposleni-biblioteke"
                      onClick={closeMenu}
                    >
                      Запослени
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/vizija-misija-biblioteke"
                      onClick={closeMenu}
                    >
                      Визија и мисија
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/projekti-biblioteke"
                      onClick={closeMenu}
                    >
                      Пројекти
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/konkurs-biblioteke"
                      onClick={closeMenu}
                    >
                      Конкурс
                    </NavDropdown.Item>

                  </NavDropdown>


                  {/* FOND */}

                  <NavDropdown
                    title="ФОНД"
                    id="fund-dropdown"
                  >

                    <NavDropdown.Item
                      as={Link}
                      to="/preporuke-bibliotekara"
                      onClick={closeMenu}
                    >
                      Препорука библиотекара
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/nasa-izdanja"
                      onClick={closeMenu}
                    >
                      Наша издања
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/digitalna-biblioteka"
                      onClick={closeMenu}
                    >
                      Дигитална библиотека
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/pretrazivanje-fonda"
                      onClick={closeMenu}
                    >
                      Претраживање фонда
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/legati-biblioteke"
                      onClick={closeMenu}
                    >
                      Легати
                    </NavDropdown.Item>

                  </NavDropdown>


                  {/* ODELJENJA */}

                  <NavDropdown
                    title="ОДЕЉЕЊА"
                    id="sections-dropdown"
                  >

                    <NavDropdown.Item
                      as={Link}
                      to="/odeljenje-za-decu"
                      onClick={closeMenu}
                    >
                      Одељење за децу
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/odeljenje-za-odrasle"
                      onClick={closeMenu}
                    >
                      Одељење за одрасле
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/odeljenje-naucne-i-strucne-literature"
                      onClick={closeMenu}
                    >
                      Одељење научне и стручне литературе
                    </NavDropdown.Item>


                    <NavDropdown.Item
                      as={Link}
                      to="/zavicajna-zbirka"
                      onClick={closeMenu}
                    >
                      Завичајна збирка
                    </NavDropdown.Item>

                  </NavDropdown>


                  <Nav.Link
                    as={Link}
                    to="/usluge-biblioteka-ruma"
                    onClick={closeMenu}
                  >
                    УСЛУГЕ
                  </Nav.Link>


                  <Nav.Link
                    as={Link}
                    to="/manifestacije-biblioteka-ruma"
                    onClick={closeMenu}
                  >
                    МАНИФЕСТАЦИЈЕ
                  </Nav.Link>


                  <Nav.Link
                    as={Link}
                    to="/kontakt-biblioteka-ruma"
                    onClick={closeMenu}
                  >
                    КОНТАКТ
                  </Nav.Link>

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
                  to="/legati-bibliotеке"
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
                  Градска библиотека
                </h3>

                <p>
                  „Атанасије Стојковић“ Рума
                </p>

              </div>

            </div>


            {/* CONTACT */}

            <div className="footer-column">

              <h4>
                КОНТАКТ
              </h4>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Glavna+114+Ruma"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaMapMarkerAlt />

                Главна 114, Рума

              </a>


              <a
                href="mailto:gradskabibliotekaruma@gmail.com"
              >

                <FaEnvelope />

                gradskabibliotekaruma@gmail.com

              </a>


              <div>

                <FaClock />

                Пон–Пет: 08–20h

              </div>


              <div className="footer-indent">

                Субота: 08–13h

              </div>

            </div>


            {/* QUICK LINKS */}

            <div className="footer-column">

              <h4>
                БРЗИ ЛИНКОВИ
              </h4>


              <Link
                to="/preporuke-bibliotekara"
              >
                Препорука библиотекара
              </Link>


              <Link
                to="/digitalna-biblioteka"
              >
                Дигитална библиотека
              </Link>


              <Link
                to="/manifestacije-biblioteka-ruma"
              >
                Манифестације
              </Link>


              <Link
                to="/kontakt-biblioteka-ruma"
              >
                Контакт
              </Link>

            </div>


            {/* SOCIAL */}

            <div className="footer-column">

              <h4>
                ПРАТИТЕ НАС
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
              © 2026 Градска библиотека „Атанасије Стојковић“ Рума
            </span>

            <span>
              Сва права задржана.
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