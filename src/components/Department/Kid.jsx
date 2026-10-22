import React, { useState } from 'react';
import jole3 from '../../images/jole3.jpg'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import azbukvar from '../../images/azbukvar.jpg'
import { LiaBookSolid } from 'react-icons/lia';
import jole2 from '../../images/jole2.jpg';
import { Helmet } from 'react-helmet-async';
import tesla1 from '../../images/tesla1.jpg';
import tesla2 from '../../images/tesla2.jpg';
import radionicaAtanasije1 from '../../images/radionicaAtanasije1.jpg'
import radionicaAtanasije2 from '../../images/radionicaAtanasije2.jpg'
import radionicaAtanasije3 from '../../images/radionicaAtanasije3.jpg'
import radionicaAtanasije4 from '../../images/radionicaAtanasije4.jpg'
import bajkovitiSvet1 from '../../images/bajkovitiSvet1.jpg'
import bajkovitiSvet2 from '../../images/bajkovitiSvet2.jpg'
import literarniKonkurs from '../../images/literarniKonkurs.jpg'
import dodelaKartica from '../../images/dodelaKartica.jpg'
import './Kid.css';
import opstinskaSmotra from '../../images/opstinskaSmotra.jpg'

import { GiOpenBook } from 'react-icons/gi';

import decije from '../../images/decije.webp';

import AnimatedImage from './AnimatedImage';


