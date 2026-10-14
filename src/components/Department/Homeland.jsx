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
    "Завичајна збирка – Библиотека Рума";

  const pageDescription =
    "Завичајна збирка Градске библиотеке „Атанасије Стојковић“ у Руми чува преко 3.000 јединица о Руми и завичају.";

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
                 У савременом библиотекарству, веома важан и готово неизоставан аспект рада
представља и проучавање завичаја кроз призму завичајних фондова. Сам термин завичајни
фонд обухвата широк спектар значења. То је део библиотечког фонда који има задатак да
прикупља, стручно обради и сачува најразличитије библиотечке јединице са циљем да у
себи обједини територијалне, историјске, етнолошке, друштвене, културне и многе друге
сегменте који се тичу одређеног географског поднебља.
                </p>

                <p>
                Завичајне збирке, по дефиницији, имају задатак да прикупе, стручно обраде и
сачувају сву библиотечку грађу која за тему има одређен територијални оквир (град,
општину, округ), као и дела аутора који су рођени на том простору или су једним делом
свог живота ту живели и стварали, али и целокупну издавачку и штампарску делатност на
том подручју.
                </p>

                <p>
                 Градска библиотека „Атанасије Стојковић“ у Руми интензивно ради на сакупљању
грађе за завичајни фонд након што је донесен војвођански закон о библиотекама 1974.
године. Овај фонд је обухватао различите библиотечке јединице као што су књиге, разне
брошуре, периодичне публикације и ситан штампани материјал. „Према подацима из 1984.
године завичајна збирка је имала 288 јединица књига и брошура, а 1992. године 523. Са
минулим годинама овај број је растао, чинећи завичајни фонд све богатијим, садржајнијим
и интересантнијим корисницима.

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
                Наша установа је од 2007. године
пуноправна чланица COBISS.SR и сва грађа у библиотеци се уноси у овај систем.  Монографске публикације највећим делом обухватају издања поезије и прозе
румских писаца, монографије, дела тематски везана за Други светски рат, самоуправни
акти предузећа и установа, научни радови у облику сепарата или зборника који су добијени
од аутора на поклон, затим, библиографски радови, листови и билтени предузећа и школа
из нашег града. Поред обраде, чувања и давања на коришћење библиотечке грађе, задатак
завичајних збирки је и популаризовање овог дела фонда. У ту сврху организују се многе трибине, предавања
и изложбе завичајног материјала. Своју издавачку
делатност наша библиотека започиње 90-тих година прошлог века и до сада је издала преко 50 књига, што
представља у просеку 2-3 публикације годишње. 
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
                  Серијске публикације обухватају новине и часописе, док се некњижна
грађа односи на плакате, разгледнице, позивнице и остали ситан штампани материјал.
Публикације из фонда завичајне збирке не износе се ван библиотеке, већ се користе
искључиво у читаоници. У већини случајева корисницима се дају дупликати или
фотокопије. Данас наш фонд у завичајној збирци броји преко 100 различитих серијских
публикација. Од старије периодике издваја се „Застава“ и „Радикал“. Најзначајнији часопис је „Српски пчелар“. То је први српски часопис о пчеларству,
издавала га је Српска пчеларска задруга у Руми. Од новије периодике у збирци се налазе „Сремске новине“, које су почеле да излазе
1961. године и од тада се пажљиво чувају сва годишта. Такође, чува се и Службени лист
општина Срема почев од 1971. године.
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
                  позивнице, плакати и остали ситан штампани материјал,
                  који представљају драгоцене трагове прошлости. Разгледнице су дуго година сакупљане у завичајној збирци Библиотеке, а
каталошки су обрађене у систему COBISS. Већина је поклоњена од стране запослених,
читалаца и издавача, док су две најстарије разгледнице поклон вуковарске библиотеке. Две
најстарије разгледнице су са процењеном годином издавања и верује се да су настале
између 1910. и 1915. године. Поред разгледница, велики значај имају и плакати јер приказују и сведоче о
друштвеним променама и догађајима. Плакати у нашој завичајној збирци чувају се више од
60 година. Они су претежно информативног карактера.
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
               Данас завичајна збирка обухвата преко 3.000 библиотечких јединица, које су
обрађене по свим библиотечким стандардима.
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
               Најзначајнија публикација која се налази у фонду завичајне збирке је &quot;Фисика,
простим језиком списана за род славено-сербскиј&quot; Атанасија Стојковића, штампана у три
тома у Будиму 1801, 1802. и 1803. године. Атанасије Стојковић рођен је у Руми 1773.
године, а умро је у Харкову 1832. године. Био је српски писац и научник, руски академик,
професор и ректор универзитета у Харкову. &quot;Фисика, простим језиком списана за род
славено-сербскиј&quot; спада у стару и ретку грађу и то је уједно и прво такво дело на српском
језику. Ова књига настала је на наговор Доситеја Обрадовића и поред физике обухвата и
метеорологију, астрономију, минералогију, ботанику и зоологију. Због свега наведеног
Стојковић се сврстава у ред српских просветитеља. Иако написана као уџбеник, она одише
одређеним поетским моментом, јер не проучава само физику као науку, већ истражује и
разумева животне појаве у целини. &quot;Фисика, простим језиком списана за род славено-
сербскиј&quot; је имала око 1200 пренумераната (претплатника), а продата је у 1851 примерак,
што је веома значајан број у то време.
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
        Завичајне збирке су веома важне, јер обухватају сву историјску и савремену
стварност одређеног географског подручја. Фонд ове збирке је неоспорно значајан, не само
за кориснике библиотеке већ и за становништво у целини, јер поред информативне и
сазнајне улоге имају и образовну и васпитну улогу за генерације које долазе.
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