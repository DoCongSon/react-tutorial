import styles from "./button.module.css";
import clsx from "clsx";
import React from "react";

export default function Button({ content, primary, disabled }) {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
      })}
    >
      {content}
    </button>
  );
}
