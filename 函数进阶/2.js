(function (window) {
  function hd() {
    console.log('2.js-hd');
  }
  function show() {
    console.log('2.js-show');
  }
  window.js2 = { hd, show };
})(window);
