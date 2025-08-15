export const performCalculation = (prev: number, current: number, operation: string) => {
  switch (operation) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return current;
  }
};
export const initialData: CalculatorState = {
  currentNum: "0", // 현재 입력되는 숫자
  previousNum: "", // 이전에 입력된 숫자
  operation: null, // 현재 선택된 연산자
  isNewNumber: true, // 새로운
};
