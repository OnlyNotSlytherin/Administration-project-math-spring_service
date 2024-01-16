$('#arifm_progr').on('click', function () {
  var start = parseInt($('input[name="start"]').val());
  var step = parseInt($('input[name="step"]').val());
  var count = parseInt($('input[name="count"]').val());

  console.log(count);

  var numbers = [start];
  var number = start;

  for (i = 1; i < count; i++) {
    number = number + step;
    numbers.push(number);
  }

  $('#arifm_progr_result').empty();
  $('#arifm_progr_result').append('Результат: ');

  numbers.forEach(function (number) {
    $('#arifm_progr_result').append(`${number} `);
  });
});

$('#select-figure').on('change', function () {
  var selected = $('#select-figure').val();

  $('.figure').hide();

  $(`#${selected}`).show();

});