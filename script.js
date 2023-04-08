$(document).ready(function(){
   $('button').click(function(){
    $('.hide').click(function(){
        $('p').hide('slow');
    });
    $('.show').click(function(){
        $('p').show('fast');
    });
    $('.an').click(function(){
        $('p').toggle('slow');
    });
   });
   var solike=0;
   $('#like').click(function(){
    solike++;
    $('#like span').text(solike);
   })
   var solike=0;
   $('#like1').click(function(){
    solike--;
    $('#like1 span').text(solike);
   })
});