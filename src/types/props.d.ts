type ButtonConfigs = {
  value: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

type CalculatorState = {
  currentNum: string;
  previousNum: string;
  operation: string | null;
  isNewNumber: boolean;
};
