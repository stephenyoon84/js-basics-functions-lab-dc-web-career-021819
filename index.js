// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(hq - someValue);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(depart, arrive) {
  return Math.abs(depart - arrive) * 264
}

function calculatesFarePrice(depart, arrive) {
  dist = distanceTravelledInFeet(depart, arrive)
  switch(true) {
    case dist <= 400:
      return 0;
    case dist <= 2000:
      return (dist - 400) * 0.02;
    case dist <= 2500:
      return 25;
    case dist > 2500:
      return 'cannot travel that far'
  }
}
