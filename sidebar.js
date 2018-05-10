$('.cardtitle').click(function(){
  var content = $(this).siblings();
  if(content.attr('id') === 'open'){
    $(this).css('color', '#885E7F');
    content.removeAttr('id');
  } else{
    $(this).css('color', '#FFF');
    content.attr('id', 'open');
  }
});
