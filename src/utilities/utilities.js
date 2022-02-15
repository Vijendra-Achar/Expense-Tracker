export const createNewExpenseId = (numberOfCharacters = 8) => {
  const { alphabetUpperCase, alphabetLowerCase } = getAlphabets();

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const consolidatedArray = [...alphabetLowerCase, ...alphabetUpperCase, ...numbers];

  let newId = "";

  Array.from(Array(numberOfCharacters)).forEach(() => {
    const index = Math.floor(Math.random() * consolidatedArray.length);
    newId = newId + `${consolidatedArray[index]}`;
  });

  return newId;
};

const getAlphabets = () => {
  // Generate Uppercase values
  const alphaUpperCase = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabetUpperCase = alphaUpperCase.map((x) => String.fromCharCode(x));

  // Generate Lowercase values
  const alphaLowerCase = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabetLowerCase = alphaLowerCase.map((x) => String.fromCharCode(x));

  return { alphabetUpperCase, alphabetLowerCase };
};
