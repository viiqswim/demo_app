<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Demo Appa</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row first_row business_info">
                <div class="col-md-12 info_container"></div>
                <div class="col-md-12">
                    <div class="row pagination_options text-center">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-info prev">Prev</button>
                            <button type="button" class="btn btn-info next">Next</button>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
            <div class="row review_section"></div>
            <hr/>
            <div class="row">
                <div class="col-md-12 text-center">
                    Copyright &copy; Victor Dozal 2015
                </div>
            </div>
            <hr/>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
        <script src="js/vendor/underscore.js"></script>
        <script src="js/vendor/backbone.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="js/MainView.js"></script>
        <script src="js/ReviewSectionView.js"></script>
    </body>
</html>
