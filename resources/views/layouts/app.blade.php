<!DOCTYPE html>
<!--[if IE 9]><html lang="en-US" class="lt-ie9 ie9" data-n-head-ssr lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!--<![endif]-->

<head>
    <title>MPower Promo | Promotional Product Software</title>
    <meta charset="utf-8">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Software and websites built for promotional product distributors and suppliers based on PromoStandards." keyid="1696491510648" data-hid="description">
    <meta name="og:title" property="og:title" content="MPower Promo | Promotional Product Software" data-hid="og:title">
    <meta name="og:description" property="og:description" content="Software and websites built for promotional product distributors and suppliers based on PromoStandards." data-hid="og:description">
    <meta name="og:site_name" property="og:site_name" content="MPower Corporate Site" data-hid="og:site_name">
    <meta name="og:image" property="og:image" content="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/assets/mpower_log_text-1608679944014.png" data-hid="og:image">
    <meta name="og:url" property="og:url" content="https://mpowerpromo.com" data-hid="og:url">
    <meta name="robots" content="all" data-hid="robots">
    <meta name="og:type" property="og:type" data-hid="og:type" content="website" description="website">

    <link description="favicon.ico" rel="icon" external="true" keyid="7217" href="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/assets/1591297900931.ico" filestring="" extension="css" deffer="true">
    <link isbootstrap="true" tagtype="link" description="Bootstrap Theme" href="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/assets/bootstrap/1666708587160.min.css" rel="stylesheet" settings="[object Object]" keyid="8895" deffer="true">
    <link rel="canonical" href="https://mpowerpromo.com" deffer="true">

    <link rel="stylesheet" href="css/app.ebfd82b.css">
    <link rel="stylesheet" href="css/app.70a48db.css">
    <link rel="stylesheet" href="css/0.2f84e95.css">
    <link rel="stylesheet" href="css/unsaved-box-item.92cca3c.css">

    <link description="fontawesome.min.css" rel="stylesheet" external="true" keyid="9202" href="https://fa.mpowerpromo.com/css/all.css" extension="css" deffer="true" data-body="true">
    <link description="Google Fonts - Roboto" rel="stylesheet" external="true" keyid="5242" href="https://fonts.googleapis.com/css?family=Roboto:400,700" extension="css" deffer="true" data-body="true">

    <style>
        .dropdown:hover .dropdown-menu {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            text-align: center;
            margin-top: 0.1rem;
            border-radius: 0;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            border: 0;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

    </style>

    @vite('resources/css/app.css')
</head>

<body>
    <div id="app">
        @yield('content')
    </div>

    @vite('resources/js/app.js')

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>

    {{-- <script>
        $(document).ready(function() {
            $('.dropdown-toggle').hover(function() {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').addClass('show');
            }, function() {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').removeClass('show');
            });
        });
    </script> --}}
</body>

</html>
