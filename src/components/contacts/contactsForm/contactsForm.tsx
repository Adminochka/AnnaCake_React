import { Button } from "@/components/button/button";
import styles from "@/components/contacts/contactsForm/contactsForm.module.pcss";
import { Input } from "@/components/form/input/input";
import { Textarea } from "@/components/form/textarea/textarea";

export const ContactsForm = () => {
  return (
    <form className={styles.form} action="">
      <div className={styles.row}>
        <Input type="text" name="name" placeholder="Ваше имя *" />
        <Input type="text" name="email" placeholder="Ваш e-mail *" />
      </div>

      <div className={styles.row}>
        <Textarea
          name="message"
          placeholder="Не стесняйтесь, отправте сообщение"
        />
      </div>

      <div>
        <Button className={styles.btn} text="Отправить" red={true} />
      </div>

      <div className={styles.text}>
        Отправляя сообщение, вы соглашаетесь с &nbsp;
        <a className={styles.link} href="#">
          политикой конфиденциальности
        </a>
        &nbsp; .
      </div>
    </form>
  );
};
