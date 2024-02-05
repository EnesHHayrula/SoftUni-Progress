(function solution() {
  //ensure start
  String.prototype.ensureStart = function (str) {
    const actrualStr = this.toString();
    if (!actrualStr.startsWith(str)) {
      return `${str}${actrualStr}`;
    }
    return actrualStr;
  };
  //ensure end
  String.prototype.ensureEnd = function (str) {
    const actrualStr = this.toString();
    if (!actrualStr.endsWith(str)) {
      return `${str}${actrualStr}`;
    }
    return actrualStr;
  };

  //is empty
  String.prototype.isEmpty = function () {
    return this.toString().length === 0;
  };
  //truncate
  String.prototype.truncate = function (n) {
    const ELLIPSIS = "...";
    let SINGLE_POINT = ".";
    const strValue = this.toString();
    if (n < 3) {
      return SINGLE_POINT.repeat(n);
    }
    if (strValue.length <= n) {
      return strValue;
    }
    const lastIndex = strValue.substring(0, n - 2).lastIndexOf(" ");
    if (lastIndex !== -1) {
      return `${strValue.substr(0, lastIndex)}${ELLIPSIS}`;
    }
    return `${strValue.substr(0, n - 3)}${ELLIPSIS}`;
  };

  //format
  String.format = function (string, ...params) {
    let str = string;
    for (let i = 0; i < params.length; i++) {
      let index = str.indexOf(`{${i}}`);
      while (index !== -1) {
        str = str.replace(`{${i}}`, params[i]);
        index = str.indexOf(`{${i}}`);
      }
    }

    return str;
  };
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");
