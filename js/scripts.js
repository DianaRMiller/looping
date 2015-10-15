$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var blanks = ["flavor1","flavor2","flavor3"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#favorites").show();

    event.preventDefault();

  });

});
