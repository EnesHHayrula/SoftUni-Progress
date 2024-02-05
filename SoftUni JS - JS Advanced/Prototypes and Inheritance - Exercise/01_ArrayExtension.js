(function solution() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function () {
    const results = [];
    for (let index = n; index < this.length; index++) {
      results.push(this[index]);
    }
    return results;
  };
  Array.prototype.take = function (n) {
    const results = [];
    for (let index = 0; index < n; index++) {
      results.push(this[index]);
    }
    return results;
  };
  Array.prototype.sum = function () {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
      sum += this[index];
    }
    return sum;
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();
