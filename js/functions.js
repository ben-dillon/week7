$(function() {

  $("#resizable1").resizable({
    animate:true
  })
  $( "#selectable1" ).selectable({
    filter: "li:nth-last-child(2)"
  })
  $( "#sortable1" ).sortable();

    $("#sortable2, #sortable3").sortable({
      connectWith: "#sortable2, #sortable3"
    })

});
