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

      $("#work1").mouseover(function(){
        $("#overlay").show();
      }).mouseout(function(){
        $("#overlay").hide();
      });
      $("#work2").mouseover(function(){
        $("#overlay2").show();
      }).mouseout(function(){
        $("#overlay2").hide();
      });
      $("#work3").mouseover(function(){
        $("#overlay3").show();
      }).mouseout(function(){
        $("#overlay3").hide();
      });
      $("#work4").mouseover(function(){
        $("#overlay4").show();
      }).mouseout(function(){
        $("#overlay4").hide();
      });
      $("#work5").mouseover(function(){
        $("#overlay5").show();
      })
      .mouseout(function(){
        $("#overlay5").hide();
      })
      $("#work6").mouseover(function(){
        $("#overlay6").show();
      })
      .mouseout(function(){
        $("#overlay6").hide();
      })
      $("#work7").mouseover(function(){
        $("#overlay7").show();
      })
      .mouseout(function(){
        $("#overlay7").hide();
      })
      $("#work8").mouseover(function(){
        $("#overlay8").show();
      })
      .mouseout(function(){
        $("#overlay8").hide();
      });

      $("form#form34A").submit(function(event){
        // event.preventDefault();
        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
      });
    });