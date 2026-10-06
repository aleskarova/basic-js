const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renamedFiles = [];
  const filesCount = {};

  for (const name of names) {
    const count = filesCount[name] ?? 0;
    const newName = count > 0 ? `${name}(${count})` : name;
    renamedFiles.push(newName);
    filesCount[name] = count + 1;
    filesCount[newName] = 1;
  }

  return renamedFiles;
}

renameFiles(["doc", "doc", "image", "doc(1)", "doc"]);

module.exports = {
  renameFiles,
};
