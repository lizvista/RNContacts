'use strict';
const e = {};

const createGoogleUrl = (address) => {
  const googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  const q = encodeURIComponent(address);
  return googleUrl + q;
};

const getCoordinates = (json) => {
  
  const def = { 'lat': 0, 'lng': 0 };
  if (typeof json === 'undefined' || json == null) return def;

  const results = json.results[0];
  if (typeof results === 'undefined' || results == null) return def;

  const geo = results.geometry;
  if (typeof geo === 'undefined' || geo == null) return def;

  const loc = geo.location;
  if (typeof loc === 'undefined' || loc == null) return def;

  return loc;
};

// Returns a promise containing Coordinates for address passed into it
e.getLocation = (address) => {
  const url = createGoogleUrl(address);

  console.log(url);

  return fetch(url)
  .then(res => res.json())
  .then(json => getCoordinates(json))
  .catch(err => console.error(err));
};

module.exports = e;