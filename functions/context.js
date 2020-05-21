// This will just extract the current location for others to access
let location = {};
const context = (arg) => {
  location = arg;
};
const returnContext = () => {
  return location;
};
module.exports = {
  con: context,
  returnCon: returnContext
}
;
