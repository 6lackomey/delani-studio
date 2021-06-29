$().ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });

    $('#design-prt').click(function(){
        $('#design-image').slideUp();
        $('#design').slideDown();
      });
      $('#design-prt').click(function(){
        $('#design').toggle('slow').hide();
        $('#design-image').show();
      });

      $("#product-image").click(function(){
        $("#product-image").fadeOut('1500').hide('1000');
        $("#product").show('1500');
      });
      $("#product").click(function(){
        $("#product").fadeOut('1500');
        $("#product-image").slideDown('1500');
      });