window.addEventListener('scroll', function() {
    const objects = document.getElementsByClassName('name');
    const objects2 = document.getElementsByClassName('description');
    const delay = 700;


    for (let i = 0; i < objects.length; i++) {
      (function (index) {
        setTimeout(function() {
          if (window.scrollY >= 1200) {
            objects[i].style.transform = 'translateX(-720px)';
            objects2[i].style.transform = 'translate(-710px)';
          } else {
            objects[i].style.transform = 'translate(-50%, 0px)';
            objects2[i].style.transform = 'translate(-150%, 0px)';
          }
        }, delay + (index*1000));
      })(i);
    }

});