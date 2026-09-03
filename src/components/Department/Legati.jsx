import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LiaBookSolid } from "react-icons/lia";
import { Helmet } from "react-helmet-async";
import { GiOpenBook } from "react-icons/gi";
import "./Legati.css";

import Legat1 from "../../images/Legat1.webp";
import Legat2 from "../../images/Legat2.webp";
import Legat3 from "../../images/Legat3.webp";

import AnimatedImage from "./AnimatedImage";

const Legati = () => {
  const pageTitle =
    "Легати – Градска библиотека „Атанасије Стојковић“ Рума";

  const pageDescription =
    "Легати Градске библиотеке „Атанасије Стојковић“ у Руми – колекције Николе Дреновца, Милутина Стојковића и Оливере Шијачки.";

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/legati-biblioteke";

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
          name: "Завичајно",
          item: "https://www.bibliotekaruma.rs/zavicajno",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Легати",
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

        <meta property="og:title" content={pageTitle} />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/Legat1.webp"
        />

        <meta property="og:locale" content="sr_RS" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />

        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/images/Legat1.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>

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
                       Легати 
                  </h1>
        
                  <p>
                 Збирке које чувају успомену на људе,
              њихово стваралаштво и време у коме су живели.

                  </p>
        
                </div>
        
              </section>

        <Container className="legati-page">

          {/* =====================================================
              UVOD
          ===================================================== */}

          <section className="legati-intro-section">

            <div className="section-heading">

              <span>
                О ЛЕГАТИМА
              </span>

              <h2>
                Културно наслеђе које остаје
              </h2>

            </div>


            <Row className="g-5 align-items-center">

              <Col lg={8}>

                <div className="legati-text">

                  <p>
                    Румска библиотека, као једна од најзначајнијих
                    културних установа у нашем граду, која за циљ
                    има очување, неговање и промовисање књиге и
                    читалаштва, у свом раду има и задатак сакупљања
                    и очувања уметничког стваралаштва значајних
                    писаца.
                  </p>

                  <p>
                    Мотив за формирање легата Градске библиотеке
                    у Руми био је обогаћивање фонда за добробит
                    корисника, као и сведочанство о времену и људима.
                  </p>

                  <p>
                    Легати су значајни јер пружају могућност за
                    исцрпнија истраживања једне области или једног
                    предмета. Они су и незаменљив документ при
                    проучавању живота и рада легатора.
                  </p>

                </div>

              </Col>


              <Col lg={4}>

                <div className="legati-intro-symbol">

                  <LiaBookSolid />

                  <span>ЗНАЊЕ</span>

                  <span>СЕЋАЊЕ</span>

                  <span>НАСЛЕЂЕ</span>

                </div>

              </Col>

            </Row>

          </section>


          {/* =====================================================
              LEgATI CARDS
          ===================================================== */}

          <section className="legati-overview-section">

            <div className="section-heading text-center">

              <span>
                ЗБИРКЕ
              </span>

              <h2>
                Легати наше библиотеке
              </h2>

              <p>
                Три посебне целине које представљају драгоцени
                део библиотечког и културног наслеђа Руме.
              </p>

            </div>


            <Row className="g-4">

              {/* NIKOLA DRENOVAC */}

              <Col lg={4} md={6}>

                <article className="legat-card">

                  <div className="legat-card-image">

                    <AnimatedImage
                      src={Legat1}
                      alt="Легат Николе Дреновца"
                    />

                  </div>

                  <div className="legat-card-content">

                    <span>
                      ЛЕГАТ I
                    </span>

                    <h3>
                      Никола Дреновац
                    </h3>

                    <p>
                      Свештеник, књижевник и преводилац,
                      један од значајних песника послератне
                      Југославије.
                    </p>

                    <a
                      href="#nikola-drenovac"
                      className="legat-card-link"
                    >
                      Сазнајте више
                      <span>→</span>
                    </a>

                  </div>

                </article>

              </Col>


              {/* MILUTIN STOJKOVIC */}

              <Col lg={4} md={6}>

                <article className="legat-card">

                  <div className="legat-card-image">

                    <AnimatedImage
                      src={Legat2}
                      alt="Легат Милутина Стојковића"
                    />

                  </div>

                  <div className="legat-card-content">

                    <span>
                      ЛЕГАТ II
                    </span>

                    <h3>
                      Милутин Стојковић
                    </h3>

                    <p>
                      Универзитетски професор, стручњак и
                      аутор великог броја стручних публикација.
                    </p>

                    <a
                      href="#milutin-stojkovic"
                      className="legat-card-link"
                    >
                      Сазнајте више
                      <span>→</span>
                    </a>

                  </div>

                </article>

              </Col>


              {/* OLIVERA SIJACKI */}

              <Col lg={4} md={6}>

                <article className="legat-card">

                  <div className="legat-card-image">

                    <AnimatedImage
                      src={Legat3}
                      alt="Спомен збирка Оливере Шијачки"
                    />

                  </div>

                  <div className="legat-card-content">

                    <span>
                      ЛЕГАТ III
                    </span>

                    <h3>
                      Оливера Шијачки
                    </h3>

                    <p>
                      Књижевница чија је спомен збирка
                      посебно значајна за књижевност за децу.
                    </p>

                    <a
                      href="#olivera-sijacki"
                      className="legat-card-link"
                    >
                      Сазнајте више
                      <span>→</span>
                    </a>

                  </div>

                </article>

              </Col>

            </Row>

          </section>


          {/* =====================================================
              NIKOLA DRENOVAC
          ===================================================== */}

          <section
            id="nikola-drenovac"
            className="legat-detail-section"
          >

            <Row className="g-0 align-items-center">

              <Col lg={5}>

                <div className="legat-detail-image">

                  <AnimatedImage
                    src={Legat1}
                    alt="Легат Николе Дреновца"
                  />

                </div>

              </Col>


              <Col lg={7}>

                <div className="legat-detail-content">

                  <span className="legat-detail-label">
                    ЛЕГАТ I
                  </span>

                  <h2>
                    Легат Николе Дреновца
                  </h2>

                  <p>
                    Никола Дреновац, свештеник, књижевник и
                    преводилац, рођен је у Руми 17. децембра
                    1907. године. У Словенији и Срему је радио
                    као свештено лице, па затим одлази у Америку.
                  </p>

                  <p>
                    По завршетку Другог светског рата враћа се
                    у Југославију где ради као уредник
                    „Слободне речи“, „Просвете“ и Литерарне
                    редакције „Радио Београда“.
                  </p>

                  <p>
                    Никола Дреновац је почетком својих тридесетих
                    година почео да пише поезију и прозу.
                    Посебно место у његовом стваралаштву заузимају
                    деца, којима је са много поштовања, љубави и
                    оригиналности даривао неке од најлепших стихова.
                  </p>

                  <p>
                    Градска библиотека „Атанасије Стојковић“
                    у склопу свог фонда поседује Легат Николе
                    Дреновца. Легат је формиран 1996. године и
                    има 287 публикација које су обрађене у складу
                    са свим библиотечким правилима и стандардима.
                  </p>

                  <p>
                    Свака обрађена публикација има свој инвентарни
                    број, сигнатуру и УДК број и статус архивског
                    примерка. Легат највећим делом садржи публикације
                    из периода од шездесетих до деведесетих година
                    прошлог века.
                  </p>

                </div>

              </Col>

            </Row>

          </section>


          {/* =====================================================
              MILUTIN STOJKOVIC
          ===================================================== */}

          <section
            id="milutin-stojkovic"
            className="legat-detail-section legat-detail-reverse"
          >

            <Row className="g-0 align-items-center">

              <Col
                lg={5}
                className="order-1 order-lg-2"
              >

                <div className="legat-detail-image">

                  <AnimatedImage
                    src={Legat2}
                    alt="Легат Милутина Стојковића"
                  />

                </div>

              </Col>


              <Col
                lg={7}
                className="order-2 order-lg-1"
              >

                <div className="legat-detail-content">

                  <span className="legat-detail-label">
                    ЛЕГАТ II
                  </span>

                  <h2>
                    Легат Милутина Стојковића
                  </h2>

                  <p>
                    Легат проф. др Хаџи Милутина Стојковића,
                    угледног универзитетског и политичког радника
                    и стручњака, спада у оне легате који су живи
                    и чији се обим фонда активношћу легатора
                    проширује.
                  </p>

                  <p>
                    Овај легат је посебан јер се у њему налази
                    преко 46 уџбеника које је легатор написао.
                    Претежно су из области статистике, медицине,
                    пољопривреде и економије.
                  </p>

                  <p>
                    Ту су и четири монографије страних држава
                    и градова, као и наслови из области религије
                    и деловања Српске православне цркве.
                  </p>

                  <p>
                    Све књиге овог легата су обрађене, а поклоњене
                    књиге, документи и други поклони могу се
                    користити само у Читаоници Градске библиотеке.
                  </p>

                  <p>
                    Легат чине и документи и материјали са
                    међународних скупова и конференција којима
                    је др Стојковић присуствовао.
                  </p>

                  <p>
                    С обзиром на дугогодишњи просветни рад проф.
                    др Стојковића, у легату се налази већи број
                    дипломских радова студената који су код њега
                    дипломирали.
                  </p>

                </div>

              </Col>

            </Row>

          </section>


          {/* =====================================================
              OLIVERA SIJACKI
          ===================================================== */}

          <section
            id="olivera-sijacki"
            className="legat-detail-section"
          >

            <Row className="g-0 align-items-center">

              <Col lg={5}>

                <div className="legat-detail-image">

                  <AnimatedImage
                    src={Legat3}
                    alt="Спомен збирка Оливере Шијачки"
                  />

                </div>

              </Col>


              <Col lg={7}>

                <div className="legat-detail-content">

                  <span className="legat-detail-label">
                    ЛЕГАТ III
                  </span>

                  <h2>
                    Легат Оливере Шијачки
                  </h2>

                  <p>
                    Спомен збирка Оливере Шијачки представља
                    физички одвојену целину од остатка фонда
                    наше библиотеке и носи назив
                    „Спомен збирка Оливере Шијачки“.
                  </p>

                  <p>
                    Оливера Шијачки је рођена у Новом Саду
                    1938. године, где је завршила Филозофски
                    факултет и где је живела и радила.
                  </p>

                  <p>
                    Удајом улази у породицу Шијачки, која води
                    порекло из Вогња, па отуда и жеља наследника
                    да се баш нашој библиотеци и граду Руми
                    подари њена спомен збирка.
                  </p>

                  <p>
                    Оливера је писала највише поезију, а највећи
                    део свог стваралаштва посветила је писању
                    за децу, зато и не чуди што је постала један
                    од заштитних знакова Змајевих дечијих игара.
                  </p>

                  <p>
                    Спомен збирка Оливере Шијачки броји
                    603 публикације, међу којима су монографске
                    и серијске публикације, као и легаторове књиге.
                  </p>

                  <p>
                    Публикације унутар збирке највећим делом
                    припадају периоду седамдесетих и осамдесетих
                    година прошлог века, мада значајан број
                    припада и првој деценији новог миленијума.
                  </p>

                  <p>
                    Значајан део ове збирке су дечије књиге,
                    од којих је 54 на српском језику, док је
                    осталих 27 на страном језику, претежно
                    македонском и руском.
                  </p>

                  <p>
                    Посебну вредност представљају посвете
                    легатору. Више од 95% публикација има
                    посвету, а међу ауторима се истичу
                    Мирослав Антић, Перо Зубац, Гроздана Олујић
                    и Драшко Ређеп.
                  </p>

                </div>

              </Col>

            </Row>

          </section>


          {/* =====================================================
              ZAVRŠNA DEKORACIJA
          ===================================================== */}

          <div
            className="legati-books-decoration"
            aria-hidden="true"
          >

            <LiaBookSolid />
            <LiaBookSolid />
            <LiaBookSolid />

          </div>

        </Container>

      </main>
    </>
  );
};

export default Legati;