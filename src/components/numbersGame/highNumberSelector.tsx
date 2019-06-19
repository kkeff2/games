import React from "react";
import "./highNumberSelector.css";

interface HighNumberOption {
  label: string;
  value: number;
}

export interface HighNumberSelectorProps {
  highNumberSelected: number;
  onHighNumberSelected: (value: number) => void;
}

export const HighNumberSelector = ({
  highNumberSelected,
  onHighNumberSelected
}: HighNumberSelectorProps) => {
  const highNumbersOptions: HighNumberOption[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 }
  ];
  const highNumbersOptionsElement = highNumbersOptions.map(
    ({ label, value }: HighNumberOption) => {
      return (
        <div key={value}>
          <label>{label}</label>
          <input
            checked={value === highNumberSelected}
            type="radio"
            onChange={() => onHighNumberSelected(value)}
          />
        </div>
      );
    }
  );
  return <div className="HighNumberSelector">{highNumbersOptionsElement}</div>;
};
