const peopleNames = ["Pedro", "Maria", "Rosa"];
const animals = ["Caballo", "Oso", "Perro"];
const things = ["Petroleo", "Carne", "Rosca"];

const findWords = (term) => {
  let words = [];
  const allWords = peopleNames.concat(animals, things);

  partLowerCase = term.toLowerCase();
  words = allWords.filter(word => word.toLowerCase().includes(partLowerCase));

  return words;
}

findWords("Pe");