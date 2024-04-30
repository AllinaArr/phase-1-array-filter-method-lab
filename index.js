// Code your solution here
function findMatching(names, arg) {
  return names.filter((mathes) => mathes.toLowerCase() === arg.toLowerCase());
}

function fuzzyMatch(names, arg) {
  return names.filter(
    (mathes) => mathes.toLowerCase().indexOf(arg.toLowerCase()) === 0
  );
}

function matchName(names, arg) {
  return names.filter((record) => record.name === arg);
}
