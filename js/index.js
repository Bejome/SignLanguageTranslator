//hide the translated div at the page load
$('#translated-row').hide();

//scroll to the main functionality from landing page on click of button
$('#translate-info').click(function() {
    var scrollDistance = $('#lead').next().offset().top+40;
    $('html, body').animate({
        scrollTop: scrollDistance  + 'px'
    }, 300);
});

//translate words to asl
$('#btn-translate').click(function(){
  $('#translated-row').hide();
  textToTranslate = document.getElementById("input-text").value.replace("?"," ").replace("'","").replace("."," ").replace(","," ")+" ";
  textArray = textToTranslate.split(" ");
  aslHtml="";
  wordsSupported=["hello","how","are","you","fine","thank","thanks","oh","excuse","me","heres","my","bus","goodbye","hi","and","just","where","going","to","the","library","ok","ill","see","later","so","long"];
  inValid=[];
  //check for and invalid words
  for(const word of textArray){
    if(word!="" && wordsSupported.indexOf(word.toLowerCase())<0){
      inValid.push(word);
      break;
    }
  }

  //if no invalid words
  if(inValid.length==0){
    for(const word of textArray){
      switch(word.toLowerCase().trim()){
        case "hello": aslHtml = aslHtml + "<img src=\"images/hello.png\"  class=\"translate-img\">";break;
        case "how": aslHtml = aslHtml + "<img src=\"images/how.png\"  class=\"translate-img\">";break;
        case "are": aslHtml = aslHtml + "<img src=\"images/are.png\"  class=\"translate-img\">";break;
        case "you": aslHtml = aslHtml + "<img src=\"images/you.png\"  class=\"translate-img\">";break;
        case "fine": aslHtml = aslHtml + "<img src=\"images/fine.png\"  class=\"translate-img\">";break;
        case "thank": aslHtml = aslHtml + "<img src=\"images/thank.png\"  class=\"translate-img\">";break;
        case "thanks": aslHtml = aslHtml + "<img src=\"images/thanks.png\"  class=\"translate-img\">";break;
        case "oh": aslHtml = aslHtml + "<img src=\"images/oh.png\"  class=\"translate-img\">";break;
        case "excuse": aslHtml = aslHtml + "<img src=\"images/excuse.png\"  class=\"translate-img\">";break;
        case "me": aslHtml = aslHtml + "<img src=\"images/me.png\"  class=\"translate-img\">";break;
        case "heres": aslHtml = aslHtml + "<img src=\"images/heres.png\"  class=\"translate-img\">";break;
        case "my": aslHtml = aslHtml + "<img src=\"images/my.png\"  class=\"translate-img\">";break;
        case "bus": aslHtml = aslHtml + "<img src=\"images/bus.png\"  class=\"translate-img\">";break;
        case "goodbye": aslHtml = aslHtml + "<img src=\"images/goodbye.png\"  class=\"translate-img\">";break;
        case "hi": aslHtml = aslHtml + "<img src=\"images/hi.png\"  class=\"translate-img\">";break;
        case "and": aslHtml = aslHtml + "<img src=\"images/and.png\"  class=\"translate-img\">";break;
        case "just": aslHtml = aslHtml + "<img src=\"images/just.png\"  class=\"translate-img\">";break;
        case "where": aslHtml = aslHtml + "<img src=\"images/where.png\"  class=\"translate-img\">";break;
        case "going": aslHtml = aslHtml + "<img src=\"images/going.png\"  class=\"translate-img\">";break;
        case "to": aslHtml = aslHtml + "<img src=\"images/to.png\"  class=\"translate-img\">";break;
        case "the": aslHtml = aslHtml + "<img src=\"images/the.png\"  class=\"translate-img\">";break;
        case "library": aslHtml = aslHtml + "<img src=\"images/library.png\"  class=\"translate-img\">";break;
        case "ok": aslHtml = aslHtml + "<img src=\"images/ok.png\"  class=\"translate-img\">";break;
        case "ill": aslHtml = aslHtml + "<img src=\"images/ill.png\"  class=\"translate-img\">";break;
        case "see": aslHtml = aslHtml + "<img src=\"images/see.png\"  class=\"translate-img\">";break;
        case "later": aslHtml = aslHtml + "<img src=\"images/later.png\"  class=\"translate-img\">";break;
        case "so": aslHtml = aslHtml + "<img src=\"images/so.png\"  class=\"translate-img\">";break;
        case "long": aslHtml = aslHtml + "<img src=\"images/long.png\"  class=\"translate-img\">";break;
      }
    }
    document.getElementById("translatedAsl").innerHTML=aslHtml;
    $('#translated-row').show();
  }
  //if invalid words show a alert message
  else{
    var words="";
    for(const word of inValid){
      words = words + "<b>"+word + "</b>, ";
    }
    $('#translated-row').show();
    document.getElementById("translated-row").style.border="none";
    document.getElementById("translatedAsl").innerHTML=aslHtml+"<div class=\"alert alert-danger\" role=\"alert\">"+"The word(s) "+words.trimEnd(",")+" cannot be translated by our system. Please use the words from the sentences mentioned.</div>";
  }
});

//clear the user input field on click of clear
$('#btn-clear').click(function(){
  $('#translated-row').hide();
  document.getElementById("input-text").value="";
  document.getElementById("translatedAsl").innerHTML="";
});
