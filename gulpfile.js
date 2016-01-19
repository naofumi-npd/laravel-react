var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
require('laravel-elixir-babelify');
 
 


elixir(function(mix) {
    mix.sass('app.scss');
});

elixir(function(mix) {
    mix.babelify('index.js');
});


elixir(function(mix) {
    mix.version(['css/app.css', 'js/index.js']);
});

