$(document).ready(function(){
    var ipleft = 0;
    var userIP = 100;
    var repSlot = 1;
    var repIP1 = 0;
    var repIP2 = 0;
    var repIP3 = 0;
    var repIP4 = 0;

    $('#rep1').hide();
    $('#rep2').hide();
    $('#rep3').hide();
    $('#rep4').hide();

    $("#name").hide();
    $("#personsName").click(function(){
        $("#nameInput").hide();
        $('#personsName').hide();
        $("#name").show();
    });

    $("#nameInput").keypress(function(e){
      var key = e.which;
      if(key == 13)
      {
        $("#nameInput").hide();
        $('#personsName').hide();
        $("#name").show();
      }
    });


    function updater(){
      $('#mainIP').width(ipVal + "%");
      $('#mainIP').attr('aria-valuenow', ipVal);
      $('#ipNum').html(ipVal + "%");
      $('#ipLeft').html(ipleft.toString() + "% " + 'Left');
      $('#leftIP').width(ipleft.toString() + "%");
      $('#leftIP').attr('aria-valuenow', ipleft.toString());
      $('#ipNumLeft').html(ipleft.toString() + "%");
      $('#repIP1').width(repIP1.toString() + "%");
      $('#rep1Label').html(repIP1.toString() + "%");
      $('#repIP1').attr('aria-valuenow', repIP1.toString());
      $('#repIP2').width(repIP2.toString() + "%");
      $('#rep2Label').html(repIP2.toString() + "%");
      $('#repIP2').attr('aria-valuenow', repIP2.toString());
      $('#repIP3').width(repIP3.toString() + "%");
      $('#rep3Label').html(repIP3.toString() + "%");
      $('#repIP3').attr('aria-valuenow', repIP3.toString());
      $('#repIP4').width(repIP4.toString() + "%");
      $('#rep4Label').html(repIP4.toString() + "%");
      $('#repIP4').attr('aria-valuenow', repIP4.toString());
    }


    $("#youDown").click(function(){
      if (userIP > 0 ){
        userIP = parseInt($('#mainIP').attr('aria-valuenow'));
        userIP -= 5;
        ipleft += 5;
        ipVal = userIP.toString();
        updater();
      };
  });
    $("#youUp").click(function(){
      if (ipleft > 0){
        userIP += 5;
        ipleft -= 5;
        ipVal = userIP.toString();
        updater();
    };
});


  $('#addFirst').click(function(){repSlot = 1;  })
  $('#addSecond').click(function(){repSlot = 2;  })
  $('#addThird').click(function(){repSlot = 3;  })
  $('#addFourth').click(function(){repSlot = 4;  })


  $('#firstUp').click(function(){
    repIP1 = parseInt($('#repIP1').attr('aria-valuenow'));
    if (ipleft > 0){
      repIP1 += 5;
      ipleft -= 5;
      updater();
    }
  })
  $('#firstDown').click(function(){
  if (repIP1 > 0){
    repIP1 -= 5;
    ipleft += 5;
    updater();
  }
});

$('#secondUp').click(function(){
  repIP1 = parseInt($('#repIP1').attr('aria-valuenow'));
  if (ipleft > 0){
    repIP2 += 5;
    ipleft -= 5;
    updater();
  }
})
$('#secondDown').click(function(){
if (repIP2 > 0){
  repIP2 -= 5;
  ipleft += 5;
  updater();
}
});
$('#thirdUp').click(function(){
  repIP1 = parseInt($('#repIP1').attr('aria-valuenow'));
  if (ipleft > 0){
    repIP3 += 5;
    ipleft -= 5;
    updater();
  }
})
$('#thirdDown').click(function(){
if (repIP3 > 0){
  repIP3 -= 5;
  ipleft += 5;
  updater();
}
});
$('#fourthUp').click(function(){
  repIP1 = parseInt($('#repIP1').attr('aria-valuenow'));
  if (ipleft > 0){
    repIP4 += 5;
    ipleft -= 5;
    updater();
  }
})
$('#fourthDown').click(function(){
if (repIP4 > 0){
  repIP4 -= 5;
  ipleft += 5;
  updater();
}
});




  $('#closer1').click(function(){
    $("#rep1").hide();
    $("#addFirst").show();
    ipleft += repIP1;
    updater();
  });
  $('#closer2').click(function(){
    $("#rep2").hide();
    $("#addSecond").show();
    ipleft += repIP2;
    updater();
  });
  $('#closer3').click(function(){
    $("#rep3").hide();
    $("#addThird").show();
    ipleft += repIP3;
    updater();
  });
  $('#closer4').click(function(){
    $("#rep4").hide();
    $("#addFourth").show();
    ipleft += repIP4;
    updater();
  });

  $('#addNew').click(function(){
    if (repSlot == 1){
        $('#rep1').show();
        $('#addFirst').hide();    };
    if (repSlot == 2){
        $('#rep2').show();
        $('#addSecond').hide();    };
    if (repSlot == 3){
        $('#rep3').show();
        $('#addThird').hide();    };
    if (repSlot == 4){
        $('#rep4').show();
        $('#addFourth').hide();    };

    var name = $('#nameText').val();
    var domain = $('#dmn').val();
    var party = $('#pty').val();
    $('#nameText').val('');
    $('#dmn').val('General');
    $('#pty').val('Unspecified');
    $('#rep' + repSlot + 'NameSlot').html("Rep. " + name);
    $('#rep' + repSlot + 'DmnSlot').html(domain + " Advisor");
    $('#rep' + repSlot + 'PtySlot').html(party);
});

});
