// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
const calAge = birthYear => 2037 - birthYear;

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4]);
// max = 3
// max = 7
const amplitute = calcTempAmplitude(temperatures);
console.log(amplitute);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplituteNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplituteNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const data1 = [17, 21, 23];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days...`;
  }
  console.log('...', str);
};
printForecast(data1);
