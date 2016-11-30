# browserSync-ngrok_starter-kit
browserSync,ngrok,gulp
<h1>Танслируем свой локальный проект в WEB</h1>

Отличный способ трансилровать свой проект развернутый на локальном хосте с использованем browserSync в WEB.

<h2>Итак поехали:</h2>

1. Качаем главного героя,сервер ngrok<br>
https://ngrok.com/download<br>
По ссылке сам сервер.
<br>
2. Для удобства положим его в директорию для бинарных файлов к примеру:<br>
<code>C:\Program Files\ngrok</code> (да,я пользуюсь виндой ребята)
<br>
3. Опять же, для удобства, добавим сам ngrok в переменную PATH:<br>
Быстрый способ это открыть терминал и выполнить от админа:<br>
<code>path %PATH%;C:\Program Files\ngrok</code><br> 
Этой командой мы добавим путь <code>C:\Program Files\ngrok</code><br> 
в конец существующего списка каталогов для поиска исполняемых файлов.<br>
Выполните команду <code>path</code> чтобы убедиться,что все сделано правильно.<br>
Теперь,команда ngrok доступна глобально в нашем терминале.
<br>
4.Затем,добавим ngrok к нашему существующему проекту в виде npm пакета<br>
  <code>npm install ngrok --save-dev</code><br>
5.Установим browserSync если его еще нет по каким-то причинам.
<br>
<code>npm install -g browser-sync --save-dev</code><br>
6.Пропишем в gulp файл необходимые конфиги:<br>
<code><pre>var   ngrok = require('ngrok'), 
            gulp = require('gulp'),
            browserSync = require('browser-sync'),
            gutil = require('gutil');
var config = {
    server: {
        baseDir: "assets"
    },
    //tunnel: true,
    host: 'localhost',
    port: 8080,
    directoryListing: true,
    logPrefix: ''
};</pre>
<pre>
gulp.task('webserver', function () {
    browserSync(config, function (err, bs) {
       ngrok.connect({
                proto: 'http', // http|tcp|tls 
                addr: bs.options.get('port'), // port or network address 
            }, function (err, url) { 
                gutil.log('[ngrok]', 'start on port',port);
            });         
    });         
});<pre></code><br>
7. Запускаем<br>
<code>ngrok http 8080</code><br>
Затем. <code>gulp webserver</code><br>
ngrok вернет в терминале внешний адресс что то типа <code>http://fbg678.ngrok.io</code><br>
Готово!теперь можно транслировать свой фронт на внешний адрес.
