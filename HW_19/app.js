// 1
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}

// 2
const vm = (standartVersion) => {
  const history = [];
  const versionSplit = (standartVersion || "0.0.1").split(".");
  const versionArr = [0, 0, 0];

  let version = versionArr.map((el, i) =>
    versionSplit[i] ? +versionSplit[i] : 0
  );

  if (version.some((item) => Number.isNaN(item))) {
    throw new Error("Error occured while parsing version!");
  }

  return {
    major() {
      history.push(version);
      version = [version[0] + 1, 0, 0];
      return this;
    },
    minor() {
      history.push(version);
      version = [version[0], version[1] + 1, 0];
      return this;
    },
    patch() {
      history.push(version);
      version = [version[0], version[1], version[2] + 1];
      return this;
    },
    release() {
      return version.join(".");
    },
    rollback() {
      if (history.length) {
        version = history.pop(version);
        return this;
      }
      throw new Error("Cannot rollback!");
    },
  };
};
