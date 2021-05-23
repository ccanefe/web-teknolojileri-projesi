var lat;

var long;

var map;

var marker;

var likya;

var manavgat;

var ölüdeniz;

var akvaryumkoy;

var uludag;

var input = prompt("Ekstrem sporları nerede yaptığımı görmek istersen sadece sporun adını yazman yeterli  {bkz: Trekking, Rafting, Yamaç Paraşütü, Dalış ya da Snowboard}");

var cities = [likya, manavgat, ölüdeniz];

likya = {
    lat: 36.682880,
    long: 30.530653,
    string: "Trekking"
}

manavgat = {
  lat: 37.135347321616244,
  long: 31.202395005107988,
  string: "Rafting"
}

ölüdeniz = {
  lat: 36.54700497467129,
  long: 29.12222695538724,
  string: "Yamaç Paraşütü"
}

akvaryumkoy = {
  lat: 36.540916708682644,
  long: 29.051019379135994,
  string: "Dalış"
}

uludag = {
  lat: 40.07194758008395,
  long: 29.221455796140138,
  string: "Snowboard"
}

function initMap() {
  if(input == likya.string) {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: likya.lat, lng: likya.long },
      zoom: 8,
    });

    marker = new google.maps.Marker({
      position: {lat: likya.lat, lng: likya.long},
      map: map,
    });

    console.log(input);
  }else if(input == manavgat.string) {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: manavgat.lat, lng: manavgat.long},
      zoom: 8,
    });

    marker = new google.maps.Marker({
      position: {lat: manavgat.lat, lng: manavgat.long},
      map: map,
    });

    console.log(input);
  }else if(input == ölüdeniz.string) {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: ölüdeniz.lat, lng: ölüdeniz.long },
      zoom: 8,
    });

    marker = new google.maps.Marker({
      position: {lat: ölüdeniz.lat, lng: ölüdeniz.long},
      map: map,
    });
    console.log(input);

  }else if(input == akvaryumkoy.string) {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: akvaryumkoy.lat, lng: akvaryumkoy.long },
      zoom: 8,
    });

    marker = new google.maps.Marker({
      position: {lat: akvaryumkoy.lat, lng: akvaryumkoy.long},
      map: map,
    });
    console.log(input);
    
  }else if(input == uludag.string) {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: uludag.lat, lng: uludag.long },
      zoom: 8,
    });

    marker = new google.maps.Marker({
      position: {lat: uludag.lat, lng: uludag.long},
      map: map,
    });
    console.log(input);

  }else {
    console.log("No city entered");
  }
}

