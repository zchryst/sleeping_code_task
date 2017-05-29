console.log("Don't let the bed bugs byte");

var currentLayer = 1;
var clientName = "Tim";

$(document).ready(function() {
  $('.clientName').html(clientName)
  $('#page1').show();

  $('.page').on('click', '.continue', nextLayer)
  $('.page').on('click', '.skip', nextLayer)
  $('.page').on('click', '.submit', nextLayer)
  $('.page').on('click', '.previous', previousLayer)

  $('.wrapper').on('click', '.picture-btn', changePictureRadio);

  $('.star').on('click', shineStars)
});

function changePictureRadio(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  $(this).find('input').prop('checked', true);
  $(this).closest('fieldset').find('.picture-btn').each(checkRadios)
  var $page = $(this).closest('.page')
  changeContinueBtn($page);
}

function checkRadios() {
  if ($(this).find('input').prop('checked')) {
    $(this).closest('.picture-btn').addClass('selected')
  } else {
    $(this).closest('.picture-btn').removeClass('selected')
  }
}

function changeContinueBtn($page) {
  $page.find('.full-btn').addClass('btn-ready')
}

function nextLayer() {
  showLayer(1)
}

function previousLayer() {
  showLayer(-1)
}

function shineStars() {
  var $page = $(this).closest('.page')
  var rating = parseInt($(this).find('input').val());
  $('.star').each(function() {
    if ($(this).find('input').val() <= rating) {
      $(this).addClass('starred');
    } else {
      $(this).removeClass('starred');
    }
  })
  changeContinueBtn($page);
}

function showLayer(move){
  var newLayer = currentLayer + move;
  hideLayer(currentLayer);
	$('#page' + newLayer).show();
	currentLayer = newLayer;
}

function hideLayer(lyr){
	$('#page' + lyr).hide();
}
