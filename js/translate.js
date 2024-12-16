
  
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

//Reference:
// https://www.w3schools.com/howto/howto_google_translate.asp

// attempt to change google translate menu button to darkmode:

// $('document').ready(function () {
//   $('#google_translate_element').on("click", function () {

//       // Change font family and color
//       $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
//           .css({
//               'color': '#687074',
//               'font-family': 'tahoma'
//           });

//       // Change hover effects
//       $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
//           $(this).css('background-color', '#18BA9B').find('span.text').css('color', 'black');
//       }, function () {
//           $(this).css('background-color', 'black').find('span.text').css('color', '#687074');
//       });

//       // Change Google's default blue border
//       $("iframe").contents().find('.VIpgJd-ZVi9od-xl07Ob-OEVmcd').css('border', '1px solid #18BA9B');

//       // Change the iframe's box shadow
//       $(".VIpgJd-ZVi9od-xl07Ob-OEVmcd").css({
//           '-moz-box-shadow': '0 3px 8px 2px #666666',
//           '-webkit-box-shadow': '0 3px 8px 2px #666',
//           'box-shadow': '0 3px 8px 2px #666',
//           'background-color': 'rgb(0, 0, 0)'
//       });
//   });
// });

