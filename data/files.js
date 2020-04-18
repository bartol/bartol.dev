const dirTree = require("directory-tree");

module.exports = async function() {
  const tree = dirTree("files/", { exclude: /(index|upload).html/ });
  return tree
};
