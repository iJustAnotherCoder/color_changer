<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.3.min.js">
    </script>
  </head>
  <body>
    <center><button><h1>change color</h1></button></center>
    <script>
      var colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
      ];
      var colorIdx = 0;
      $('button').click(function() {
        console.log('colorIdx is: ' + colorIdx);
        $('body').css('background-color', colors[colorIdx]);
        colorIdx++;
        if (colorIdx === 7){
          colorIdx = 0;
        }els 
      });
    </script>
  </body>
</html>
