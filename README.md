# cording2
コーディング練習です。

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <base href="{{site.github.url}}" charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>コーディング実績</title>
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/res.css">
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>

<body>

    <section class="header">
        <div class="wrapper">
            <div class="header_nav row navbar_color" id="header_nav">
                <div class="header_logo col-xl-8 col-md-5">
                    <a href="#">Create Design</a>
                </div>
                <div class="header_menu col-xl-4 col-md-7">
                    <ul>
                        <li><a href="#concept">Concept</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="menu_bar" id="menu_bar">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

            <div class="main_title">
                <h1>Design for Smile.</h1>
                <h2>快適なオフィスをデザインする</h2>
            </div>
            <div class="main_title_res">
                <h1>Design for Smile.</h1>
                <h2>快適なオフィスを<br>デザインする</h2>
            </div>
        </div>

        <div class="res_menu" id="res_menu">
            <ul id="res_list">
                <li><a href="#concept">Concept</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </section>

    <section class="concept" id="concept">
        <div class="wrapper">
            <div class="title_left">
                <h1 class="title">
                    CONCEPT
                </h1>
                <div class="border"></div>
            </div>
            <div class="thema">
                <p>
                    “働きたくなる空間”をデザインすることで<br>人々を幸せにする。
                </p>
            </div>
            <div class="content row d-md-flex">
                <p class="article col-xl-4">
                    私たちは、オフィスに特化した空間デザイン専門としております。その理由は、「働きたくなる空間で仕事ができれば多くの人を幸せにできるのではないか」と考えるためです。そんな想いの株式会社Cresta
                    Designだからこそできる空間デザインを提供させていただきます。
                </p>
                <img class="col-xl-4" src="/img/top/concept-image.jpg" alt="働きたくなる空間を再現しています。">
            </div>
            <div class="sub_title_right">
                <h1>Our Concept</h1>
            </div>
        </div>
    </section>

    <section class="works" id="works">
        <div class="wrapper">
            <div class="title_right">
                <h1 class="title">
                    Works
                </h1>
                <div class="border"></div>
            </div>

            <div class="slide">
                <div class="card ">
                    <img src="/img/top/card-img01.jpg" alt="office">
                    <p>新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。</p>
                </div>
                <div class="card ">
                    <img src="/img/top/card-img02.jpg" alt="office">
                    <p>新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。</p>
                </div>
                <div class="card ">
                    <img src="/img/top/card-img03.jpg" alt="office">
                    <p>新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。</p>
                </div>
            </div>

            <input type="button" value="View more" class="works_button" href="#">

            <div class="sub_title_left">
                <h1>Our Works</h1>
            </div>
        </div>
    </section>

    <section class="service" id="service">
        <div class="wrapper">
            <div class="title_left">
                <h1 class="title">
                    Service
                </h1>
                <div class="border"></div>
            </div>

            <div class="imgs">
                <div class="card">
                    <p>Hearing</p>
                    <img src="/img/top/hearing.jpg" alt="office">
                </div>
                <div class="card">
                    <p>Planning</p>
                    <img src="/img/top/planning.jpg" alt="office">
                </div>
                <div class="card">
                    <p>Direction</p>
                    <img src="/img/top/direction.jpg" alt="office">
                </div>
            </div>

            <div class="sub_title_right">
                <h1>Our Service</h1>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="wrapper">
            <div class="title_right">
                <h1 class="title">
                    Contact
                </h1>
                <div class="border"></div>
            </div>

            <p>
                お気軽にご相談ください。
            </p>

            <input type="button" href="#" class="button_contact" value="Contact" onclick="window.open('contact/contact.html')">

            <div class="sub_title_left">
                <h1>Contact Us</h1>
            </div>
        </div>
        </div>
    </section>

    <section class="footer">
        <p>
            ©create.design all rights reserved
        </p>
    </section>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js" defer></script>
    <script src="/javascript/script.js"></script>
</body>

</html>
