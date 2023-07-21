import cs from "classnames";
import { FC } from "react";

import styles from "@/components/form/textarea/textarea.module.pcss";

type TextareaProps = {
  name: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  textError?: string;
};
export const Textarea: FC<TextareaProps> = ({
  name,
  placeholder = "",
  className = "",
  error,
  textError,
}) => {
  return (
    <div className={styles.row}>
      <textarea
        className={cs(styles.textarea, {
          [className]: className,
          [styles.error]: error,
        })}
        name={name}
        placeholder={placeholder}
      ></textarea>
      <p className={styles.errorMessage}>{textError}</p>
    </div>
  );
};
