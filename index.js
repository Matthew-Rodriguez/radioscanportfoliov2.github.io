;(function() {

    'use strict';
  
    var element, string, length;
  
    element = document.querySelector('.errorcode');
    string  = element.innerText;
    length  = string.length;
  setTimeout(timer, 5000);
    function timer(delay, repetitions) {
      var n, i;
      
      n = 0;
      i = window.setInterval(function () {
        element.innerText = string.substring(0, n);
        if (n++ === repetitions) {
          window.clearInterval(i);
        }
      }, delay+100);
    }
    timer(300, length);
  
  })();




