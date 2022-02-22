(function () {
    var $ = (window.$ = {});
    $.web = 'google';
    var url = 'baidu.com';
    $.getUrl = function () {
        return url;
    };
}.bind(window)());

// let 块作用域
{
    let $ = (window.$ = {});
    $.web = 'google';
    let url2 = 'baidu.com(let)';
    $.getUrl2 = function () {
        return url2;
    };
}
