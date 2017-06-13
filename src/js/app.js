console.log('HOT DAMN');

$(() => {
  if($('*[data-location]').length > 0) getWeather();
});

function getWeather() {
  const location = $('h3').data('location');
  const $weather = $('.weather');

  console.log(location);

  $.ajax({
    url: '/weather',
    method: 'GET',
    data: location
  })
  .then((data) => {
    $weather.html(`<strong>${data.currently.temperature} ºC </strong>${data.currently.summary}`);
  });
}
//
// function getEvents(){
//   //same as getWeather function (same location)
//   const location = $('h3').data('location');
//   //p class (where data will print)
//   const $events = $('.events');
//
//   $.ajax({
//     //controller
//     url: '/events',
//     //method
//     method: 'GET',
//     //longitue and latitude specified by data-location
//     data: location
//   })
//     .then((data) => {
//
//       //the latitude and longitude of location turned into JSON string and then sent to events.js, sent to Skiddle, then receive event results still in JSON
//
//       //show events in array in console log (find key-value pairs)
//       console.log(data.results);
//
//       //loop through events (index)
//       for(let i = 0; i < data.results.length; i++){
//         //prepend not html because it is a JSON string?
//         $events.prepend(`
//         <br><u>${data.results[i].eventname}</u><br>
//
//         ${data.results[i].venue.name}<br>
//
//         ${data.results[i].venue.town}<br>
//
//         ${data.results[i].venue.type}<br>
//
//         ${data.results[i].description}<br>
//
//         <a href="${data.results[i].link}" target="_blank">More Info</a><br>`
//       ); //Skiddle link for each event result :)
//
//       }
//
//     });
// }
