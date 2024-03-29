function extensibleObject() {
  //TODO:
  const obj = {
    extend: function (template) {
      for (const parentProp of Object.keys(template)) {
        const templateElement = template[parentProp];
        
        if (typeof templateElement === "function") {
          Object.getPrototypeOf(obj)[parentProp] = templateElement;
        } else {
          obj[parentProp] = templateElement;
        }
      }
    },
  };

  return obj;
}

const myObj = extensibleObject();


const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);
console.log(JSON.stringify(myObj));
