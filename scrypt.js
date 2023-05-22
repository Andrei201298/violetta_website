window.addEventListener('scroll', function() {
    const objects = document.getElementsByClassName('name');
    const objects2 = document.getElementsByClassName('description');
    const delay = 250;


    for (let i = 0; i < objects.length; i++) {
      (function (index) {
        setTimeout(function() {
          if (window.scrollY >= 1200) {
            objects[index].style.transform = 'translateX(-725px)';
            objects2[index].style.transform = 'translate(-715px)';
          } else {
            objects[objects.length-index-1].style.transform = 'translate(-50%, 0px)';
            objects2[objects.length-index-1].style.transform = 'translate(-150%, 0px)';
          }
        }, delay + (index*250));
      })(i);
    }

});


function moveShape1() {
  var shape = document.querySelector('#shape_1');
  var div = document.querySelector('#shapes');
  var divWidth = div.offsetWidth - 50;
  var divHeight = div.offsetHeight - 100;

  var startX = Math.random() < 0.5 ? 0 : divWidth;
  var startY = Math.floor(Math.random() * divHeight);
  var endX = startX === 0 ? divWidth : 0;
  var endY = Math.floor(Math.random() * divHeight);

  var randomRotation = Math.floor(Math.random() * 360);

  shape.style.transform = 'translate(' + startX + 'px, ' + startY + 'px) rotate(' + randomRotation + 'deg)';

  setTimeout(function () {
    shape.style.transform = 'translate(' + endX + 'px, ' + endY + 'px) rotate(' + randomRotation + 'deg)';
  }, 10);
}

moveShape1();
setInterval(moveShape1, 4000);

function moveShape2() {
  var shape = document.querySelector('#shape_2');
  var div = document.querySelector('#shapes');

  var divWidth = div.offsetWidth - 20;
  var divHeight = div.offsetHeight - 20;

  var startX = Math.random() < 0.5 ? 0 : divWidth;
  var startY = Math.floor(Math.random() * divHeight);
  var endX = startX === 0 ? divWidth : 0;
  var endY = Math.floor(Math.random() * divHeight);

  var randomRotation = Math.floor(Math.random() * 360);

  shape.style.transform = 'translate(' + startX + 'px, ' + startY + 'px) rotate(' + randomRotation + 'deg)';

  setTimeout(function () {
    shape.style.transform = 'translate(' + endX + 'px, ' + endY + 'px) rotate(' + randomRotation + 'deg)';
  }, 10);
}
moveShape2();
setInterval(moveShape2, 4000);

function moveShape3() {
  var shape = document.querySelector('#shape_3');
  var div = document.querySelector('#shapes');

  var divWidth = div.offsetWidth - 120;
  var divHeight = div.offsetHeight - 100;

  var startX = Math.random() < 0.5 ? 0 : divWidth;
  var startY = Math.floor(Math.random() * divHeight);
  var endX = startX === 0 ? divWidth : 0;
  var endY = Math.floor(Math.random() * divHeight);

  var randomRotation = Math.floor(Math.random() * 360);

  shape.style.transform = 'translate(' + startX + 'px, ' + startY + 'px) rotate(' + randomRotation + 'deg)';

  setTimeout(function () {
    shape.style.transform = 'translate(' + endX + 'px, ' + endY + 'px) rotate(' + randomRotation + 'deg)';
  }, 10);
}
moveShape3();
setInterval(moveShape3, 4000);