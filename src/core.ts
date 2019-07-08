import { highNumbers } from "./constants";

const getRandomNumberFromList = (list: number[]) =>
  list[Math.floor(Math.random() * list.length)];

const createGameHighNumbers = (highNumberAmount: number) => {
  const gameHighNumber: number[] = [];
  for (let i = 0; i < highNumberAmount; i++) {
    const availableHighNumber = highNumbers.filter(
      num => !gameHighNumber.includes(num)
    );
    gameHighNumber.push(getRandomNumberFromList(availableHighNumber));
  }
  return gameHighNumber;
};

const getRandomSmallNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomHighNumber = () => highNumbers[Math.floor(Math.random() * 3)];

export const createNumbersGameNumbers = (highNumberAmount: number) => {
  const gameNumbers = createGameHighNumbers(highNumberAmount);
  // Add low numbers 1-10 until 6 numbers total
  for (let i = 0; gameNumbers.length < 6; i++) {
    gameNumbers.push(getRandomSmallNumber());
  }
  return gameNumbers;
};

const isSmallNumber = (number: number) => number <= 10;

export const getNumberRandomizer = (number: number): (() => number) =>
  isSmallNumber(number) ? getRandomSmallNumber : getRandomHighNumber;
