$(document).ready(function(){

var rows = 16;
var columns = 16;
var blockheight = (500  - columns) / columns;
var blockwidth = (500  - rows) / rows;

function draw_grid(){
  for(var i = 0;i<rows;i++){
    $('.container').append("<div class='row'></div>")
  }
  for(var x = 0;x<columns;x++){
    $(".row").append("<div class='column'></div>");
  }
  $(".column").width(blockwidth);
  $(".column").height(blockheight);
  darken();
};
draw_grid();

$('.newgrid').click(function(){
  $('.container').empty();
  var x = prompt("Height of New Grid","0");
  columns = parseInt(x);
  var y = prompt("Width of New Grid","0");
  rows = parseInt(y);
  blockheight = (500  - columns) / columns;
  blockwidth = (500  - rows) / rows;
  draw_grid();
});

function darken(){
$('.column').mouseover(function(){
  $(this).css("background-color","black");
});
};

$('.cleargrid').click(function(){
  $('.column').css("background-color","blue");
});

});
