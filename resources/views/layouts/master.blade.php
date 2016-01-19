<!DOCTYPE html>
<html>
    <head>
        <title>App Name - @yield('title')</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    </head>
    <body>
        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
