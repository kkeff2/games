import { highNumbers } from "./constants";

const getRandomNumberFromList = (list: number[]) =>
  list[Math.floor(Math.random() * list.length)];

const getGameHighNumbers = (highNumberAmount: number) => {
  const gameHighNumber: number[] = [];
  for (let i = 0; i < highNumberAmount; i++) {
    const availableHighNumber = highNumbers.filter(
      num => !gameHighNumber.includes(num)
    );
    gameHighNumber.push(getRandomNumberFromList(availableHighNumber));
  }
  return gameHighNumber;
};

export const createNumbersGameNumbers = (highNumberAmount: number) => {
  const gameNumbers = getGameHighNumbers(highNumberAmount);
  for (let i = 0; gameNumbers.length < 6; i++) {
    gameNumbers.push(Math.floor(Math.random() * 10) + 1);
  }
  return gameNumbers;
};
