import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageModal from '../ImageModal';
import digitalna2 from '../../images/digitalna2.webp';
import AnimatedCard from '../Department/AnimatedCard';
import { Helmet } from 'react-helmet-async';
import './DigitalLibrary.css';

const DigitalLibrary = () => {

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: '',
    alt: '',
    title: ''
  });

  const handleImageClick = (imageSrc, imageAlt, imageTitle) => {
    setSelectedImage({
      src: imageSrc,
      alt: imageAlt,
      title: imageTitle
    });

    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);

    setSelectedImage({
      src: '',
      alt: '',
      title: ''
    });
  };

  return (
    <>
      <Helmet>

        <title>
          Дигитална библиотека – Библиотека Рума
        </title>

        <meta
          name="description"
          content="Прегледајте дигиталну библиотеку Градске библиотеке „Атанасије Стојковић“ у Руми. Бесплатан приступ дигитализованим књигама, снимцима и публикацијама."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/digitalna-biblioteka"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Дигитална библиотека – Библиотека Рума",
              "url": "https://www.bibliotekaruma.rs/digitalna-biblioteka",
              "description": "Прегледајте дигиталну библиотеку Градске библиотеке „Атанасије Стојковић“ у Руми. Бесплатан приступ дигитализованим књигама, снимцима и публикацијама.",
              "inLanguage": "sr-RS",
              "publisher": {
                "@type": "Organization",
                "name": "Градска библиотека „Атанасије Стојковић“",
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

      <main className="digital-library-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="digital-hero">

          <div className="digital-hero-decoration digital-hero-decoration-left"></div>
          <div className="digital-hero-decoration digital-hero-decoration-right"></div>

          <div className="digital-hero-content">

            <span className="digital-hero-label">
              ДИГИТАЛНА БАШТИНА
            </span>

            <h1>
              Наш дигитални фонд
            </h1>

            <p>
              Истражите дигитализовану културну баштину
              Градске библиотеке „Атанасије Стојковић“ Рума.
            </p>

          </div>

        </section>


        {/* =========================================
            UVOD
        ========================================= */}

        <section className="digital-section">

          <Container className="digital-container">

            <div className="digital-intro">

              <span className="digital-section-label">
                О ДИГИТАЛНОЈ БИБЛИОТЕЦИ
              </span>

              <h2>
                Културна баштина доступна свима
              </h2>

              <p>
                Дигитална библиотека „Атанасије Стојковић“ Рума
                основана је 2023. године у оквиру пројекта који је
                суфинансиран од стране Министарства културе
                Републике Србије и Локалне самоуправе.
              </p>

              <p>
                Пројекат има за циљ да дигитализује и промовише
                културну баштину Руме и околине. У оквиру дигиталне
                библиотеке доступна је грађа од културног значаја
                за локалну средину.
              </p>

            </div>


            {/* =========================================
                DIGITALNA GRAĐA
            ========================================= */}

            <div className="digital-content-heading">

              <span>
                ИСТРАЖИТЕ КОЛЕКЦИЈУ
              </span>

              <h2>
                Приступите дигитализованој грађи
              </h2>

            </div>


            <Row className="justify-content-center">

              <Col xs={12} lg={10} xl={9}>

                <AnimatedCard>

                  <Card className="digital-main-card">

                    <div className="digital-image-wrapper">

                      <img
                        src={digitalna2}
                        alt="Дигитална библиотека Градске библиотеке Рума"
                        loading="lazy"
                        className="digital-library-image clickable-image"
                        onClick={() =>
                          handleImageClick(
                            digitalna2,
                            'Дигитална библиотека Градске библиотеке Рума',
                            'Дигитална библиотека'
                          )
                        }
                        title="Кликните за већу слику"
                      />

                    </div>


                    <Card.Body className="digital-card-body">

                      <div className="digital-card-content">

                        <span className="digital-card-label">
                          ДИГИТАЛНА КОЛЕКЦИЈА
                        </span>

                        <h3>
                          Истражите нашу дигиталну библиотеку
                        </h3>

                        <p>
                          Посетите платформу Дигиталне библиотеке
                          и погледајте дигитализовану грађу која
                          представља део културног наслеђа Руме
                          и њене околине.
                        </p>

                        <a
                          href="https://www.digitalna.bibliotekaruma.rs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="digital-button"
                          aria-label="Посетите дигиталну библиотеку Градске библиотеке Рума"
                        >
                          Посетите дигиталну библиотеку
                          <span aria-hidden="true">
                            →
                          </span>
                        </a>

                      </div>

                    </Card.Body>

                  </Card>

                </AnimatedCard>

              </Col>

            </Row>

          </Container>

        </section>


        {/* =========================================
            IMAGE MODAL
        ========================================= */}

        <ImageModal
          show={showImageModal}
          onHide={handleCloseImageModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
        />

      </main>
    </>
  );
};

export default DigitalLibrary;