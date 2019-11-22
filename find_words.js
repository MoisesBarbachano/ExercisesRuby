const peopleNames = ["Pedro", "Maria", "Rosa"];
const animals = ["Caballo", "Oso", "Perro"];
const things = ["Petroleo", "Carne", "Rosca"];

const matchCoincidences = (term) => {
  let words = [];
  let allWords = peopleNames.concat(animals, things);

  allWords = allWords.map(word => word.toLowerCase());
  partLowerCase = term.toLowerCase();
  words = allWords.filter(word => word.includes(partLowerCase));

  return words;
}

find_coincidences("ros");