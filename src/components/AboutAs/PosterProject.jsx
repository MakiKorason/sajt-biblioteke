import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import AnimatedImage from "../Department/AnimatedImage";

import ormani1 from "../../images/ormani1.jpg";
import ormani2 from "../../images/ormani2.jpg";
import ormani3 from "../../images/ormani3.jpg";
import ormani4 from "../../images/ormani4.jpg";
import ormani5 from "../../images/ormani5.jpg";
import ormani6 from "../../images/ormani6.jpg";
import ormani7 from "../../images/ormani7.jpg";
import ormani8 from "../../images/ormani8.jpg";
import ormani9 from "../../images/ormani9.jpg";

import { FaArchive, FaMap, FaShieldAlt } from "react-icons/fa";
import { GiBookshelf, GiScrollUnfurled } from "react-icons/gi";

import "./Project.css";

const cabinetImages = [
  { src: ormani1, alt: "Архивски ормар за хоризонтално одлагање плаката" },
  { src: ormani2, alt: "Фиоке архивског ормара за плакате и графичку грађу" },
  { src: ormani3, alt: "Одлагање плаката у архивски ормар" },
  { src: ormani4, alt: "Превентивна заштита плаката у Завичајној збирци" },
  { src: ormani5, alt: "Архивски ормар са пет фиока" },
  { src: ormani6, alt: "Чување графичке грађе у хоризонталном положају" },
  { src: ormani7, alt: "Услови чувања плаката у Градској библиотеци Рума" },
  { src: ormani8, alt: "Депоновање плаката Завичајне збирке" },
  { src: ormani9, alt: "Нови архивски ормари за плакате" },
];

