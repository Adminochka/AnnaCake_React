import { FC } from "react";

import styles from "@/components/author/author.module.pcss";

type AuthorProps = { text: string; img: string };

export const Author: FC<AuthorProps> = ({ text, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <figure className={styles.phrase}>
          <blockquote className={styles.text}>{text}</blockquote>
          <figcaption className={styles.name}>Анна Шишкина</figcaption>
        </figure>
        <div className={styles.avatar}>
          <img className={styles.avatarImg} src={img} alt="author Anna" />
        </div>
      </div>
    </div>
  );
};
