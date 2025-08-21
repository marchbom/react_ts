import { useState } from "react";
import styles from "../ButtonGroup.module.css";
import classNames from "classnames/bind";

export default function ButtonGroup({
  initialButtons,
}: {
  initialButtons: {
    id: number;
    label: string;
    icon: string;
    isDisabled: boolean;
  }[];
}) {
  const cx = classNames.bind(styles);
  const initialActive: { [key: string]: boolean } = {};
  const [isActive, setIsActive] = useState(initialActive);
  initialButtons.forEach((button) => {
    initialActive[button.id] = false;
  });
  const handleToggleActive = (id: number, isDisabled: boolean) => {
    if (isDisabled) return;
    setIsActive((isActive) => ({
      ...isActive,
      [id]: !isActive[id],
    }));
  };

  const activeCount = Object.values(isActive).filter(Boolean).length;
  const handleResetActive = () => {
    const resetActiveState: { [key: string]: boolean } = {};
    initialButtons.forEach((button) => {
      initialActive[button.id] = false;
    });
    setIsActive(resetActiveState);
  };

  return (
    <>
      <div>
        <h1>active count : {activeCount}</h1>
        {initialButtons.map((button) => (
          <button
            key={button.id}
            className={cx("button", {
              active: isActive[button.id],
              disabled: button.isDisabled,
              highlight: button.id === 2,
            })}
            onClick={() => handleToggleActive(button.id, button.isDisabled)}
          >
            {button.icon} {button.label}
          </button>
        ))}
      </div>
      <button className={cx("button")} onClick={handleResetActive}>
        Reset
      </button>
    </>
  );
}
