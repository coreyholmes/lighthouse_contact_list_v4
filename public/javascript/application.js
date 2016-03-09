 $(function () {

    // --------------------------------
    // ------------ EXTRAS ------------
    // --------------------------------

    // Modal
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })

    // Shows contact form
    $("#add-contact").on('click', function() {
      $('#main-title').slideToggle(500);
      $(".add-contact-form").slideToggle(500);
    });

    // $(".yellow-btn-lg").on('click', function() {
    //   $('#main-title').slideToggle(500);
    //   $(".add-contact-form").slideToggle(500);
    // });

    $("#phone-button").on('click', function() {
      $("#home-screen").slideToggle(500);
      $("#touch-unlock").slideToggle(500);
    });

    // --------------------------------
    // ------------ SEARCH ------------
    // --------------------------------

    $('#search-results-area').hide();

    // Attach a submit handler to the form
    $( "#searchForm" ).on('click', function() {
      $('#search-results-area').slideToggle(500);
    $( "#searchForm" ).keyup(function(event) {
        // alert("Worked");
      });
    });

    $('#search-results-area').focusout(function() {
      $('#search-results-area').slideToggle(500);
    })


      // Stop form from submitting normally
      // event.preventDefault();
     
      // Get some values from elements on the page:
      // var $form = $( this ),
      //   term = $form.find( "input[name='s']" ).val(),
      //   url = $form.attr( "action" );
     
      // Send the data using post
      // var posting = $.post( url, { s: term } );
     
      // Put the results in a div
      // posting.done(function( data ) {
      //   var content = $( data ).find( "#content" );
      //   $( "#result" ).empty().append( content );
      // });
   


    // -------------------------------------------
    // ------------ VIEW ALL CONTACTS ------------
    // -------------------------------------------

    // Ajax request for all Contacts
    var contacts = $('#all_contacts');
    contacts.one('click', function () {
      $.ajax({
        url: '/contact',
        method: 'GET', 
        dataType: 'json',     
        success: function (data) {
          $('#all_contacts').hide();
          getContacts(data);
          $('#all_contacts').slideDown(500);
        }
      })
    });

    // Call to display Contacts information
    function getContacts(data) {
      var table = $("#results").find('tbody').empty();
      for ( var i in data ) {
      var tr = $("<tr>").appendTo(table);
      var full_name = data[i].first_name + " " + "<b>" + data[i].last_name + "</b>";
      $('<td>').html(full_name).appendTo(tr);
      }
      $('tr').on('click', function() {
      // alert($(this).text());
      $('#modal').trigger( "click" );
      })
    }

    // --------------------------------------------
    // ------------ CREATE NEW CONTACT ------------
    // --------------------------------------------

    $('.new-contact-confirm').hide();
    // Attach a submit handler to the form
    $( "#new_contact" ).submit(function( event ) {
 
      // Stop form from submitting normally
      event.preventDefault();
     
      // Get some values from elements on the page:
      var form = $( this ),
        first_name = form.find( "input[name='first_name']" ).val(),
        last_name = form.find( "input[name='last_name']" ).val(),
        company = form.find( "input[name='company']" ).val(),
        email = form.find( "input[name='email']" ).val(),
        phone = form.find( "input[name='phone']" ).val(),
        url = form.attr( "action" );
     
      // Send the data using post
      var posting = $.post( url, { 
          first_name: first_name,
          last_name: last_name,
          company: company,
          email: email,
          phone: phone
        });
     
      // Put the results in a div
      posting.done(function( data ) {
        var content = $( data ).find( "#content" );
        $('.new-contact-confirm').slideDown(300);
        $( "#contact_saved" ).empty().html( "<i class='zmdi zmdi-check'></i> " + data.first_name + " was added successfully!" );
          setTimeout(function() {
            $("#contact_saved").fadeOut(300);
          },3500);
          $('#new_contact')[0].reset();
        console.log(data);
      });
    });


  }); // Document Ready