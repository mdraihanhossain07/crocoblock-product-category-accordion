// Add the css under your css file

<style>
  .jet-list-tree__parent:after {
    content: "˅";
    float: right;
    margin-right: 10px;
  }

  .jet-filter-label.noicon:after{
    content: "";
  }

  .jet-list-tree__parent {
    cursor: pointer;
  }

  .jet-filter-label.noicon {
    cursor: pointer;
  }
</style>

// Add js under your js file

<script>
  document.addEventListener('DOMContentLoaded', function() {
      makeCollapsible();
      jQuery( document ).on( 'elementor/popup/show', function( event, id, instance ) {
          if ( id ) {
              makeCollapsible();
          }
      } );
  
  
  });


  window.addEventListener( 'elementor/popup/show', function( event, id, instance ) {
      if ( id ) {
          makeCollapsible();
      }
  });


  function makeCollapsible() {
      jQuery(function($){
          $('.jet-list-tree__children:not(.collapsible-applied)').slice(0).slideUp( 
              500, 
              function() {
                  $( this ).addClass( '.collapsible-applied' );
                  $( this ).prev( '.jet-list-tree__parent' ).click(function() {
                      $(this).next().slideToggle();
                      if (!$(this).hasClass('noicon')){
                          $(this).addClass('noicon');
                      }
                      else {
                          $(this).removeClass('noicon');
                      }
                  });
              } );
      });  
  }
</script>
