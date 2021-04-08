function addListener(type, handler) {
  const keyNames = type.toLowerCase().split("+");
  let bundleOfKeys = [];
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    bundleOfKeys.push(e.key.toLowerCase());
    if (
      keyNames.includes(e.key) === bundleOfKeys.includes(e.key) &&
      bundleOfKeys.join("+") === keyNames.join("+")
    ) {
      handler();
    }
  });
  document.addEventListener("keyup", (e) => {
    e.preventDefault();
    const key = e.key.toLowerCase();
    if (bundleOfKeys.includes(key)) {
      bundleOfKeys.splice(bundleOfKeys.indexOf(key), 1);
    }
  });
}

addListener("P", function () {
  console.log("Hello, world");
});
addListener("Control+P", function () {
  console.log("Hello, world!!!");
});
addListener("Shift+i+o", function () {
  console.log("Hi!!");
});