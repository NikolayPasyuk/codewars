const conferencePicker = (citiesVisited, citiesOffered) =>
  citiesOffered.find(city => !citiesVisited.includes(city)) ||
  'No worthwhile conferences this year!';
