import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LiaBookSolid } from "react-icons/lia";
import { Helmet } from "react-helmet-async";
import zavicajnoFond from "../../images/zavicajnoFond.jpg";
import "./Homelend.css";
import zavicajnoKnjige from "../../images/zavicajnoKnjige.jpg"
import zavicajnoNovine from '../../images/zavicajnoNovine.jpg'
import zavicajno from "../../images/zavicajno.webp";
import AnimatedImage from "./AnimatedImage";
import { GiOpenBook } from "react-icons/gi";
const Homelend = () => {
  const pageTitle =
    "Завичајна збирка – Градска библиотека „Атанасије Стојковић“ Рума";

  const pageDescription =
    "Завичајна збирка Градске библиотеке „Атанасије Стојковић“ у Руми броји преко 3.000 библиотечких јединица и чува вредну грађу о Руми и њеном завичају.";

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/zavicajna-zbirka";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    inLanguage: "sr-Cyrl",
    isPartOf: {
      "@type": "WebSite",
      name: "Градска библиотека „Атанасије Стојковић“ Рума",
      url: "https://www.bibliotekaruma.rs/",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Почетна",
          item: "https://www.bibliotekaruma.rs/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Завичајна збирка",
          item: canonicalUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "Library",
      "@id": "https://www.bibliotekaruma.rs/#organization",
      name: "Градска библиотека „Атанасије Стојковић“ Рума",
      url: "https://www.bibliotekaruma.rs/",
      logo: "https://www.bibliotekaruma.rs/logo.webp",
      sameAs: [
        "https://www.facebook.com/BibliotekaRuma",
        "https://www.instagram.com/bibliotekaruma",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Трг Слободе 1",
        addressLocality: "Рума",
        postalCode: "22400",
        addressCountry: "RS",
      },
      telephone: "+381 22 424-501",
      email: "info@bibliotekaruma.rs",
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/zavicajno.webp"
        />
        <meta property="og:locale" content="sr_RS" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/images/zavicajno.webp"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="kid-hero">

        <div className="kid-hero-background">
          <div className="kid-hero-circle kid-circle-one"></div>
          <div className="kid-hero-circle kid-circle-two"></div>
        </div>

        <div className="kid-hero-decoration kid-hero-decoration-left">
          <LiaBookSolid />
        </div>

      
 <div className="contact-hero-book contact-book-right">
    <GiOpenBook />
  </div>
        <div className="kid-hero-content">

          <div className="kid-hero-label">
            <span className="kid-label-line"></span>

            ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            <span className="kid-label-line"></span>
          </div>

          <h1>
            Завичајна <span>збирка</span>
          </h1>

          <p>
             Место на коме се чувају књиге, документи и сећања
      која сведоче о Руми и њеном завичају.

          </p>

        </div>

      </section>
      <Container className="homelend-page">

        {/* =====================================================
            UVOD
        ===================================================== */}

        <section className="homelend-intro-section">

          <div className="section-heading">

            <span>О ЗАВИЧАЈНОЈ ЗБИРЦИ</span>

            <h2>
              Сећање сачувано у књигама и грађи
            </h2>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={7}>

              <div className="homelend-text">

                <p>
                  Градска библиотека „Атанасије Стојковић“ у Руми
                  интензивно ради на сакупљању грађе за Завичајни фонд
                  након што је донесен војвођански закон о библиотекама
                  1974. године.
                </p>

                <p>
                  Данас Завичајна збирка обухвата преко 3.000
                  библиотечких јединица, које су обрађене по свим
                  библиотечким стандардима.
                </p>

                <p>
                  Монографских публикација има 2.285, периодике 125,
                  док остатак представља некњижну грађу. Монографске
                  публикације у збирци су сложене по формату, а
                  некњижна грађа према УДК систему.
                </p>

              </div>

            </Col>


            <Col lg={5}>

              <div className="homelend-image-card">

                <AnimatedImage
                  src={zavicajnoFond}
         
                  alt="Завичајна збирка Градске библиотеке „Атанасије Стојковић“ у Руми"
                />

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            SADRŽAJ ZBIRKE
        ===================================================== */}

        <section className="homelend-collection-section">

          <div className="section-heading">

            <span>БОГАТСТВО ЗБИРКЕ</span>

            <h2>
              Грађа која сведочи о завичају
            </h2>
            <br/> <br/>
            <Row>
            <Col md={6}>
               <div className="homelend-image-card">
            <AnimatedImage
                  src={zavicajnoNovine}
                  alt="Завичајна збирка Градске библиотеке „Атанасије Стојковић“ у Руми"
                /> 
                <br/></div></Col>
                            <Col md={6}>
               <div className="homelend-image-card">
            <AnimatedImage
                  src={zavicajnoKnjige}
                  alt="Завичајна збирка Градске библиотеке „Атанасије Стојковић“ у Руми"
                /> 
                <br/></div></Col></Row>

                <br/></div>
          


          <Row className="g-4">

            <Col lg={4} md={6}>

              <div className="homelend-info-card">

                <div className="homelend-card-icon">
                  <LiaBookSolid />
                </div>

                <h3>
                  Монографске публикације
                </h3>

                <p>
                  Монографске публикације највећим делом обухватају
                  белетристику, монографије, самоуправне акте предузећа
                  и установа, као и научне радове у облику сепарата
                  или зборника који су добијени од аутора на поклон.
                </p>

              </div>

            </Col>


            <Col lg={4} md={6}>

              <div className="homelend-info-card">

                <div className="homelend-card-icon">
                  <LiaBookSolid />
                </div>

                <h3>
                  Периодика
                </h3>

                <p>
                  Серијске публикације обухватају новине и часописе
                  који представљају значајан део грађе о животу,
                  култури и историји завичаја.
                </p>

              </div>

            </Col>


            <Col lg={4} md={12}>

              <div className="homelend-info-card">

                <div className="homelend-card-icon">
                  <LiaBookSolid />
                </div>

                <h3>
                  Некњижна грађа
                </h3>

                <p>
                  Некњижна грађа обухвата плакате, разгледнице,
                  позивнице и остали ситан штампани материјал,
                  који представљају драгоцене трагове прошлости.
                </p>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            KORIŠĆENJE ZBIRKE
        ===================================================== */}

        <section className="homelend-use-section">

          <Row className="g-5 align-items-center">

            <Col lg={7}>

              <div className="homelend-text">

                <span className="homelend-small-label">
                  КОРИШЋЕЊЕ ЗБИРКЕ
                </span>

                <h2>
                  Грађа доступна у Читаоници
                </h2>

                <p>
                  Публикације из фонда Завичајне збирке не износе
                  се ван библиотеке, већ се користе искључиво у
                  Читаоници.
                </p>

                <p>
                  У већини случајева корисницима се дају дупликати
                  или фотокопије, како би се истовремено омогућило
                  коришћење вредне грађе и њено дугорочно очување.
                </p>

              </div>

            </Col>


            <Col lg={5}>

              <div className="homelend-highlight-card">

                <div className="homelend-highlight-icon">
                  <LiaBookSolid />
                </div>

                <span>
                  ЗАВИЧАЈНА БАШТИНА
                </span>

                <strong>
                  Преко 3.000
                </strong>

                <p>
                  библиотечких јединица
                </p>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            NAJZNAČAJNIJA PUBLIKACIJA
        ===================================================== */}

        <section className="homelend-treasure-section">

          <div className="homelend-treasure-card">

            <div className="homelend-treasure-decoration"></div>

            <div className="homelend-treasure-content">

              <span className="homelend-small-label">
                ПОСЕБНА ВРЕДНОСТ ЗБИРКЕ
              </span>

              <h2>
                „Фисика, простим језиком списана за род славено-сербски“ Атанасија Стојковића
              </h2>
            <Col md={12}>
               <div className="homelend-image-card">
            <AnimatedImage
                  src={zavicajno}
                  alt="Завичајна збирка Градске библиотеке „Атанасије Стојковић“ у Руми"
                /> 
                <br/></div></Col>
              <p>
                Најзначајнија публикација у Завичајној збирци је
                „Фисика, простим језиком списана за род славено-сербски“ Атанасија Стојковића, штампана у три
                тома у Будиму од 1801. до 1803. године.
              </p>

              <div
                className="homelend-books-decoration"
                aria-hidden="true"
              >
                <LiaBookSolid />
                <LiaBookSolid />
                <LiaBookSolid />
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ZAVRŠNA PORUKA
        ===================================================== */}

        <section className="homelend-final-section">

          <div className="section-heading">

            <span>ЗАВИЧАЈНА БАШТИНА</span>

            <h2>
              Чувамо оно што сведочи о нама
            </h2>

          </div>

          <p className="homelend-final-text">
            Завичајна збирка представља драгоцен део библиотечког
            фонда и значајан извор за упознавање историје, културе
            и живота Руме и њеног окружења. Њено очување омогућава
            будућим генерацијама да кроз сачувану грађу упознају
            прошлост свог завичаја.
          </p>


          <div
            className="homelend-books-decoration"
            aria-hidden="true"
          >
            <LiaBookSolid />
            <LiaBookSolid />
            <LiaBookSolid />
          </div>

        </section>

      </Container>
    </>
  );
};

export default Homelend;