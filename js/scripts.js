var player1Turn = true;
var player2Turn = false;
// var row1 = [$("#one"),$("#two"),$("#three")];
// var row2 = [$("#four"),$("#five"),$("#six")];
// var row3 = [$("#seven"),$("#eight"),$("#nine")];
   var array = [0,1,2,3,4,5,6,7,8];
function switchTurn(){
    player1Turn=!player1Turn;
    player2Turn=!player2Turn;
}

$(function() {

  $("td").click(function() {
    $(this).unbind("click");
    if (player1Turn===true) {
      array[parseInt(this.id)-1]="Rick"
      console.log(array)
      $(this).children(".rick").show();
      switchTurn();
    }
    else if (player2Turn===true){
      array[parseInt(this.id)-1]="Morty"
      console.log(array)
      $(this).children(".morty").show();
      switchTurn();
      }
      if(array[0]===array[1]&&array[1]===array[2]){
        alert(array[0] + " wins!");
        $("td").unbind("click");
        $("#1, #2, #3").addClass("highlight");
      }if(array[3]===array[4]&&array[4]===array[5]){
        alert(array[3] + " wins!");
        $("td").unbind("click");
        $("#4, #5, #6").addClass("highlight");
      }if(array[6]===array[7]&&array[7]===array[8]){
        alert(array[6] + " wins!");
        $("td").unbind("click");
        $("#7, #8, #9").addClass("highlight");
      }if(array[0]===array[3]&&array[3]===array[6]){
        alert(array[0] + " wins!");
        $("td").unbind("click");
        $("#1, #4, #7").addClass("highlight");
      }if(array[1]===array[4]&&array[4]===array[7]){
        alert(array[1] + " wins!");
        $("td").unbind("click");
        $("#2, #5, #8").addClass("highlight");
      }if(array[2]===array[5]&&array[5]===array[8]){
          alert(array[2] + " wins!");
          $("td").unbind("click");
          $("#3, #6, #9").addClass("highlight");
      }if(array[0]===array[4]&&array[4]===array[8]){
        alert(array[0] + " wins!");
        $("td").unbind("click");
        $("#1, #5, #9").addClass("highlight");
      }if(array[2]===array[4]&&array[4]===array[6]){
          alert(array[2] + " wins!");
          $("td").unbind("click");
          $("#3, #5, #7").addClass("highlight");
        }
  });
});
