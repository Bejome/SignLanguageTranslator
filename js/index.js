$("#translated-row").hide();
$('#translate-info').click(function() {
    var scrollDistance = $('#lead').next().offset().top;
    $('html, body').animate({
        scrollTop: scrollDistance + 'px'
    }, 600);
});
$('#btn-translate').click(function(){
  textToTranslate = document.getElementById("input-text").value+" "
  textArray = textToTranslate.split(" ");
  aslHtml="";
  for(const word of textArray){
    switch(word.toLowerCase().trim()){
      case "hello": aslHtml = aslHtml + "<img src=\"images/hello.png\"  class=\"translate-img\">" + " "
    }
  }
  document.getElementById("translatedAsl").innerHTML=aslHtml;
  $("#translated-row").show();
});
