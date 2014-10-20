$(function(){
  var $table = $('#tbl');
  var row = 10;
  var col = 10;
  var start = 0;

  for (var i = 0; i<row; i++) {
    var $tr = $('<tr>');
    for(var j=0; j<col; j++){
      $tr.append($('<td>')
        .text(i*col+j+start)
        .css({
          width: "3em",
          height: "3em"
        })
        .on('click',function(){
          $(this).toggleClass('hide');
        })
      );
    }
    $table.append($tr);
  };
});
