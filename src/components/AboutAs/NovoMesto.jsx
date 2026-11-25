
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import AnimatedImage from "../Department/AnimatedImage";
import vitrina1 from '../../images/vitrina1.jpg';
import vitrina2 from '../../images/vitrina2.jpg';
import vitrina3 from '../../images/vitrina3.jpg';
import {
  FaArchive,
  FaShieldAlt,
  FaBookOpen,
  FaEye,
} from "react-icons/fa";

import { GiBookshelf, GiScrollUnfurled } from "react-icons/gi";

import "./Project.css";
const heritageImages = [
  {
    src: vitrina1,
    alt: "Изложбене витрине Завичајне збирке Градске библиотеке у Руми",
  },
  {
    src: vitrina2,
    alt: "Стара и ретка библиотечка грађа изложена у витринама",
  },
  {
    src: vitrina3,
    alt: "Издања дела Атанасија Стојковића",
  }
];

<div className="projects-gallery">
  {heritageImages.map((image, index) => (
    <div
      className="projects-gallery-item"
      key={index}
      style={{
        height: "auto",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#f3f2ee",
        padding: "50px",
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "600px",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  ))}
</div>

const NovoMestoProject = () => {
  return (
    <>
      <Helmet>
        <title>
          Ново место за старе приче | Библиотека Рума
        </title>

        <meta
          name="description"
          content="Унапређење услова заштите и презентације старе и ретке грађе Завичајне збирке Градске библиотеке „Атанасије Стојковић“ у Руми набавком изложбених витрина."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/novo-mesto-za-stare-price"
        />

        <meta
          property="og:title"
          content="Ново место за старе приче – унапређена презентација завичајног блага"
        />

        <meta
          property="og:description"
          content="Набавком изложбених витрина унапређени су услови заштите и представљања старе и ретке грађе Завичајне збирке."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/novo-mesto-za-stare-price"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ново место за старе приче – унапређена презентација завичајног блага",
            url: "https://www.bibliotekaruma.rs/novo-mesto-za-stare-price",
            inLanguage: "sr-Cyrl",
            isPartOf: {
              "@type": "WebSite",
              name: 'Градска библиотека „Атанасије Стојковић“ Рума',
              url: "https://www.bibliotekaruma.rs/",
            },
          })}
        </script>
      </Helmet>

      {/* HERO */}

      <section className="projects-hero">
        <div className="projects-hero-decoration projects-decoration-left">
          <FaBookOpen />
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
              Ново место за
              <br />
              <em>старе приче</em>
            </h1>

            <p>
           Унапређење услова заштите и презентације старе и ретке грађе Завичајне збирке ГБ „Атанасије Стојковић“ у Руми набавком изложбених витрина.
            </p>
          </div>
        </Container>
      </section>

      <Container className="projects-page">

        {/* UVOD */}

        <section className="projects-intro">
          <div className="projects-eyebrow">
            <span></span>
            ЗАВИЧАЈНА ЗБИРКА
          </div>

          <h2>
            Сачувати благо
            <br />
            <em>за будуће генерације.</em>
          </h2>

          <p>
            Градска библиотека „Атанасије Стојковић“ у Руми
            реализовала је пројекат „Унапређење услова заштите
            и презентације старе и ретке грађе Завичајне збирке
            ГБ „Атанасије Стојковић“ у Руми набавком изложбених
            витрина“.
          </p>
          
         <div className="projects-gallery">
  {heritageImages.map((image, index) => (
    <div
      key={index}
      className="projects-gallery-item"
      style={{
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f2ee",
        padding: "10px",
      }}
    >
      <AnimatedImage
        src={image.src}
        alt={image.alt}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "420px",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  ))}
</div>
        </section>

        {/* ZNACAJ PROJEKTA */}

        <section className="projects-feature">
          <Row className="align-items-center g-5">
            <Col md={5}>
              <div className="projects-image-wrapper">
                <div className="projects-image-label">
                  <FaArchive />
                  <span>Завичајно благо</span>
                </div>

                <div className="projects-side-card">
                  <FaBookOpen />
                  <span>ЗАВИЧАЈНА ЗБИРКА</span>
                  <strong>1801.</strong>
                  <p>
                    Година једног од оригиналних издања
                    дела „Фисика“ Атанасија Стојковића
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="projects-feature-content">
                <div className="projects-number">01</div>

                <div className="projects-eyebrow">
                  <span></span>
                  ЗНАЧАЈ ПРОЈЕКТА
                </div>

                <h2>
                  Наслеђе које
                  <em> траје.</em>
                </h2>

                <p>
                  Значај пројекта је у томе што су створени бољи
                  услови за чување, заштиту и представљање
                  драгоцене старе и ретке грађе. На тај начин
                  културно наслеђе наше средине постаје
                  доступније посетиоцима, уз истовремено
                  очување за будуће генерације.
                </p>

                <div className="projects-highlight">
                  <FaShieldAlt />
                  <div>
                    <strong>ЗАШТИТА БИБЛИОТЕЧКЕ БАШТИНЕ</strong>
                    <span>
                      Унапређење услова за чување и презентацију
                      старе и ретке библиотечке грађе.
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* ATANASIJE STOJKOVIC */}

        <section className="projects-section">
          <div className="projects-section-heading">
            <div className="projects-number">02</div>

            <div>
              <div className="projects-eyebrow">
                <span></span>
                АТАНАСИЈЕ СТОЈКОВИЋ
              </div>

              <h2>
                Књиге које
                <br />
                <em>говоре вековима.</em>
              </h2>
            </div>
          </div>

          <div className="projects-text-block">
            <p>
              Грађа одабрана за излагање представља значајан
              део културног, књижевног и научног наслеђа
              Атанасија Стојковића, једне од најзначајнијих
              личности из историје Руме и српске културе.
              Посебно место заузимају три оригинална издања
              његовог дела „Фисика“, која се чувају у фонду
              Завичајне збирке.
            </p>
          </div>

          <div className="projects-assistive-grid">
            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaBookOpen />
              </div>
              <h3>1801. година</h3>
              <p>
                Прво оригинално издање дела „Фисика“ Атанасија
                Стојковића.
              </p>
            </div>

            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaBookOpen />
              </div>
              <h3>1802. година</h3>
              <p>
                Друго оригинално издање дела „Фисика“ Атанасија
                Стојковића.
              </p>
            </div>

            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaBookOpen />
              </div>
              <h3>1803. година</h3>
              <p>
                Треће оригинално издање дела „Фисика“ Атанасија
                Стојковића.
              </p>
            </div>
          </div>
        </section>

        {/* IZLOZBENE VITRINE */}

        <section className="projects-section">
          <div className="projects-section-heading">
            <div className="projects-number">03</div>

            <div>
              <div className="projects-eyebrow">
                <span></span>
                ИЗЛОЖБЕНЕ ВИТРИНЕ
              </div>

              <h2>
                Старе књиге
                <br />
                <em>у новом руху.</em>
              </h2>
            </div>
          </div>

          <div className="projects-text-block">
            <p>
              Остале изложене публикације представљају
              реиздања и фототипска издања дела Атанасија
              Стојковића, која је објавила Градска библиотека
              „Атанасије Стојковић“ са циљем да се његово
              стваралаштво сачува, поново учини доступним
              јавности и приближи савременим генерацијама.
            </p>

            <p>
              Избором ове грађе повезују се заштита оригиналних
              старих и ретких књига, афирмација завичајног
              културног наслеђа и промоција стваралаштва
              значајне локалне личности.
            </p>
          </div>

        </section>

        {/* ZNACAJ ZA ZAJEDNICU */}

        <section className="projects-section projects-section-alt">
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <div className="projects-feature-content">
                <div className="projects-number">04</div>

                <div className="projects-eyebrow">
                  <span></span>
                  КУЛТУРНИ ИДЕНТИТЕТ
                </div>

                <h2>
                  Завичајно благо
                  <br />
                  <em>доступно свима.</em>
                </h2>

                <p>
                  На овај начин изложба доприноси очувању
                  културног идентитета Руме и подизању свести
                  о значају заштите библиотечке баштине.
                  Представљањем вредне грађе посетиоцима
                  омогућава се непосреднији сусрет са
                  културним, књижевним и научним наслеђем
                  нашег завичаја.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <AnimatedImage
                src={vitrina3}
                alt="Project Image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "420px",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Col>
          </Row>
        </section>

        {/* REALIZACIJA */}

     

          <div className="projects-assistive-grid">
            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaBookOpen />
              </div>
              <h3>Драгана Ђорђевић</h3>
              <p>
                Ауторка, реализаторка и руководилац пројекта је Драгана Ђорђевић, виши дипломиран библиотека Завичајног одељења
              </p>
            </div>

            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaEye />
              </div>
              <h3>Марина Крањчевић</h3>
              <p>
            Фотографије и визуелни садржај: Марина Крањчевић, библиотекар Одељења за одрасле. 
              </p>
            </div>

            <div className="projects-assistive-card">
              <div className="projects-assistive-icon">
                <FaShieldAlt />
              </div>
              <h3>Подршка пројекту</h3>
              <p>
                Покрајински секретаријат за културу, јавно
                информисање и односе с верским заједницама.
              </p>
            </div>
          </div>
  

      
        <div className="projects-decoration-bottom">
          <span></span>
          <GiBookshelf />
          <span></span>
        </div>

      </Container>
    </>
  );
};

export default NovoMestoProject;
