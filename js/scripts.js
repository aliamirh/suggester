$(document).ready(function(){
  $("#answers form").submit(function(event){
    $('#answers').show();
    event.preventDefault();
    var favoriteDay = parseInt($("#favoriteDay").val());
    var operating = parseInt($("#operating").val());
    var games = parseInt($("#games").val());
    var car = parseInt($("#car").val());
    var transportation = parseInt($("#transportation").val());

    var add = favoriteDay + operating + games + car + transportation;

    if( add < 5){
      $(".javascript").show();
      $(".python").show();
      $(".csharp").show();
    }

    else if ( add >=5 && score <7){
      $(".javascript").hide();
      $(".python").show();
      $(".csharp").hide();
    }

    else if (add >=7 && score <13){
      $(".javascript").show();
      $(".python").hide();
      $(".csharp").hide();
    }

    else if ( add >=13 && score <20){
      $(".javascript").hide();
      $(".python").hide();
      $(".csharp").show();
    }

  });
});
