const add = (a, b) => a + b;

const memoized = {};

const memoizeOne = (fn) => {
  return (...args) => {
    if (memoized[args]) {
      console.log("cache", memoized[args]);
    } else {
      const res = fn(...args);
      memoized[args] = res;
      console.log("fun call", res);
    }
  };
};

const memoizeAdd = memoizeOne(add);

memoizeAdd(1, 2);
memoizeAdd(1, 2);
memoizeAdd(2, 1);
memoizeAdd(3, 4);
console.log(memoized);

const flattening = (arr, flattendArr) => {
  arr.forEach((item) => {
    Array.isArray(item)
      ? flattening(item, flattendArr)
      : flattendArr.push(item);
  });
  return flattendArr;
};

const arr = [1, 2, [1, 2, 3, [3, 4, 5]], { test: 10 }, 8, 9];

console.log(flattening(arr, []));

const fullStar = "★★★★★☆☆☆☆☆";
const hollowStar = "";

const rating = 3;

console.log(fullStar.slice(0, rating) + fullStar.slice(6, 6 + (5 - rating)));

const debounce = (fn, t) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const throttle = (fn, t) => {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, t);
  };
};

const throttle1 = (fn, t) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= t) {
      lastCall = now;
      fn(...args);
    }
  };
};
