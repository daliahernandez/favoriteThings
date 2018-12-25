$(document).ready(function(){
  $('#userAnswer').submit(function(event){
  var answerOne = $('input#qOne').val();
  var answerTwo = $('input#qTwo').val();
  var answerThree = $('input#qThree').val();

  var array = [];
  array.push(answerOne,answerTwo, answerThree);
  var elementOne = array[0]
  var elementTwo = array[1]
  var elementThree = array[2]

  array.push("hi there");
  $('#array').text(array)
  event.preventDefault();
});
});
