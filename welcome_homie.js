const getWelcome = name => {
  return () => {
    return `Hi, ${name}!`
  } 
}

const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');

greetHomie(); // Hi, Homie!
greetFco(); // Hi, Fco!