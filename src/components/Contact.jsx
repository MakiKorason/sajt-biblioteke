import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaClock
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Слање поруке...');

    const formData = new FormData(event.target);
    formData.append(
      'access_key',
      '74a57f37-67a6-4369-b331-ff23b95e07e3'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult('Ваша порука је успешно послата.');
        event.target.reset();
      } else {
        setResult(
          data.message || 'Дошло је до грешке приликом слања поруке.'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      setResult(
        'Дошло је до грешке. Покушајте поново.'
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Контакт – Градска библиотека „Атанасије Стојковић“ Рума</title>

        <meta
          name="description"
          content="Контактирајте Градску библиотеку „Атанасије Стојковић“ у Руми. Погледајте адресу, телефоне, радно време, e-mail и друштвене мреже или нам пошаљите поруку."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/kontakt-biblioteka-ruma"
        />

        <meta
          property="og:title"
          content="Контакт – Градска библиотека „Атанасије Стојковић“ Рума"
        />

        <meta
          property="og:description"
          content="Контактирајте Градску библиотеку „Атанасије Стојковић“ у Руми."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/kontakt-biblioteka-ruma"
        />

        <meta
          property="og:type"
          content="website"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Library',
            '@id':
              'https://www.bibliotekaruma.rs/kontakt-biblioteka-ruma#library',
            name:
              'Градска библиотека „Атанасије Стојковић“ Рума',
            url:
              'https://www.bibliotekaruma.rs/kontakt-biblioteka-ruma',
            telephone: '+38122490047',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Главна 114',
              addressLocality: 'Рума',
              postalCode: '22400',
              addressCountry: 'RS'
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '08:00',
                closes: '20:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '13:00'
              }
            ],
            sameAs: [
              'https://www.facebook.com/bibliotekaatanasijestojkovic.ruma',
              'https://www.instagram.com/gradska_biblioteka_ruma',
              'https://youtube.com/@gradskabibliotekaruma'
            ]
          })}
        </script>
      </Helmet>

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-decoration contact-hero-decoration-left"></div>
        <div className="contact-hero-decoration contact-hero-decoration-right"></div>

        <div className="contact-hero-content">
          <span className="contact-hero-label">
            ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
          </span>

          <h1>Контактирајте нас</h1>

          <p>
            За информације, питања, предлоге или додатне услуге
            можете нам се обратити путем телефона, e-maila или
            контакт форме.
          </p>
        </div>
      </section>


      <Container className="contact-page">

        {/* ОСНОВНЕ ИНФОРМАЦИЈЕ */}

        <section className="contact-info-section">

          <div className="section-heading">
            <span>ИНФОРМАЦИЈЕ</span>
            <h2>Како можете да нас контактирате?</h2>
          </div>

          <Row className="g-4">

            {/* ADRESA */}

            <Col lg={4} md={6}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Градска+библиотека+Атанасије+Стојковић+Рума"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span className="contact-card-label">
                    АДРЕСА
                  </span>

                  <h3>Главна 114</h3>

                  <p>22400 Рума, Србија</p>
                </div>
              </a>
            </Col>


            {/* EMAIL */}

            <Col lg={4} md={6}>
              <div className="contact-info-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span className="contact-card-label">
                    E-MAIL
                  </span>

                  

                  <a href="mailto:gbasruma@gmail.com">
                    gbasruma@gmail.com
                  </a>
                </div>
              </div>
            </Col>


            {/* RADNO VREME */}

            <Col lg={4} md={12}>
              <div className="contact-info-card">
                <div className="contact-icon">
                  <FaClock />
                </div>

                <div>
                  <span className="contact-card-label">
                    РАДНО ВРЕМЕ
                  </span>

                  <h3>Понедељак – петак</h3>

                  <p>08:00 – 20:00</p>

                  <h3>Субота</h3>

                  <p>08:00 – 13:00</p>
                </div>
              </div>
            </Col>

          </Row>
        </section>


        {/* TELEFONI + FORMA */}

        <section className="contact-main-section">

          <Row className="g-5 align-items-stretch">

            {/* TELEFONI */}

            <Col lg={5}>

              <div className="phone-panel">

                <div className="phone-panel-header">

                  <span>ПОЗОВИТЕ НАС</span>

                  <h2>Телефони библиотеке</h2>

                  <p>
                    За питања у вези са чланством, фондом,
                    услугама и програмима библиотеке.
                  </p>

                </div>


                <div className="phone-list">

                  <a
                    href="tel:+38122495047"
                    className="phone-item"
                  >
                    <div className="phone-item-icon">
                      <FaPhone />
                    </div>

                    <div>
                      <span>Дечије одељење</span>
                      <strong>022/495-047</strong>
                    </div>
                  </a>


                  <a
                    href="tel:+38122490047"
                    className="phone-item"
                  >
                    <div className="phone-item-icon">
                      <FaPhone />
                    </div>

                    <div>
                      <span>Научно одељење</span>
                      <strong>022/490-047</strong>
                    </div>
                  </a>


                  <a
                    href="tel:+38122478920"
                    className="phone-item"
                  >
                    <div className="phone-item-icon">
                      <FaPhone />
                    </div>

                    <div>
                      <span>Одељење за одрасле</span>
                      <strong>022/478-920</strong>
                    </div>
                  </a>


                  <a
                    href="tel:+381222156563"
                    className="phone-item"
                  >
                    <div className="phone-item-icon">
                      <FaPhone />
                    </div>

                    <div>
                      <span>Администрација</span>
                      <strong>022/215-65-63</strong>
                    </div>
                  </a>

                </div>

              </div>

            </Col>


            {/* FORMA */}

            <Col lg={7}>

              <div className="contact-form-card">

                <div className="section-heading form-heading">

                  <span>ПИТАЈТЕ БИБЛИОТЕКАРА</span>

                  <h2>Пошаљите нам поруку</h2>

                  <p>
                    Попуните форму и одговорићемо Вам у
                    најкраћем могућем року.
                  </p>

                </div>


                <Form onSubmit={onSubmit}>

                  <Row className="g-3">

                    <Col md={6}>
                      <Form.Group controlId="contactName">

                        <Form.Label>
                          Име и презиме
                        </Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="Ваше име и презиме"
                          name="name"
                          autoComplete="name"
                          required
                        />

                      </Form.Group>
                    </Col>


                    <Col md={6}>
                      <Form.Group controlId="contactEmail">

                        <Form.Label>
                          E-mail
                        </Form.Label>

                        <Form.Control
                          type="email"
                          placeholder="vas@email.com"
                          name="email"
                          autoComplete="email"
                          required
                        />

                      </Form.Group>
                    </Col>


                    <Col xs={12}>

                      <Form.Group controlId="contactMessage">

                        <Form.Label>
                          Ваша порука
                        </Form.Label>

                        <Form.Control
                          as="textarea"
                          rows={6}
                          placeholder="Упишите Вашу поруку..."
                          name="message"
                          required
                        />

                      </Form.Group>

                    </Col>

                  </Row>


                  {/* Honeypot */}

                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />


                  <Button
                    type="submit"
                    className="contact-submit-button"
                    aria-label="Пошаљите поруку библиотекару"
                  >
                    Пошаљите поруку
                  </Button>


                  {result && (
                    <div
                      className={`contact-result ${
                        result.includes('успешно')
                          ? 'success'
                          : ''
                      }`}
                      role="status"
                      aria-live="polite"
                    >
                      {result}
                    </div>
                  )}

                </Form>

              </div>

            </Col>

          </Row>

        </section>


        {/* DRUŠTVENE MREŽE */}

        <section className="social-section">

          <div className="section-heading text-center">

            <span>ПРАТИТЕ НАС</span>

            <h2>Будите у току са дешавањима</h2>

            <p>
              Пратите најновије вести, догађаје и активности
              Градске библиотеке.
            </p>

          </div>


          <Row className="justify-content-center g-4">

            <Col lg={3} md={4} sm={6}>

              <a
                href="https://youtube.com/@gradskabibliotekaruma"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card youtube"
                aria-label="YouTube Градске библиотеке Рума"
              >
                <FaYoutube />

                <span>YouTube</span>

                <small>
                  Видео садржаји
                </small>
              </a>

            </Col>


            <Col lg={3} md={4} sm={6}>

              <a
                href="https://www.facebook.com/bibliotekaatanasijestojkovic.ruma"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card facebook"
                aria-label="Facebook Градске библиотеке Рума"
              >
                <FaFacebook />

                <span>Facebook</span>

                <small>
                  Новости и догађаји
                </small>
              </a>

            </Col>


            <Col lg={3} md={4} sm={6}>

              <a
                href="https://www.instagram.com/gradska_biblioteka_ruma"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card instagram"
                aria-label="Instagram Градске библиотеке Рума"
              >
                <FaInstagram />

                <span>Instagram</span>

                <small>
                  Фотографије и приче
                </small>
              </a>

            </Col>

          </Row>

        </section>

      </Container>


      {/* MAPA */}

      <section className="contact-map-section">

        <div className="contact-map-header">

          <span>ПОСЕТИТЕ НАС</span>

          <h2>Пронађите библиотеку</h2>

          <p>
            Главна 114, Рума
          </p>

        </div>

        <div className="contact-map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.8357378135383!2d19.815873700000015!3d45.007957499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475babf03c300113%3A0x1b25325c9cabd2d9!2z0JPRgNCw0LTRgdC60LAg0LHQuNCx0LvQuNC-0YLQtdC60LAgItCQ0YLQsNC90LDRgdC40ZjQtSDQodGC0L7RmNC60L7QstC40Zsi!5e0!3m2!1ssr!2srs!4v1727858256248!5m2!1ssr!2srs"
            title="Градска библиотека „Атанасије Стојковић“ Рума – мапа"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>

    </>
  );
};

export default Contact;