const PosterProject = () => {
  return (
    <>
      <Helmet>
        <title>
          Депоновање и превентивна заштита плаката | Библиотека Рума
        </title>

        <meta
          name="description"
          content="Пројекат „Депоновање и превентивна заштита плаката и графичке грађе“ Градске библиотеке у Руми: бољи услови чувања завичајних плаката и графичке грађе."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/projekat-zastita-plakata"
        />

        <meta
          property="og:title"
          content="Депоновање и превентивна заштита плаката и графичке грађе"
        />

        <meta
          property="og:description"
          content="Градска библиотека „Атанасије Стојковић“ у Руми унапредила је услове чувања плаката и графичке грађе Завичајне збирке."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/projekat-zastita-plakata"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Депоновање и превентивна заштита плаката и графичке грађе",
            url: "https://www.bibliotekaruma.rs/projekat-zastita-plakata",
            inLanguage: "sr-Cyrl",
            isPartOf: {
              "@type": "WebSite",
              name: 'Градска библиотека „Атанасије Стојковић“ Рума',
              url: "https://www.bibliotekaruma.rs/",
            },
          })}
        </script>
      </Helmet>

      <section className="projects-hero">
        <div className="projects-hero-decoration projects-decoration-left">
          <FaArchive />
        </div>

        <div className="projects-hero-decoration projects-decoration-right">
          <GiScrollUnfurled />
        </div>

        <Container>
          <div className="projects-hero-content">
            <div className="projects-hero-label">
              <span></span>
              ПРОЈЕКАТ БИБЛИОТЕКЕ
              <span></span>
            </div>

            <h1>
              Заштита
              <br />
              <em>плаката</em>
            </h1>

            <p>
              Депоновање и превентивна заштита плаката и графичке
              грађе Завичајне збирке.
            </p>
          </div>
        </Container>
      </section>

      <Container className="projects-page">
        <section className="projects-intro">
          <div className="projects-eyebrow">
            <span></span>
            ЗАВИЧАЈНА ЗБИРКА
          </div>

          <h2>
            Чувати сведочанства
            <br />
            <em>једног времена.</em>
          </h2>

          <p>
            Градска библиотека „Атанасије Стојковић“ у Руми успешно је
            реализовала пројекат „Депоновање и превентивна заштита
            плаката и графичке грађе“, којим су унапређени услови
            чувања драгоцене грађе наше Завичајне збирке.
          </p>
        </section>

        <section className="projects-feature">
          <Row className="align-items-center g-5">
            <Col md={6}>
              <div className="projects-image-wrapper">
                <AnimatedImage
                  src={ormani1}
                  alt="Архивски ормар за хоризонтално одлагање плаката"
                  className="projects-main-image"
                />

                <div className="projects-image-label">
                  <FaArchive />
                  <span>Архивски ормари</span>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="projects-feature-content">
                <div className="projects-number">01</div>

                <div className="projects-eyebrow">
                  <span></span>
                  ЗНАЧАЈ ГРАЂЕ
                </div>

                <h2>
                  Плакати су више
                  <em> од позива.</em>
                </h2>

                <p>
                  Плакати су много више од позива на културне догађаје —
                  они су сведочанства времена, значајних дешавања и
                  културног живота наше средине. У фонду наше библиотеке
                  чувају се више од пет деценија, а до сада је каталошки
                  обрађено преко 220 плаката, доступних за увид у
                  читаоници.
                </p>

                <div className="projects-highlight">
                  <FaMap />
                  <div>
                    <strong>ЛОКАЛНА ИСТОРИЈА И КУЛТУРА</strong>
                    <span>
                      Осетљивост ове врсте грађе и њен значај за
                      проучавање завичаја били су повод за реализацију
                      пројекта.
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="projects-section">
          <div className="projects-section-heading">
            <div className="projects-number">02</div>

            <div>
              <div className="projects-eyebrow">
                <span></span>
                ПРЕВЕНТИВНА ЗАШТИТА
              </div>

              <h2>
                Бољи услови
                <br />
                <em>чувања грађе</em>
              </h2>
            </div>
          </div>

          <div className="projects-text-block">
            <p>
              Имајући у виду осетљивост ове врсте грађе и њен значај за
              проучавање локалне историје и културе, пројектом су
              набављена два архивска ормара са по пет фиока, намењена
              хоризонталном одлагању плаката. На овај начин обезбеђени
              су бољи услови за њихово чување, смањени ризици од
              механичких оштећења, чиме су створени повољнији услови за
              даљу обраду, дигитализацију и презентацију грађе.
            </p>
          </div>

          <div className="projects-assistive-grid">
            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaArchive />
              </div>
              <h3>Два ормара</h3>
              <p>
                Набављена су два архивска ормара са по пет фиока за
                хоризонтално одлагање плаката.
              </p>
            </div>

            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaShieldAlt />
              </div>
              <h3>Мањи ризик</h3>
              <p>
                Хоризонтално чување смањује механичка оштећења и
                штити осетљиву графичку грађу.
              </p>
            </div>

            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <GiScrollUnfurled />
              </div>
              <h3>Преко 220 плаката</h3>
              <p>
                Каталошки обрађени плакати доступни су за увид у
                читаоници, уз фонд старији од пет деценија.
              </p>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="projects-section-heading">
            <div className="projects-number">03</div>

            <div>
              <div className="projects-eyebrow">
                <span></span>
                НОВИ УСЛОВИ ЧУВАЊА
              </div>

              <h2>
                Архивски ормари
                <br />
                <em>у Завичајној збирци</em>
              </h2>
            </div>
          </div>

          <div className="projects-gallery">
            {cabinetImages.map((image) => (
              <div key={image.src} className="projects-gallery-item">
                <AnimatedImage
                  src={image.src}
                  alt={image.alt}
                  className="projects-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section projects-section-alt">
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="projects-feature-content">
                <div className="projects-number">04</div>

                <div className="projects-eyebrow">
                  <span></span>
                  РЕАЛИЗАЦИЈА
                </div>

                <h2>
                  Ауторка и
                  <br />
                  <em>подршка пројекта</em>
                </h2>

                <p>
                  Ауторка и реализаторка пројекта је Драгана Ђорђевић –
                  виши дипломирани библиотекар Завичајног одељења, а
                  пројекат је реализован уз финансијску подршку
                  Покрајинског секретаријата за културу, јавно
                  информисање и односе с верским заједницама.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="projects-side-card">
                <FaArchive />
                <span>АРХИВСКИ ОРМАРИ</span>
                <strong>2</strong>
                <p>ормара са по пет фиока за хоризонтално одлагање плаката</p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="projects-final-section">
          <div className="projects-eyebrow">
            <span></span>
            КУЛТУРНО НАСЛЕЂЕ
          </div>

          <h2>
            Приче које обликују
            <br />
            <em>наш идентитет.</em>
          </h2>

          <p>
            Овим пројектом желимо да допринесемо бризи о завичајном
            културном наслеђу, чувајући од заборава приче, догађаје и
            успомене које обликују идентитет наше локалне заједнице.
          </p>

          <div className="projects-final-message">
            <GiScrollUnfurled />
            <div>
              <strong>ЗАШТИТА ПЛАКАТА</strong>
              <span>
                Бољи услови чувања, обраде, дигитализације и презентације
                графичке грађе.
              </span>
            </div>
          </div>
        </section>

        <div className="projects-decoration-bottom">
          <span></span>
          <GiBookshelf />
          <span></span>
        </div>
      </Container>
    </>
  );
};

export default PosterProject;
