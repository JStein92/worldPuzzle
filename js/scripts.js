//backend
function replaceVowel(char){
  if (char === "a" || char === "e" ||char === "i"||char === "o"||char === "u"){
    return char = ('-');
  }
  else {
    return char;
  }
}

function toggleShow(){
  $('#output').toggle();
  $('form').toggle();
}

$(function(){

  $('form').submit(function(e){
    e.preventDefault();
    var userString = $('#userString').val();
    var puzzleString = '';
    for (var i = 0; i < userString.length; i++) {
      puzzleString += replaceVowel(userString[i]);
    }
    $('#output p').text(puzzleString);
    toggleShow();
  });

  $('#reset').click(function(){
    toggleShow();
    $('#userString').val('');
  });

});
