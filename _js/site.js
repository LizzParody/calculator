$(document).ready(function(){
$('header').hide().slideDown(1500);


$('#calculate-sum').click(function(){
var suma1 = $('#sum1').val();
var suma2 = $('#sum2').val();
var sum = Calculator.add(Number(suma1), Number(suma2));
$('#result1').text(sum);
});

$('#calculate-product').click(function(){
var product1 = $('#multiply1').val();
var product2 = $('#multiply2').val();
var product = Calculator.multiply(Number(product1), Number(product2));
$('#result2').text(product);
});

$('#calculate-subtraction').click(function(){
var resta1 = $('#subtract1').val();
var resta2 = $('#subtract2').val();
var subtraction = Calculator.substraction(Number(resta1), Number(resta2));
$('#result3').text(subtraction);
});

$('#calculate-division').click(function(){
var div1 = $('#divide1').val();
var div2 = $('#divide2').val();
var division = Calculator.division(Number(div1),  Number(div2));
$('#result4').text(division);
});

$('#calculate-square-root').click(function(){
var raiz = $('#raiz-cuadrada').val();
var raizCuadrada = Calculator.raiz_cuadrada(Number(raiz));
$('#result5').text(raizCuadrada);
});

$('#calculate-exponential').click(function(){
var pow1 = $('#exp1').val();
var pow2 = $('#exp2').val();
var  exponential = Calculator.exponential(Number(pow1), Number(pow2));
$('#result6').text(exponential);
});

});
