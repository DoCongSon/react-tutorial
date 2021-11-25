import React from "react";
import styles from "./heading.module.css";
// styles là 1 object chứa các className đã được mã hoá

export default function Heading() {
  return <h1 className={styles.heading}>this is a Heading</h1>;
}
