var map;
     var marker;
     var infoWindow;
      var markers = [
              {
                position: {lat: 32.551445, lng: 35.89314},
                title: 'Irbid,Jordan',
                info: 'This Is A lovely City '
              },
              
              {
              position: {lat: 32.48592, lng:  36.00816},
              title: 'alhouson',
               info:'Traditional Ciy'
                  
              },
              
              {
              position: {lat: 32.55873, lng: 36.00816},
              title: 'Al-Ramtha',
                  info:' Ciy'
              }
              
          ];
      function initMap()  {
           
          map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 32.551445, lng: 35.851479},
  zoom: 11
});
    
          markers.forEach(function(loc){
             
    marker= new google.maps.Marker({
   
      position: loc.position,
       title: loc.title,
        map :map
        
  });
              
   infoWindow = new google.maps.InfoWindow({
        content: loc.info
    });
          marker.addListener('click', function(){
              infoWindow.open(map,markers);
          })
          
      });
      }
          
     
