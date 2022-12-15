<!doctype html>
<html lang=fi>
<head>
    <title>Pohjalaisten Tanssikerho</title>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=stylesheet href=/sass/index.min.2da82688632e697ca5e2c7f7c4e71097c555e57d495f7dbe0ba8167258577c5f.css integrity="sha256-LagmiGMuaXyl4sf3xOcQl8VV5X1JX32&#43;C6gWclhXfF8=" media=all>
    <link rel=icon type=image/svg+xml href=/favicon.svg>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel=stylesheet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175353356-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-175353356-1');
    </script>
</head>
<body>
    <div class=container>
        <nav>
            <div class=left></div>
            <div class=middle>
                <span class="hide mobile-header">
                    <a href=# onclick=toggleMobileMenu()>
                        <div class=logo-bullet></div>
                        <span class=mobile-menu>menu</span>
                    </a>
                    <script>
                    function toggleMobileMenu() {
                        document.querySelector(".mobile-header .logo-bullet").classList.toggle('highlight')
                        document.querySelector("nav ul").classList.toggle("visible")
                        let menuList = document.querySelectorAll("nav ul li")
                        let display = (menuList[0].style.display == "") ? "block" : ""
                        for (i = 0; i < menuList.length; i++) {
                            menuList[i].style.display = display
                        }
                    }
                    </script>
                </span>
                <ul>
                    <li>
                        <a href=/>
                            <div class=logo-bullet></div>
                            ETUSIVU
                        </a>
                    </li>
                    <li>
                        <a href=/kurssi/>
                            <div class=logo-bullet></div>
                            KURSSIT
                        </a>
                        <ul>
                            <li>
                                <a href=/kurssi/yleista-kursseista/>Yleistä kursseista</a>
                            </li>
                            <li>
                                <a href=/kurssi/kurssiaikataulut-ja-lajit/>Kurssiaikataulut ja lajit</a>
                            </li>
                            <li>
                                <a href=/kurssi/ilmoittautuminen/>Ilmoittautuminen</a>
                            </li>
                            <li>
                                <a href=/kurssi/hinnasto-ja-maksaminen/>Hinnasto ja maksaminen</a>
                            </li>
                            <li>
                                <h4>kurssit</h4>
                            </li>
                            <li>
                                <a href=/kurssi/kausi/alkeiskurssi/>Alkeiskurssi</a>
                            </li>
                            <li>
                                <a href=/kurssi/kausi/alkeisjatko/>Alkeisjatko</a>
                            </li>
                            <li>
                                <a href=/kurssi/kausi/jatkokurssi/>Jatkokurssi</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href=/tapahtuma/>
                            <div class=logo-bullet></div>
                            TAPAHTUMAT
                        </a>
                        <ul>
                            <div class=menu-item>
                                <li class=sm-margin>
                                    <a href=/tapahtuma/pot-tanssibileet-221216/>POT Tanssibileet</a>
                                </li>
                                <li class=sm-print>16.12.2022</li>
                                <li class=sm-print>Botta</li>
                                <li class=sm-print>18:00 - 23:45</li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <a href=/hallitus/>
                            <div class=logo-bullet></div>
                            HALLITUS
                        </a>
                    </li>
                    <li>
                        <a href=/blogi/>
                            <div class=logo-bullet></div>
                            BLOGI
                        </a>
                        <ul>
                            <li>
                                <a href=/blogi/kisaaminen/>Kisaaminen</a>
                            </li>
                            <li>
                                <a href=/blogi/lavaetiketti/>Lavaetiketti</a>
                            </li>
                            <li>
                                <a href=/blogi/tanssilajit/>Tanssilajit</a>
                            </li>
                            <li>
                                <a href=/blogi/vastauksia-palautteisiin/>Vastauksia palautteisiin</a>
                            </li>
                            <li>
                                <a href=/blogi/vuosi-hallituksessa/>Vuosi hallituksessa</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class=right></div>
        </nav>
        <div class=content>
            <div class=list>
                <h3>
                    <a href=/kurssi/yleista-kursseista/>Yleistä kursseista</a>
                </h3>
                <p>Kaikille viikottaisille kursseille yhteistä asiaa ja käytäntöjä.</p>
                <h3>
                    <a href=/kurssi/kurssiaikataulut-ja-lajit/>Kurssiaikataulut ja lajit</a>
                </h3>
                <p>Kaikkien viikottaisten kurssien aikataulut ja lajit.</p>
                <h3>
                    <a href=/kurssi/ilmoittautuminen/>Ilmoittautuminen</a>
                </h3>
                <p>Ilmoittaudu kursseille.</p>
                <h3>
                    <a href=/kurssi/hinnasto-ja-maksaminen/>Hinnasto ja maksaminen</a>
                </h3>
                <p>Kaikkien kurssien hintatiedot ja maksuohjeet.</p>
                <h1>Kurssitarjonta</h1>
                <h3>
                    <a href=/kurssi/kausi/alkeiskurssi/>Alkeiskurssi</a>
                </h3>
                <p>Tanssin ensiasekeleet.</p>
                <h3>
                    <a href=/kurssi/kausi/alkeisjatko/>Alkeisjatko</a>
                </h3>
                <p>Vähän edistyneimmille. Kannattaa olla vähän myös lavatanssikokemusta.</p>
                <h3>
                    <a href=/kurssi/kausi/jatkokurssi/>Jatkokurssi</a>
                </h3>
                <p>Pitkälle edistyneille tanssijoille. Täällä tanssitekniikka ja kuviot hiotaan yhä parempaan kuntoon.</p>
            </div>
        </div>
        <div class=footer>
            <div class=general>
                <div class=logo-bullet></div>
                <h2 class=sub-header>Pohjalaisten tanssikerho ry</h2>
                <ul>
                    <li>
                        <a href=/ry/yhdistyksen-saannot/>Yhdistyksen säännöt</a>
                    </li>
                    <li>
                        <a href=/ry/liity-aktiiviksi/>Liity aktiiviksi</a>
                    </li>
                    <li>
                        <a href=/ry/kannatusjasenyys/>Kannatusjäsenyys</a>
                    </li>
                </ul>
            </div>
            <div class=some>
                <div class=logo-bullet></div>
                <h2>Yhteystiedot ja some</h2>
                <ul>
                    <li>
                        <a href=https://www.facebook.com/groups/pot.tanssikerho/>Facebook</a>
                    </li>
                    <li>
                        <a href=/whatsapp/>WhatsApp</a>
                    </li>
                    <li>
                        <a href=/sahkopostilista/>Sähköpostilista</a>
                    </li>
                    <li>
                        <a>pohjalaistentanssikerho . ry (ät) gmail . com</a>
                    </li>
                </ul>
            </div>
            <div class=contacts>
                <div class=logo-bullet></div>
                <h2>Osoite</h2>
                <ul>
                    <li>
                        <span>Töölönkatu 3 A, 00940 Helsinki, 5krs.</span>
                    </li>
                    <li>
                        <a href=https://reittiopas.hsl.fi/T%C3%B6%C3%B6l%C3%B6nkatu%203%2C%20Helsinki%3A%3A60.173962%2C24.931228/-/lahellasi>Avaa Reittioppaalla</a>
                    </li>
                    <li>
                        <a href=https://www.google.com/maps/place/T%C3%B6%C3%B6l%C3%B6nkatu+3,+00101+Helsinki/>Avaa Google Mapsilla</a>
                    </li>
                </ul>
            </div>
            <div class=bottom-fill></div>
        </div>
    </div>
    <script type=text/javascript>
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });
    </script>
</body>
</html>