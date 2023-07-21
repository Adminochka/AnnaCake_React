import cs from "classnames";
import { FC } from "react";

import styles from "@/components/form/input/input.module.pcss";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  textError?: string;
};

export const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  className = "",
  error,
  textError,
}) => {
  return (
    <div className={styles.row}>
      <input
        className={cs(styles.input, {
          [className]: className,
          [styles.error]: error,
        })}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <p className={styles.errorMessage}>{textError}</p>
    </div>
  );
};