const Kid = () => {

  const [activeKey, setActiveKey] = useState('radionice');

  const [activeWorkshop, setActiveWorkshop] = useState(
    'aktuelnosti-dan-decje-knjige'
  );


  return (
    <>

      <Helmet>

        <title>
          Одељење за децу – Библиотека Рума
        </title>

        <meta
          name="description"
          content="Одељење за децу Градске библиотеке „Атанасије Стојковић“ у Руми: фонд, радионице, литерарни конкурси и програми за најмлађе."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/odeljenje-za-decu"
        />

        <meta
          property="og:title"
          content="Одељење за децу – Градска библиотека Рума"
        />

        <meta
          property="og:description"
          content="Одељење за децу Градске библиотеке „Атанасије Стојковић“ у Руми – књиге, радионице, литерарни конкурси и културни програми."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/odeljenje-za-decu"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/decije.webp"
        />

        <meta
          property="og:locale"
          content="sr_RS"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Одељење за децу – Градска библиотека Рума"
        />

        <meta
          name="twitter:description"
          content="Одељење за децу Градске библиотеке „Атанасије Стојковић“ у Руми."
        />

        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/images/decije.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Library',

            '@id':
              'https://www.bibliotekaruma.rs/odeljenje-za-decu#library',

            name:
              'Градска библиотека „Атанасије Стојковић“ Рума',

            url:
              'https://www.bibliotekaruma.rs/odeljenje-za-decu',

            address: {
              '@type': 'PostalAddress',

              streetAddress: 'Главна 114',

              addressLocality: 'Рума',

              postalCode: '22400',

              addressCountry: 'RS'
            },

            telephone: '+38122490047'
          })}
        </script>

      </Helmet>


      {/* =========================================================
          HERO
      ========================================================= */}

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

            Одељење <span>за децу</span>

          </h1>


          <p>

            Простор у коме књига, игра, учење и машта
            постају део одрастања наших најмлађих читалаца.

          </p>

        </div>

      </section>


      <Container className="kid-page">


        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="kid-intro">

          <div className="kid-eyebrow">

            <span></span>

            О НАШЕМ ОДЕЉЕЊУ

          </div>


          <div className="kid-intro-heading">

            <h2>

              Место где почиње <em>љубав према књизи</em>

            </h2>

          </div>


          <div className="kid-intro-content">

            <div className="kid-intro-icon">

              <LiaBookSolid />

            </div>


            <div className="kid-intro-text">

              <p>
                Одељење за децу броји око 18.000 публикација.
                Фонд је уређен по УДК систему и унутар група
                узбучен. Богат је бројним двојезичним књигама,
                сликовницама, лектирaма, моторичким књигама,
                звучним књигама и енциклопедијама.
              </p>


              <p>
                Одељење за децу је организовано у две просторије.
                Прва просторија је намењена публикацијама које су
                изложене за читаоце, док је друга просторија
                намењена радионицама.
              </p>


              <p>
                У радионицама учествују наши најмлађи корисници:
                бројне вртићке групе, ученици основних школа,
                као и неки разреди средњошколаца.
              </p>


              <p>
                Успешну сарадњу, поред државних образовно-
                васпитних институција, остварујемо и са Дневним
                боравком „Солидарност“, као и са приватним
                школицама језика, чуваоницама деце и музичким
                школицама.
              </p>


              <p>
                Свако одељење за децу представља место на коме
                се рађају и стварају будући љубитељи књига.
                Из тог разлога негујемо вишегодишњу традицију
                доделе бесплатних чланских картица првацима
                и предшколцима.
              </p>

            </div>

          </div>

        </section>


        {/* =========================================================
            IMAGE FEATURE
        ========================================================= */}

        <section className="kid-feature">

          <Row className="g-4 align-items-stretch">

            <Col lg={7}>

              <div className="kid-feature-image kid-feature-image-large">

                <AnimatedImage
                  src={decije}
                  alt="Одељење за децу Градске библиотеке Рума"
                />

              </div>

            </Col>


            <Col lg={5}>

              <div className="kid-feature-side">

                <div className="kid-eyebrow">

                  <span></span>

                  ПРОСТОР ЗА ДЕЦУ

                </div>


                <h3>

                  Књига, игра и машта на једном месту

                </h3>


                <p>

                  Простор Одељења за децу осмишљен је тако да
                  најмлађим читаоцима пружи могућност да књигу
                  упознају кроз игру, дружење, истраживање и
                  креативни рад.

                </p>


                <div className="kid-feature-small-image">

                  <AnimatedImage
                    src={azbukvar}
                    alt="Радионица за децу у Градској библиотеци Рума"
                  />

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =========================================================
            CULTURAL PROGRAMS
        ========================================================= */}

        <section className="kid-programs">


          <div className="kid-section-heading">

            <div className="kid-eyebrow">

              <span></span>

              КУЛТУРНИ ПРОГРАМИ

            </div>


            <h2>

              Културни <em>кутак</em>

            </h2>


            <p>

              Одељење за децу је простор у коме се кроз књигу,
              поезију, игру и креативне активности подстичу
              радозналост и стваралаштво најмлађих.

            </p>

          </div>


          {/* =====================================================
              GLAVNI TABOVI
          ===================================================== */}

          <div className="kid-tabs">

            <Nav
              variant="tabs"
              activeKey={activeKey}
              onSelect={(key) => key && setActiveKey(key)}
              className="kid-main-tabs"
            >

              <Nav.Item>

                <Nav.Link eventKey="radionice">

                  Радионице

                </Nav.Link>

              </Nav.Item>


              <Nav.Item>

                <Nav.Link eventKey="decija-nedelja">

                  Дечија недеља

                </Nav.Link>

              </Nav.Item>


              <Nav.Item>

                <Nav.Link eventKey="smotra">

                  Општинска смотра рецитатора

                </Nav.Link>

              </Nav.Item>

            </Nav>


            {/* =====================================================
                SADRŽAJ TABOVA
            ===================================================== */}

            <div className="kid-tabs-content">


              {/* ===================================================
                  RADIONICE
              =================================================== */}

              {activeKey === 'radionice' && (

                <div className="kid-tab-panel">

                  <div className="kid-program-banner">

                    <GiOpenBook />

                    <p>
                      У оквиру Одељења за децу организујемо различите
                      радионице које најмлађим читаоцима пружају
                      прилику за дружење, учење и креативно стваралаштво.
                    </p>

                  </div>


                  <Nav
                    variant="tabs"
                    activeKey={activeWorkshop}
                    onSelect={(key) =>
                      key && setActiveWorkshop(key)
                    }
                    className="kid-inner-tabs"
                  >

                    <Nav.Item>
                      <Nav.Link eventKey="aktuelnosti-dan-decje-knjige">
                        Актуелности
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="uskrsnje-radionice">
                        Ускршње радионице
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="medjunarodni-dan-decje-knjige">
                        Међународни дан дечије књиге
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="dani-atanasija-stojkovica">
                        Дани Атанасија Стојковића
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>


                  <div className="kid-inner-content">


                    {/* =================================================
                        AKTUELNOSTI
                    ================================================= */}

                    {activeWorkshop ===
                      'aktuelnosti-dan-decje-knjige' && (

                        <div className="kid-event-content">

                          <article className="kid-story">

                            <span className="kid-card-label">
                              ПРОМОЦИЈА КЊИГЕ
                            </span>

                            <h3>
                              „Јоле (ни)је чаробњак“, Маријана Дучак Поповић
                            </h3>

                            <div className="kid-divider"></div>

                            <div className="kid-story-body">

                              <p>
                                У Градској библиотеци „Атанасије Стојковић“
                                одржана је промоција књиге за децу
                                „Јоле (ни)је чаробњак“, ауторке Маријане Дучак
                                Поповић, уз интерактивну породичну радионицу
                                „Пут нових чаробњака“.
                              </p>

                              <p>
                                Кроз 12 поглавља испуњених загонеткама,
                                авантурама и порукама мудрости, деца и родитељи
                                заједно су пратили Јолетов пут, решавали задатке,
                                откривали симболе и учествовали у креативним
                                активностима инспирисаним књигом.
                              </p>

                              <p>
                                Посебну пажњу привукле су загонетке чија су
                                решења исписана знаковним језиком, као и
                                активности које су подстакле заједничко учешће,
                                машту и породично повезивање.
                              </p>

                              <p>
                                Акценат овог дружења није био само на Јолетовој
                                причи, већ и на породичном повезивању,
                                квалитетно проведеном времену и стварању
                                нових успомена. Хвала ауторки на дивном дружењу
                                и свим малим и великим чаробњацима који су били
                                део програма.
                              </p>

                            </div>

                            <Row className="g-3 kid-story-gallery">

                              <Col md={6}>
                                <div className="kid-card-image">
                                  <AnimatedImage
                                    src={jole2}
                                    alt="Промоција књиге Јоле (ни)је чаробњак"
                                  />
                                </div>
                              </Col>

                              <Col md={6}>
                                <div className="kid-card-image">
                                  <AnimatedImage
                                    src={jole3}
                                    alt="Породична радионица Пут нових чаробњака"
                                  />
                                </div>
                              </Col>

                            </Row>

                          </article>


                          <article className="kid-story">

                            <span className="kid-card-label">
                              РАДИОНИЦА
                            </span>

                            <h3>
                              Све пустоловине зеца Петра
                            </h3>

                            <div className="kid-divider"></div>

                            <div className="kid-video-wrap">

                              <iframe
                                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1080085731115165&show_text=false"
                                title="Све пустоловине зеца Петра"
                                scrolling="no"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                              ></iframe>

                            </div>

                          </article>


                          <article className="kid-story">

                            <span className="kid-card-label">
                              ЈУБИЛЕЈ
                            </span>

                            <h3>
                              170 година од рођења Николе Тесле (1856–2026)
                            </h3>

                            <div className="kid-divider"></div>

                            <div className="kid-story-body">

                              <p>
                                Поводом 170. годишњице рођења Николе Тесле,
                                једног од највећих научника и проналазача
                                свих времена, Градска библиотека
                                „Атанасије Стојковић“ обележила је овај
                                значајан јубилеј садржајима посвећеним
                                његовом животу, делу и трајном наслеђу.
                              </p>

                              <p>
                                За наше најмлађе посетиоце организовано је
                                читалиште „Приче из детињства Николе Тесле“,
                                на ком су деца кроз читање, разговор и дружење
                                упознала детињство великог научника и открила
                                како су радозналост, машта и упорност постали
                                темељ његових великих открића.
                              </p>

                            </div>

                            <Row className="g-3 kid-story-gallery">

                              <Col md={6}>
                                <div className="kid-card-image">
                                  <AnimatedImage
                                    src={tesla1}
                                    alt="Читалиште Приче из детињства Николе Тесле"
                                  />
                                </div>
                              </Col>

                              <Col md={6}>
                                <div className="kid-card-image">
                                  <AnimatedImage
                                    src={tesla2}
                                    alt="Обележавање 170 година од рођења Николе Тесле"
                                  />
                                </div>
                              </Col>

                            </Row>

                          </article>


                          <article className="kid-story">

                            <span className="kid-card-label">
                              РАДИОНИЦА
                            </span>

                            <h3>
                              „Бајковити светови“
                            </h3>

                            <div className="kid-divider"></div>

                            <div className="kid-story-body">

                              <p>
                                Одељење III/1 ОШ „Душан Јерковић“ провело је
                                један школски час на Дечјем одељењу наше
                                библиотеке. Учитељица Слађана Грандић довела
                                је своје ученике са намером да понове знање
                                које су стекли о бајкама, али и да га сагледају
                                из другог угла кроз радионицу коју је водила
                                библиотекарка Маријана.
                              </p>

                              <p>
                                У Ћопићевој причи „Страшни змај“ откривали су
                                доказе и трагове који указују на то да у шуми
                                заиста постоји змај.
                              </p>

                              <p>
                                Подсетили су се и речи Десанке Максимовић
                                да је главни јунак њених бајки управо људска
                                доброта. Ученици су знали да наведу и бајке
                                са тужним завршетком, па је тим поводом било
                                речи и о животу и стваралаштву чувеног
                                данског писца Ханса Кристијана Андерсена.
                              </p>

                              <p>
                                Како се крај школске године ближи, сви су
                                обећали да ће током распуста долазити у
                                библиотеку, откривати нове приче и светове
                                и још више развијати своју машту. Јер, како
                                су научили у свету бајки, машта заиста може
                                бити бескрајна.
                              </p>

                            </div>

                            <Row className="g-3 kid-story-gallery">

                              <Col md={6}>
                                <div className="kid-card-image">
                                  <AnimatedImage
                                    src={bajkovitiSvet1}
                                    alt="Радионица Бајковити светови"
                                  />
                                </div>
                              </Col>

                              <Col md={6}>
                                <div className="kid-card-image">
                                  <AnimatedImage
                                    src={bajkovitiSvet2}
                                    alt="Радионица Бајковити светови"
                                  />
                                </div>
                              </Col>

                            </Row>

                          </article>

                        </div>

                      )}

                    {activeWorkshop === 'uskrsnje-radionice' && (

                      <article className="kid-story">

                        <span className="kid-card-label">
                          ЛИКОВНИ КОНКУРС
                        </span>

                        <h3>
                          Радујмо се Ускрсу – дечја креативност у пуној боји
                        </h3>

                        <div className="kid-divider"></div>

                        <div className="kid-story-body">

                          <p>
                            У сусрет најрадоснијем хришћанском празнику,
                            Дечје одељење Градске библиотеке расписало је
                            ликовни конкурс „Радујмо се Ускрсу“ за све
                            вртићке групе у нашој општини.
                          </p>

                          <p>
                            Са великом радошћу обавештавамо да су васпитачице
                            са својим малишанима из свих румских вртића, као и
                            неколико група са села, од срца прихватиле позив.
                            Стигло нам је чак 14 дивних групних радова и преко
                            двадесет појединачних цртежа, испуњених шареним
                            јајима, зечићима и дечјом маштом.
                          </p>

                          <p>
                            Сви радови изложени су у нашој библиотеци, где
                            својом ведрином и креативношћу красе простор и
                            доносе празничну атмосферу. Одредити најлепши рад
                            био је тежак задатак, али су проглашени победници:
                          </p>

                        </div>

                        <div className="kid-winner-grid">

                          <div className="kid-winner">
                            <span className="kid-winner-place">1. МЕСТО</span>
                            <h4>Старија вртићка група из Коцкице 2</h4>
                            <p>Васпитачице: Јасмина Ђурановић и Мирјана Гогић</p>
                          </div>

                          <div className="kid-winner">
                            <span className="kid-winner-place">2. МЕСТО</span>
                            <h4>Група пред полазак у школу из Старе управе</h4>
                            <p>Васпитачице: Ружица Грујић, Сања Лунић и Сузана Сремчевић</p>
                          </div>

                          <div className="kid-winner">
                            <span className="kid-winner-place">3. МЕСТО</span>
                            <h4>Мешовита група из Путинаца</h4>
                            <p>Васпитачице: Љубица Ступар и Марија Боројевић</p>
                          </div>

                          <div className="kid-winner">
                            <span className="kid-winner-place">НАЈКРЕАТИВНИЈИ РАД</span>
                            <h4>Мешовита група из Вогња</h4>
                            <p>Васпитачице: Анкица Миличевић и Драгана Пјевац</p>
                          </div>

                        </div>

                        <div className="kid-story-body">

                          <p>
                            Три награђене групе посетиле су нашу библиотеку
                            на свечаној додели награда, док смо нашим малим
                            уметницима из Путинаца награду уручили у њиховом
                            вртићу.
                          </p>

                          <p>
                            Од срца се захваљујемо свим учесницима на уложеном
                            труду, маштовитости и лепоти коју сте нам донели.
                            Радујмо се Ускрсу – заједно, кроз дечју креативност
                            и радост. Градска библиотека жели вам срећне и
                            благословене ускршње празнике.
                          </p>

                        </div>

                      </article>

                    )}

                    {activeWorkshop === 'dani-atanasija-stojkovica' && (

                      <article className="kid-story">

                        <span className="kid-card-label">
                       ДАНИ АТАНАСИЈА СТОЈКОВИЋА
                        </span>

                        <h3>
                          Деца и млади упознају Атанасија Стојковића
                        </h3>

                        <div className="kid-divider"></div>

                        <div className="kid-story-body">

                          <p>
                            Протекла недеља у Градској библиотеци
                            „Атанасије Стојковић“ била је, између осталих
                            активности, посвећена деци и младима и њиховом
                            упознавању са ликом, делом и наслеђем Атанасија
                            Стојковића. Програм је осмишљен у оквиру 4. Дана
                            Атанасија Стојковића.
                          </p>

                          <p>
                            Кроз три различита сусрета, ученици су Атанасија
                            Стојковића упознавали из различитих углова –
                            кроз науку, књижевност и његову повезаност са
                            завичајем.
                          </p>

                        </div>

                        <div className="kid-meet-list">

                          <div className="kid-meet">
                            <div className="kid-meet-mark">НАУКА</div>
                            <div>
                              <h4>Едукативна радионица „Свемир“</h4>
                              <p>
                                Радионица је окупила ученике III/2 разреда
                                ОШ „Змај Јова Јовановић“. Кроз игру, тимски рад
                                и занимљиве задатке, ученици су истраживали свет
                                свемира, а посебан део био је посвећен
                                Стојковићевом интересовању за науку. Радионицу
                                је осмислила и водила библиотекарка Маја Зорић,
                                уз учешће учитељице Марије Војновић.
                              </p>
                            </div>
                          </div>

                          <div className="kid-meet">
                            <div className="kid-meet-mark">КЊИЖЕВНОСТ</div>
                            <div>
                              <h4>Књижевни сусрет „Аристид и Наталија“</h4>
                              <p>
                                Сусрет је био намењен ученицима другог и трећег
                                разреда гимназије. Са романом који се сматра
                                првим српским модерним романом, његовим аутором
                                и просветитељским идејама ученици су се
                                упознали кроз разговор о пријатељству, љубави,
                                породичним односима и животним изазовима.
                                Сусрет је водила Маријана Бизимић, у пратњи
                                професорке Надице Покрајац.
                              </p>
                            </div>
                          </div>

                          <div className="kid-meet">
                            <div className="kid-meet-mark">ЗАВИЧАЈ</div>
                            <div>
                              <h4>Час у природи „Ода Борковачком извору“</h4>
                              <p>
                                Час је одржан за ученике V, VI и VII разреда
                                ОШ „Иво Лола Рибар“, у пратњи наставника
                                Милоша Комленца и Иване Јовановић, на
                                Девојачкој чесми на Борковцу. Читајући
                                „Оду на Источник Борковачки“, ученици су
                                повезали Стојковићево дело са природом,
                                завичајем и местом које је инспирисало његово
                                стваралаштво. Час је водила Маријана Даничић.
                              </p>
                            </div>
                          </div>

                        </div>

                        <div className="kid-story-body">

                          <p>
                            Три сусрета, три различита приступа и једна
                            заједничка идеја – да Атанасије Стојковић буде
                            ближи новим генерацијама, не само као име које
                            носи наша библиотека, већ као научник, писац и
                            мислилац чије дело и данас може да покрене питања,
                            машту и радозналост.
                          </p>

                          <p>
                            Тако је протекла недеља била још један омаж
                            Атанасију Стојковићу, у оквиру манифестације коју
                            посвећујемо његовом имену и наслеђу.
                          </p>

                        </div>

                        <Row className="g-3 kid-story-gallery">

                          <Col md={6} lg={3}>
                            <div className="kid-card-image">
                              <AnimatedImage
                                src={radionicaAtanasije1}
                                alt="Дани Атанасија Стојковића"
                              />
                            </div>
                          </Col>

                          <Col md={6} lg={3}>
                            <div className="kid-card-image">
                              <AnimatedImage
                                src={radionicaAtanasije2}
                                alt="Предавање посвећено Атанасију Стојковићу"
                              />
                            </div>
                          </Col>

                          <Col md={6} lg={3}>
                            <div className="kid-card-image">
                              <AnimatedImage
                                src={radionicaAtanasije4}
                                alt="Радионица у оквиру Дана Атанасија Стојковића"
                              />
                            </div>
                          </Col>

                          <Col md={6} lg={3}>
                            <div className="kid-card-image">
                              <AnimatedImage
                                src={radionicaAtanasije3}
                                alt="Час посвећен Атанасију Стојковићу"
                              />
                            </div>
                          </Col>

                        </Row>

                      </article>

                    )}

                    {/* =================================================
                        MEĐUNARODNI DAN DEČJE KNJIGE
                    ================================================= */}

                    {activeWorkshop ===
                      'medjunarodni-dan-decje-knjige' && (

                      <article className="kid-story">

                        <Row className="g-4 align-items-start">

                          <Col lg={7}>

                           

                            <h3>
                              Међународни дан дечије књиге
                            </h3><br/>
 <span className="kid-card-label">
                              ЛИТЕРАРНИ КОНКУРСИ
                            </span>
                            <div className="kid-divider"></div>

                            <div className="kid-story-body">

                              <p>
                                На Одељењу за децу наше библиотеке одржавали
                                су се бројни литерарни конкурси поводом
                                Међународног дана детета и поводом Светског
                                дана дечје књиге.
                              </p>

                              <p>
                                Кроз литерарни конкурс <b>„Моја модерна бајка“</b>
                                најмлађи читаоци добили су прилику да
                                осмисле сопствене приче, ликове и светове.
                              </p>

                              <p>
                                На овај начин библиотека подстиче децу да
                                читају, пишу и развијају сопствену машту,
                                али и да књигу доживе као простор у коме
                                све постаје могуће.
                              </p>

                            </div>

                          </Col>

                          <Col lg={5}>

                            <div className="kid-card-image">

                              <AnimatedImage
                                src={literarniKonkurs}
                                alt="Литерарни конкурс Моја модерна бајка"
                              />

                            </div>

                          </Col>

                        </Row>

                      </article>

                    )}

                  </div>

                </div>

              )}


              {/* ===================================================
                  DEČIJA NEDELJA
              =================================================== */}

              {activeKey === 'decija-nedelja' && (

                <div className="kid-tab-panel">


                  {/* =================================================
                      EVENT 01 – LIKOVNI I LITERARNI KONKURS
                  ================================================= */}

               <article className="kid-card">

  <Row className="g-0 align-items-stretch">

    <Col lg={7}>

      <div className="kid-card-content">

        <div className="kid-card-top">

          <div className="kid-card-icon">
            <LiaBookSolid />
          </div>

          <span className="kid-card-number">
            01
          </span>

        </div>

        <span className="kid-card-label">
          ДЕЧИЈА НЕДЕЉА
        </span>

        <h3>
          📚 „Да би деца срећна била: љубав и поштовање,
          а не сила“
        </h3>

        <div className="kid-divider"></div>

        <p>
          У оквиру Дечије недеље, која се ове године
          одржава од 5. до 11. октобра под слоганом
          <strong>
            {" "}„Да би деца срећна била: љубав и поштовање,
            а не сила“
          </strong>,
          Градска библиотека „Атанасије Стојковић“
          наставила је своју дугогодишњу традицију
          бесплатног учлањења деце предшколског узраста.
        </p>

        <p>
          И ове године свим предшколцима са територије
          наше општине поклонили смо чланску карту
          библиотеке, која им омогућава да наше услуге
          користе до краја основне школе.

          Ове године учланили смо чак
          <strong> 469 предшколаца!</strong>
        </p>

        <p>
          Верујемо да је чланска карта један од
          најлепших првих поклона које дете може добити
          од библиотеке – позив да у свет књига уђе
          рано, слободно и са радошћу.

          Овом традицијом желимо да подстакнемо љубав
          према читању, развијање читалачких навика и
          да библиотека од најранијег узраста буде
          место сусрета, маште, знања и дружења.
        </p>

        <p>
          Поводом доделе чланских карата, у месецу
          књиге, приређена је и дечија представа
          <strong> „Деда Мразове невоље“</strong>,
          у извођењу Јовице Јашина, која је најмлађима
          донела много смеха и радости и учинила њихов
          први сусрет са библиотеком још лепшим.
        </p>

        <p>
          Током Дечије недеље у библиотеци је одржана
          и едукативно-креативна радионица
          <strong>
            {" "}„Повежи, откриј, погоди – упознај животиње“
          </strong>,
          коју је осмислила и водила библиотекарка
          Маја Зорић.

          Ученици III разреда ОШ „Змај Јова Јовановић“,
          са учитељицом Душанком Кокиновић, кроз игру,
          тимски рад и креативне задатке учили су о
          животињском свету.
        </p>

        <p>
          Јер када детету поклонимо књигу, знање и место
          у библиотеци – поклањамо му могућност да расте
          уз приче, машту и љубав према читању. 📚💛
        </p>

      </div>

    </Col>

    <Col lg={5}>

      <div className="kid-card-image">

        <AnimatedImage
          src={dodelaKartica}
          alt="Дечија недеља – бесплатан упис предшколаца и активности у библиотеци"
        />

      </div>

    </Col>

  </Row>

</article>
   <article className="kid-card">

  <Row className="g-0 align-items-stretch">

    <Col lg={7}>

      <div className="kid-card-content">

        <div className="kid-card-top">

          <div className="kid-card-icon">
            <LiaBookSolid />
          </div>

          <span className="kid-card-number">
            02
          </span>

        </div>

        <span className="kid-card-label">
     ЛИТЕРАРНИ И ЛИКОВНИ КОНКУРСИ
        </span>

        <h3>
    „Моја школа из маште“ и „Приче из
ђачке клупе“
        </h3>

        <div className="kid-divider"></div>

        <p>
          Градска библиотека је поводом Дечије недеље организовала ликовни и литерарни конкурс за
ученике основних школа, желећи да деци пружи прилику да искажу своју креативност, машту и
таленат кроз слику и реч.
          
      
        </p>

        <p>
 
На литерарни конкурс пристигло је 27 радова ученика од петог до осмог разреда из 6 основних
школа са територије румске општине. Награђени ученици су:
Прво место: Невена Милинковић, VI разред, Основна школа „Небојша Јерковић“ Буђановци
Дуго место: Дуња Момчиловић, VIII3, Основна школа „Душан Јерковић“ Рума
Треће место: Ивана Керекеш, VII2, Основна школа „Доситеј Обрадовић“ Путинци
    
        </p>

        <p>
      На ликовни конкурс пристигао је 221 рад ученика од првог до четвртог разреда из 5 основних
школа са територије румске општине. Због великог броја радова одлучили смо да поделимо
награде у две групе: прва награђена група су ученици првог и другог разреда и друга награђена
група су ученици трећег и четвртог разреда.
Награђени ученици првог и другог разреда су:
Прво место: Лена Пушин, II3, Основна школа „Иво Лола Рибар“ Рума
Друго место: Ленка Кардаш II1, Основна школа „Вељко Дугошевић“ Рума
Треће место: Војин Штетић I2, Основна школа „Змај Јова Јовановић“ Рума

        </p>

        <p>
        Најкреативнији радови:
Ника Рајковић I3, Основна школа „Иво Лола Рибар“ Рума
Дуња Градић II4, Основна школа „Душан Јерковић“ Рума
Награђени ученици трећег и четвртог разреда су:
Прво место: Ања Марковић, III2, Основна школа „Душан Јерковић“ Рума
Друго место: Душан Ненадић IV2, Основна школа „Вељко Дугошевић“ Рума
Треће место: Емилија Аднађевић IV3, Основна школа „Змај Јова Јовановић“ Рума
Најкреативнији радови:
Теодор Антић III1, Основна школа „Змај Јова Јовановић“ Рума
Дане Радека IV разред, Основна школа „Доситеј Обрадовић“ Путинци - Жарковац

        </p>

        <p>
        
У прикупљању и оцењивању радова учествовале библиотекарке: Маја Зорић, Маријана
Бизумић и Ивана Костадиновић.
          
        </p>


      </div>

    </Col>

    <Col lg={5}>

      <div className="kid-card-image">

        <AnimatedImage
          src={dodelaKartica}
          alt="Дечија недеља – бесплатан упис предшколаца и активности у библиотеци"
        />

      </div>

    </Col>

  </Row>

</article>

                  {/* =================================================
                      EVENT 02 – IMAM I JA SVOJA PRAVA
                  ================================================= */}

               


                </div>

              )}


              {/* ===================================================
                  OPŠTINSKA SMOTRA RECITATORA
              =================================================== */}

              {activeKey === 'smotra' && (

                <div className="kid-tab-panel">


                  <article className="kid-card">

                    <div className="kid-card-content">


                      <div className="kid-card-top">

                        <div className="kid-card-icon">

                          <LiaBookSolid />

                        </div>

                      </div>


                      <span className="kid-card-label">

                        ПЕСНИЧЕ НАРОДА МОГ

                      </span>


                      <h3>

                        Општинска смотра рецитатора

                      </h3>


                      <div className="kid-divider"></div>


                      <p>

                        Простори наше библиотеке увек су радо отворени,
                        па смо већ две године заредом, са посебним
                        задовољством, угостили учеснике општинске смотре
                        рецитатора „Песниче народа мог“.

                        Као домаћини овог значајног такмичења, које
                        традиционално организује Основна школа
                        „Душан Јерковић“, пружили смо подршку младим
                        талентима у њиховом креативном изражавању.

                      </p>


                      <Row>

                        <Col md={12} >

                          <div className="kid-card-image">

                            <AnimatedImage
                              src={opstinskaSmotra}
                              alt="Општинска смотра рецитатора"
                          
                            />

                          </div>

                        </Col>

                      </Row>


                    </div>

                  </article>


                </div>

              )}


            </div>

          </div>

        </section>

      </Container>

    </>

  );

};


export default Kid;