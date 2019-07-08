import React, {useEffect, useRef, useState} from "react";
import "./start.css";
import { useOnMount } from "../../hooks/useOnMount";
import { getNumberRandomizer } from "../../core";
import { GameState } from "./index";

interface StartProps {
  gameNumbers: number[];
  setGameState: (gameState: GameState) => void;
}

interface RandomNumberBoxProps {
  number: number;
  numberRandomizer: (number: number) => number;
  timeToShowNumber: number;
}

// interface RandomNumberBoxState {
//   shownNumber: number;
//   shouldShowRandomNumber: boolean;
// }
//
// class RndNmr extends React.Component<
//   RandomNumberBoxProps,
//   RandomNumberBoxState
// > {
//   public constructor(props: RandomNumberBoxProps) {
//     super(props);
//     this.state = {
//       shownNumber: props.numberRandomizer(),
//       shouldShowRandomNumber: true
//     };
//   }
//
//   public componentDidMount(): void {
//     setTimeout(() => {
//       console.log("number", this.props.number);
//       console.log("timeToShowNumber", this.props.timeToShowNumber);
//       this.setState({ shouldShowRandomNumber: false });
//     }, this.props.timeToShowNumber);
//   }
//
//   public componentDidUpdate(): void {
//     if (this.state.shouldShowRandomNumber) {
//       setTimeout(() => {
//         console.log("IN THE SETIMEOUT", this.props.number);
//         this.setState({ shownNumber: this.props.numberRandomizer() });
//       }, 100);
//     } else {
//       this.setState({ shownNumber: this.props.number });
//     }
//   }
//
//   public render() {
//     return (
//       <div className="Start-game-number-box">
//         <span
//           onClick={() =>
//             this.setState({ shownNumber: this.props.numberRandomizer() })
//           }
//         >
//           {this.state.shownNumber}
//         </span>
//       </div>
//     );
//   }
// }

const RandomNumberBox = ({
  number,
  numberRandomizer,
  timeToShowNumber
}: RandomNumberBoxProps) => {
  const [numberShown, setNumberShown] = useState<number>(numberRandomizer());
  const shouldShowRandomNumber = useRef(true);

  const showCorrectNumber = () => {
    setTimeout(() => {
      console.log("number", number);
      console.log("timeToShowNumber", timeToShowNumber);
      shouldShowRandomNumber.current = false;
    }, timeToShowNumber);
  };
  const showRandomNumber = () => {
    if (shouldShowRandomNumber.current) {
      setTimeout(() => {
        console.log("IN THE SETIMEOUT", number);
        setNumberShown(numberRandomizer(numberShown));
      }, 100);
    } else {
      setNumberShown(number);
    }
  };
  useOnMount(showCorrectNumber);
  useEffect(showRandomNumber);
  return (
    <div className="Start-game-number-box">
      <span onClick={() => setNumberShown(numberRandomizer())}>
        {numberShown}
      </span>
    </div>
  );
};

export const Start = ({ gameNumbers, setGameState }: StartProps) => {
  console.log(setGameState);
  const gameNumberBoxesElement = () =>
    [gameNumbers[0]].map((number, index) => (
      <RandomNumberBox
        key={index}
        number={number}
        numberRandomizer={getNumberRandomizer(number)}
        timeToShowNumber={5000 + index * 1000}
      />
    ));
  return <div className="Start-game-numbers">{gameNumberBoxesElement()}</div>;
};
