import { useState } from "react";
import CalcuratorButton from "./CalculatorButton";
import { initialData, performCalculation } from "../utils/calculatorUtils";

export default function Calculator() {
  const [calculatorState, setCalculatorState] =
    useState<CalculatorState>(initialData);

  // C를 클릭했을 때 실행되는 함수
  const handleClear = () => {
    setCalculatorState(initialData);
  };

  // 연산자를 클릭했을 때 실행되는 함수
  const handleOperator = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    const operator = e.currentTarget.value;
    // 연산기호를 두 번 클릭해도 소용없게 함
    if (calculatorState.currentNum === "" && operator) return calculatorState;

    setCalculatorState((calculatorState) => {
      const current = parseFloat(calculatorState.currentNum);

      if (calculatorState.previousNum && calculatorState.operation) {
        const prev = parseFloat(calculatorState.previousNum);
        const result = performCalculation(
          prev,
          current,
          calculatorState.operation,
        );
        return operator === "="
          ? {
              currentNum: result.toString(),
              previousNum: "",
              operation: null,
              isNewNumber: true,
            }
          : {
              currentNum: "",
              previousNum: result.toString(),
              operation: operator,
              isNewNumber: true,
            };
      } else if (operator === "=") {
        return { ...calculatorState, isNewNumber: true };
      } else {
        return {
          currentNum: "",
          previousNum: current.toString(),
          operation: operator,
          isNewNumber: true,
        };
      }
    });
  };

  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNum: calculatorState.isNewNumber
        ? value
        : calculatorState.currentNum + value,
      isNewNumber: false,
    }));
  };

  // .을 클릭했을 때 실행되는 함수
  const handleDot = () => {
    setCalculatorState((calculatorState) => {
      if (calculatorState.currentNum.includes(".")) return calculatorState;
      return {
        ...calculatorState,
        currentNum: calculatorState.currentNum + ".",
        isNewNumber: false,
      };
    });
  };

  const buttonConfigs: ButtonConfigs[] = [
    { value: "C", className: "calc-clear", onClick: handleClear },
    { value: "/", className: "calc-operator", onClick: handleOperator },
    { value: "1", className: "calc-num", onClick: handleNum },
    { value: "2", className: "calc-num", onClick: handleNum },
    { value: "3", className: "calc-num", onClick: handleNum },
    { value: "*", className: "calc-operator", onClick: handleOperator },
    { value: "4", className: "calc-num", onClick: handleNum },
    { value: "5", className: "calc-num", onClick: handleNum },
    { value: "6", className: "calc-num", onClick: handleNum },
    { value: "+", className: "calc-operator", onClick: handleOperator },
    { value: "7", className: "calc-num", onClick: handleNum },
    { value: "8", className: "calc-num", onClick: handleNum },
    { value: "9", className: "calc-num", onClick: handleNum },
    { value: "-", className: "calc-operator", onClick: handleOperator },
    { value: ".", className: "calc-dot", onClick: handleDot },
    { value: "0", className: "calc-num", onClick: handleNum },
    { value: "=", className: "calc-result", onClick: handleOperator },
  ];
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-[#1f1f1f]">
        <article className="w-[282px] border border-[#333] bg-[#ccc] p-1">
          <form
            className="grid-cols-[repeat(4, 65px)] grid auto-rows-[65px] gap-1"
            name="forms"
          >
            <input
              type="text"
              className="calc-input"
              name="output"
              readOnly
              value={calculatorState.currentNum}
            />
            {buttonConfigs.map((button) => (
              <CalcuratorButton key={button.value} {...button} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}
