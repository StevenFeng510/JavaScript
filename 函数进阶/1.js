(function () {
  function hd() {
    console.log("1.js-hd");
  }
  function show() {
    console.log("1.js-show");
  }
  window.js1 = { hd, show };
})(window);

{
  let hd = function hd() {
    console.log("1.js-hd");
  };
  let show = function show() {
    console.log("1.js-show");
  };
  window.js1 = { hd, show };
}
