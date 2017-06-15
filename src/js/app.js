console.log('HOT DAMN');

let offset = 0;

$(() => {
  if($('*[data-location]').length > 0) getWeather();
  getShopping();

  $('button').on('click', () => {
    offset += 10;
    getShopping();
  });
});

function getWeather() {
  const location = $('.data').data('location');
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

function getShopping(){

  const data = $('.data').data('category');
  data.offset = offset;
  //p class (where data will print)
  const $categories = $('.categories');

  $.ajax({
    //controller
    url: '/shopstyle',
    //method
    method: 'GET',
    data: data
  })
  .then((data) => {

    console.log(data);

    if(data.length < 10) $('button').hide();

    for(let i = 0; i < data.products.length; i++){
      //prepend not html because it is a JSON string?
      $categories.append(`
          <div class="product">
            <div>
              <a href="${data.products[i].clickUrl}" target="_blank"><img src="${data.products[i].image.sizes.Best.url}"></a>
              <div class="brandName"><h5>${data.products[i].brandedName}</h5></div>
            </div>
          </div>
      `);

    }


  });
}
