import React from 'react';
import { Table, Container } from 'react-bootstrap';
import './Services.css';
import { IoBookSharp } from "react-icons/io5";
import AnimatedCard from './Department/AnimatedCard';
import AnimatedContainer from '../AnimatedContainer';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Услуге – Градска библиотека Атанасије Стојковић Рума</title>

        <meta
          name="description"
          content="Погледајте услуге Градске библиотеке Атанасије Стојковић у Руми: чланарина, позајмица књига, међубиблиотечка позајмица и друге услуге."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/usluge-biblioteka-ruma"
        />

        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.bibliotekaruma.rs/usluge-biblioteka-ruma"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Library",
            "name": "Градска библиотека „Атанасије Стојковић“ Рума",
            "url": "https://www.bibliotekaruma.rs/usluge-biblioteka-ruma",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Главна 114",
              "addressLocality": "Рума",
              "postalCode": "22400",
              "addressCountry": "RS"
            },
            "telephone": "022/490-047",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Услуге библиотеке",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Чланарина за средњошколце, студенте, запослене и незапослене"
                  },
                  "price": "700",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Чланарина за пензионере"
                  },
                  "price": "300",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Дупликат чланске карте"
                  },
                  "price": "50",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Пенал (по дану кашњења)"
                  },
                  "price": "5",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Накнада за изгубљену грађу"
                  },
                  "price": "600",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Накнада за оштећену грађу"
                  },
                  "price": "400",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Трошкови опомене"
                  },
                  "price": "40",
                  "priceCurrency": "RSD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Међубиблиотечка позајмица"
                  },
                  "price": "700",
                  "priceCurrency": "RSD"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <main className="services-page">

        {/* HERO */}
        <section className="services-hero">

          <div className="services-hero-decoration services-hero-decoration-left" />
          <div className="services-hero-decoration services-hero-decoration-right" />

          <div className="services-hero-content">

            <span className="services-hero-label">
              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
            </span>

            <h1>Услуге библиотеке</h1>

            <p>
              Све што вам је потребно за лакше коришћење библиотечког фонда,
              приступ информацијама и коришћење услуга наше библиотеке.
            </p>

          </div>

        </section>


        <Container className="services-container">

          {/* PRAVILA */}
          <section className="services-section">

            <div className="services-section-heading">

              <span>КОРИШЋЕЊЕ БИБЛИОТЕКЕ</span>

              <h2>Правила за кориснике</h2>

              <p>
                Основне информације о коришћењу библиотечке грађе,
                роковима позајмице и обавезама корисника.
              </p>

            </div>


            <AnimatedContainer className="services-main-card">

              <div className="services-icon">
                <IoBookSharp />
              </div>

              <div className="services-tabs">

                <ul className="nav nav-tabs" role="tablist">

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#home"
                    >
                      ПРАВИЛА
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#menu1"
                    >
                      ПОЗАЈМИЦА
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#menu2"
                    >
                      ОСТАЛО
                    </a>
                  </li>

                </ul>


                <div className="tab-content">

                  <div id="home" className="tab-pane active">
                    <p>
                      Правилник о раду са корисницима и начину коришћења
                      библиотечке грађе.
                    </p>
                  </div>


                  <div id="menu1" className="tab-pane fade">

                    <p>
                      <strong>1.</strong> Публикације Одељења за одрасле,
                      Одељења за децу и Одељења научне и стручне литературе
                      могу се задржати 14 дана уз могућност продужетка.
                    </p>

                    <p>
                      <strong>2.</strong> Публикације Завичајног одељења,
                      Референсне збирке и легати користе се у Читаоници
                      Градске библиотеке.
                    </p>

                    <p>
                      <strong>3.</strong> Чланарина се плаћа на годишњем нивоу,
                      док је за децу до завршетка основне школе чланарина бесплатна.
                    </p>

                  </div>


                  <div id="menu2" className="tab-pane fade">

                    <p>
                      <strong>4.</strong> На једну чланску карту могуће је
                      позајмити највише 3 књиге.
                    </p>

                    <p>
                      <strong>5.</strong> Читалац који је изгубио или оштетио
                      књигу треба да купи књигу истог наслова или да плати
                      накнаду за изгубљену или оштећену грађу.
                    </p>

                    <p>
                      <strong>6.</strong> Сви корисници треба да враћају књиге
                      на време. Сваки дан кашњења се наплаћује 5 динара по књизи.
                    </p>

                    <p>
                      <strong>7.</strong> Корисницима резервишемо грађу која
                      тренутно није доступна у фонду.
                    </p>

                  </div>

                </div>

              </div>

            </AnimatedContainer>

          </section>


          {/* MEĐUBIBLIOTEČKA */}
          <section className="services-section">

            <div className="services-section-heading">

              <span>ПОСЕБНА УСЛУГА</span>

              <h2>Међубиблиотечка позајмица</h2>

              <p>
                Прибављање библиотечке грађе коју наша библиотека
                тренутно нема у свом фонду.
              </p>

            </div>


            <AnimatedCard className="interlibrary-card">

              <div className="interlibrary-intro">

                <p>
                  Међубиблиотечка позајмица је једна од услуга коју
                  пружа наша установа. Ова услуга подразумева прибављање
                  библиотечке грађе коју Градска библиотека не поседује
                  у свом фонду, а потребна је корисницима.
                </p>

                <p>
                  Услугу међубиблиотечке позајмице могу користити сви
                  чланови наше библиотеке. Овом услугом могу се поручити
                  монографске публикације, као и периодика (чланци).
                </p>

                <p>
                  Књиге се позајмљују на период од 15 дана, а услуга
                  се наплаћује према утврђеном Ценовнику Градске библиотеке
                  „Атанасије Стојковић“.
                </p>

              </div>


              <div className="instruction-grid">

                <div className="instruction-box">

                  <span className="instruction-number">01</span>

                  <h3>Упутство за кориснике</h3>

                  <ol>

                    <li>
                      Проверите да ли потребну књигу Градска библиотека
                      поседује у свом фонду.
                    </li>

                    <li>
                      Уколико је не поседује, извршите претрагу Централног
                      електронског каталога COBISS.SR.
                    </li>

                    <li>
                      Попуните Захтев за међубиблиотечку позајмицу.
                      Образац можете преузети онлајн.
                    </li>

                    <li>
                      Захтев попуните и пошаљите на:
                      <a href="mailto:gradskabibliotekaruma@gmail.com">
                        gradskabibliotekaruma@gmail.com
                      </a>
                    </li>

                    <li>
                      О приспећу књиге корисник ће бити благовремено
                      обавештен телефонским путем или електронском поштом.
                    </li>

                  </ol>

                  <a
                    href="/Obrazac za korisnike.doc"
                    download
                    className="services-download"
                  >
                    Преузмите образац
                  </a>

                </div>


                <div className="instruction-box">

                  <span className="instruction-number">02</span>

                  <h3>Упутство за библиотеке</h3>

                  <p>
                    Библиотеке које желе да остваре услугу међубиблиотечке
                    позајмице од Градске библиотеке „Атанасије Стојковић“
                    потребно је да попуне образац и пошаљу га на:
                  </p>

                  <a
                    href="mailto:gradskabibliotekaruma@gmail.com"
                    className="instruction-email"
                  >
                    gradskabibliotekaruma@gmail.com
                  </a>

                  <a
                    href="/Obrazac za biblioteke.doc"
                    download
                    className="services-download"
                  >
                    Преузмите образац
                  </a>

                </div>

              </div>

            </AnimatedCard>

          </section>


          {/* CENOVNIK */}
          <section className="services-section price-section">

            <div className="services-section-heading">

              <span>ЦЕНОВНИК</span>

              <h2>Услуге и накнаде</h2>

              <p>
                Преглед актуелних цена библиотечких услуга.
              </p>

            </div>


            <div className="price-card">

              <div className="price-card-header">

                <h3>Ценовник библиотеке</h3>

                <span>РСД</span>

              </div>


              <div className="table-responsive">

                <Table className="modern-price-table">

                  <thead>

                    <tr>
                      <th>Услуга</th>
                      <th>Цена</th>
                    </tr>

                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        Чланарина за средњошколце, студенте,
                        запослене и незапослене
                      </td>
                      <td>700,00</td>
                    </tr>

                    <tr>
                      <td>Чланарина за пензионере</td>
                      <td>300,00</td>
                    </tr>

                    <tr>
                      <td>Дупликат чланске карте</td>
                      <td>50,00</td>
                    </tr>

                    <tr>
                      <td>Пенал (по дану кашњења)</td>
                      <td>5,00</td>
                    </tr>

                    <tr>
                      <td>Накнада за изгубљену грађу</td>
                      <td>600,00</td>
                    </tr>

                    <tr>
                      <td>Накнада за оштећену грађу</td>
                      <td>400,00</td>
                    </tr>

                    <tr>
                      <td>Трошкови опомене</td>
                      <td>40,00</td>
                    </tr>

                    <tr>
                      <td>Међубиблиотечка позајмица</td>
                      <td>700,00</td>
                    </tr>

                  </tbody>

                </Table>

              </div>

            </div>

          </section>

        </Container>

      </main>
    </>
  );
};

export default Services;