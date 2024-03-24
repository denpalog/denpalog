import styles from "./index.module.css";

export interface FieldSetProps {
  title: string;
  children?: React.ReactNode;
}

export function FieldSet({ title, children }: FieldSetProps) {
  return (
    <fieldset>
      <legend className={`${styles.fieldSetTitle}`}>{title}</legend>
      {children}
    </fieldset>
  );
}
