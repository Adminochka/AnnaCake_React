import cs from "classnames";
import { FC } from "react";

import styles from "@/components/button/button.module.pcss";

type ButtonProps = { text: string; className?: string; red?: boolean };
export const Button: FC<ButtonProps> = ({ text, className = "", red }) => {
  return (
    <button
      className={cs(styles.btn, {
        [className]: className,
        [styles.btnRed]: red,
      })}
      type="button"
    >
      {text}
    </button>
  );
};
