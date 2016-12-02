var  ngrok = require('ngrok'),
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
};

gulp.task('webserver', function () {
    browserSync(config, function (err, bs) {
       ngrok.connect({
                proto: 'http', // http|tcp|tls 
                addr: bs.options.get('port'), // port or network address 
            }, function (err, url) { 
                gutil.log('[ngrok]', ' => ',config.port);
            });         
    });         
});