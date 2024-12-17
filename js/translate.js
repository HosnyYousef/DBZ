
  
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

//Reference:
// https://www.w3schools.com/howto/howto_google_translate.asp


// DARKmode 'Select Langauge' menu
const run = () => {
  let frame = document.querySelector(".VIpgJd-ZVi9od-xl07Ob-OEVmcd")
  const styleTag = document.createElement("style");
  styleTag.textContent = "body *{ background-color: black !important; color: white !important; }";
  frame.contentDocument.head.appendChild(styleTag);
}
// 1 second 
setTimeout(run, 1000);
