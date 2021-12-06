function sumDivs(num) {
  let total = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) total = total + i;
  }
  return total;
}

function isPrime(num) {
  let flag = 1;
  if (num === 1) {
    flag = 0;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = 0;
      break;
    }
  }
  return flag;
}

//1.soru
function findPrime(...nums) {
  let prime = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i]) == 1) prime.push(nums[i]);
  }
  return prime;
}

console.log(findPrime(3, 5));
console.log(findPrime(2, 5, 8, 21, 13));

//arkadaş sayılar
//220: 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
//284:  1 + 2 + 4 + 71 + 142 = 220

function isFriendly(...nums) {
  function isEqual(num1, num2) {
    var res = sumDivs(num1) === num2 && sumDivs(num2) === num1;
    return res;
  }

  var numbers = `${nums[0]} ve ${nums[1]}`;

  var res = isEqual(nums[0], nums[1])
    ? `${numbers} arkadaş sayılardır`
    : `${numbers} arkadaş sayı değillerdir`;
  return res;
}

var x = isFriendly(220, 284);
console.log(x);

//3.soru
function isPerfect(num) {
  var res = sumDivs(num) == num ? true : false;
  return res;
}

function listPerfect() {
  let perfectList = [];
  for (let i = 1; i <= 1000; i++) {
    if (isPerfect(i)) perfectList.push(i);
  }
  return perfectList;
}

console.log(listPerfect());

//4. soru
function listPrime() {
  let primeList = [];
  for (let i = 1; i <= 1000; i++) {
    if (isPrime(i)) primeList.push(i);
  }
  return primeList;
}

console.log(listPrime());
