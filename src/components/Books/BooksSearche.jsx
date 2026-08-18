import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ImageModal from "../ImageModal";
import cobbis from "../../images/cobbis.webp";
import "./BooksSearche.css";
import AnimatedCard from "../Department/AnimatedCard";
import { Helmet } from "react-helmet-async";

const BooksSearche = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
    title: "",
  });

  const handleImageClick = (imageSrc, imageAlt, imageTitle) => {
    setSelectedImage({
      src: imageSrc,
      alt: imageAlt,
      title: imageTitle,
    });

    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);

    setSelectedImage({
      src: "",
      alt: "",
      title: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Претраживање фонда – Библиотека Рума
        </title>

        <meta
          name="description"
          content="Претражите библиотечки фонд преко COBISS+ и MCOBISS апликације. Прегледајте књиге, ауторе и доступност у Градској библиотеци 'Атанасије Стојковић' Рума."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/pretrazivanje-fonda"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Претраживање фонда – Библиотека Рума",
              "url": "https://www.bibliotekaruma.rs/pretrazivanje-fonda",
              "description": "Претражите библиотечки фонд преко COBISS+ и MCOBISS апликације. Прегледајте књиге, ауторе и доступност у Градској библиотеци 'Атанасије Стојковић' Рума.",
              "inLanguage": "sr-RS",
              "publisher": {
                "@type": "Organization",
                "name": "Градска библиотека 'Атанасије Стојковић'",
                "url": "https://www.bibliotekaruma.rs/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.bibliotekaruma.rs/logo.webp"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <main className="books-search-page">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="books-search-hero">

          <div className="books-search-hero-content">

            <span className="books-search-hero-label">
              БИБЛИОТЕЧКИ ФОНД
            </span>

            <h1>
              Претраживање фонда
            </h1>

            <p>
              Пронађите књиге, ауторе и друге публикације
              у фонду Градске библиотеке „Атанасије Стојковић“
              у Руми.
            </p>

          </div>

          <div className="books-search-decoration books-search-decoration-left"></div>
          <div className="books-search-decoration books-search-decoration-right"></div>

        </section>


        {/* =====================================================
            GLAVNI SADRŽAJ
            ===================================================== */}

        <Container className="container-library">

          <Row>

            <Col xs={12}>

              {/* =================================================
                  ŠTA JE COBISS
                  ================================================= */}

              <section className="books-section">

                <div className="books-section-heading">

                  <span>
                    БИБЛИОТЕЧКИ СИСТЕМ
                  </span>

                  <h2>
                    Шта је COBISS?
                  </h2>

                </div>

                <p className="container-text intro-text">
                  У савременом друштву модерне библиотеке као
                  важни центри знања захтевају и савремену
                  информациону технологију, као и повезивање у
                  заједнички библиотечко-информациони систем
                  као што је COBISS (Co-operative Online
                  Bibliographic System and Services).
                </p>


                {/* =================================================
                    SLIKA
                    ================================================= */}

                <AnimatedCard>

                  <img
                    src={cobbis}
                    alt="Претрага библиотечког фонда преко COBISS система"
                    loading="lazy"
                    className="cobiss-image clickable-image"
                    onClick={() =>
                      handleImageClick(
                        cobbis,
                        "Претрага библиотечког фонда преко COBISS система",
                        "COBISS"
                      )
                    }
                    title="Кликните за већу слику"
                  />

                </AnimatedCard>

              </section>


              {/* =================================================
                  COBISS+
                  ================================================= */}

              <AnimatedCard className="cobiss-card">

                <Card.Body>

                  <div className="card-label">
                    COBISS+
                  </div>

                  <h2 className="card-title">
                    COBISS+
                  </h2>

                  <p className="container-text">

                    <a
                      href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Претражите фонд наше библиотеке
                    </a>

                  </p>

                  <ul className="cobiss-list">

                    <li>
                      Веб апликација која библиотекарима и
                      корисницима омогућава приступ претраживању
                      различитих база података. Апликација је
                      бесплатна за све кориснике.
                    </li>

                    <li>
                      Апликација је намењена свим корисницима
                      који траже релевантне информације или
                      расположиву грађу у библиотекама.
                    </li>

                    <li>
                      <strong>Моја библиотека</strong> је кориснички
                      налог унутар библиотеке за појединачног
                      члана и омогућава коришћење различитих
                      библиотечких услуга путем интернета.
                    </li>

                  </ul>

                </Card.Body>

              </AnimatedCard>


              {/* =================================================
                  MCOBISS
                  ================================================= */}

              <AnimatedCard className="cobiss-card">

                <Card.Body>

                  <div className="card-label">
                    МОБИЛНА АПЛИКАЦИЈА
                  </div>

                  <h2 className="card-title">
                    MCOBISS
                  </h2>

                  <ul className="cobiss-list">

                    <li>
                      Корисницима је на располагању прилагођена
                      верзија MCOBISS апликације за мобилне
                      уређаје.
                    </li>

                    <li>
                      Апликација је бесплатна и може се преузети
                      преко Google Play продавнице.
                    </li>

                  </ul>

                  <a
                    href="https://play.google.com/store/apps/details?id=si.izum.mcobiss&hl=sr&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cobiss-button"
                  >
                    Преузмите MCOBISS
                  </a>

                </Card.Body>

              </AnimatedCard>


              {/* =================================================
                  UPUTSTVO
                  ================================================= */}

              <section className="instruction-section">

                <div className="instruction-card">

                  <div className="card-label">
                    КОРАК ПО КОРАК
                  </div>

                  <h2 className="instruction-title">
                    Упутство за коришћење COBISS-а
                  </h2>

                  <p className="container-text">
                    Претраживање библиотечког фонда је једноставно.
                    Пратите неколико основних корака како бисте
                    пронашли жељену публикацију и проверили њену
                    доступност.
                  </p>

                  <ol className="instruction-list">

                    <li>
                      Посетите платформу{" "}
                      <a
                        href="https://sr.cobiss.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        COBISS
                      </a>.
                    </li>

                    <li>
                      Унесите назив књиге, име аутора или кључне
                      речи у поље за претрагу.
                    </li>

                    <li>
                      Изаберите библиотеку из падајућег менија
                      како бисте видели доступност публикације.
                    </li>

                    <li>
                      Кликните на жељену књигу за више детаља
                      или је резервишите уколико је доступна
                      за резервацију.
                    </li>

                  </ol>

                </div>

              </section>

            </Col>

          </Row>

        </Container>

      </main>


      {/* =====================================================
          IMAGE MODAL
          ===================================================== */}

      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />

    </>
  );
};

export default BooksSearche;