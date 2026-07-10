import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import AnimatedCard from "../Department/AnimatedCard";
import konkurs from "../../images/konkurs.webp";

const Competition = () => {
  return (
    <>
      <Helmet>
        <title>Конкурс – Библиотека Рума</title>
        <meta
          name="description"
          content="Конкурс за први необјављени роман на српском језику отворен од 21. јула до 15. новембра 2025."
        />
        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/konkurs-biblioteke"
        />

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Library",
          "name": "Градска библиотека „Атанасије Стојковић“",
          "url": "https://www.bibliotekaruma.rs/konkurs-biblioteke",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Главна 114",
            "addressLocality": "Рума",
            "postalCode": "22400",
            "addressCountry": "RS"
          },
          "openingHours": "Mo-Fr 08:00-20:00, Sa 08:00-13:00",
          "telephone": "+38122490047"
        }
      `}</script>
      </Helmet>

      <Container className="container-library mt-4 mb-4">
        <Row>
          <Col xs={12}>
            <h1 className="container-title">
              КЊИЖЕВНИ КОНКУРС „АТАНАСИЈЕ СТОЈКОВИЋ“
            </h1>

            <p className="container-text text-center">
              За први необјављени роман на српском језику
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12} className="text-center">
            <AnimatedCard>
              <img
                src={konkurs}
                alt="Конкурс - илустрација"
                style={{ width: "20%" }}
                loading="lazy"
              />
            </AnimatedCard>
          </Col>
        </Row>

        <h2 className="container-title">Услови конкурса</h2>

        <AnimatedCard>
          <ul className="list-group list-group-flush">
            <li className="list-group-item container-text">
              Конкурс се односи на први, до сада необјављени роман написан на
              српском језику.
            </li>

            <li className="list-group-item container-text">
              Право учешћа имају аутори из Србије и расејања.
            </li>

            <li className="list-group-item container-text">
              Конкурс је отворен од <strong>21. јула до 15. новембра 2026. године.</strong>
            </li>

            <li className="list-group-item container-text">
              <strong>
                Аутори своје рукописе достављају под шифром, а не под именом и
                презименом, како би се обезбедила потпуна анонимност током рада
                жирија.
              </strong>

              <br />
              <br />

              За учешће на Конкурсу потребно је у <strong>велику А4 коверту</strong> доставити:

              <ul className="mt-3">
                <li>
                  <strong>Попуњену пријаву за конкурс</strong>, коју можете
                  преузети овде:
                  <br />
                  <Button
                    onClick={() => window.open("/Конкурс.pdf", "_blank")}
                    className="btn btn-secondary btn-sm mt-2"
                    aria-label="Преузми пријаву за конкурс"
                  >
                    Преузми пријаву
                  </Button>
                </li>

                <li className="mt-3">
                  <strong>Рукопис романа одштампан у три примерка.</strong>
                </li>

                <li className="mt-3">
                  <strong>Рукопис у електронској форми</strong> (WORD или PDF
                  формат), достављен на USB меморији или CD-у.
                </li>

                <li className="mt-3">
                  <strong>Малу затворену коверту</strong> са
                  <strong> разрешењем шифре</strong>, која треба да садржи:
                  <ul>
                    <li>име и презиме аутора,</li>
                    <li>место пребивалишта,</li>
                    <li>адресу становања,</li>
                    <li>број телефона,</li>
                    <li>e-mail адресу.</li>
                  </ul>
                </li>
              </ul>

              <br />

              <strong>Важно:</strong> Жири чита и оцењује рукописе искључиво под
              шифром. Коверта са личним подацима отвара се тек након доношења
              одлуке о награђеном рукопису, чиме се обезбеђује потпуна
              непристрасност поступка.
            </li>

            <li className="list-group-item container-text">
              Пристигле рукописе оцењиваће трочлани жири састављен од једног
              књижевника, једног књижевног критичара и једног представника
              Градске библиотеке „Атанасије Стојковић“.
            </li>

            <li className="list-group-item container-text">
              Градска библиотека „Атанасије Стојковић“ сноси трошкове лектуре,
              коректуре, припреме за штампу и техничког уређења награђеног
              романа.
            </li>

            <li className="list-group-item container-text">
              <strong>Радове слати на адресу:</strong>
              <br />
              Градска библиотека „Атанасије Стојковић“
              <br />
              (за Конкурс „Атанасије Стојковић“)
              <br />
              Главна 114
              <br />
              22400 Рума
            </li>

            <li className="list-group-item container-text">
              Додатне информације можете добити на телефон
              <strong> 060/505-39-23</strong> (Ивана Костадиновић) или путем
              e-mail адресе <strong>gbasruma@gmail.com</strong>.
            </li>
          </ul>
        </AnimatedCard>
      </Container>
    </>
  );
};

export default Competition;