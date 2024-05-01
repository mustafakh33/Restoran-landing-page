// $(window).scroll(function () {
//   if ($(this).scrollTop() > 45) {
//       $('.navbar').addClass('sticky-top shadow-sm');
//   } else {
//       $('.navbar').removeClass('sticky-top shadow-sm');
//   }
// });



window.onscroll = function(){
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    document.getElementById('navbar').classList.add('scrolled');
  }else{
    document.getElementById('navbar').classList.remove('scrolled');
  }
}