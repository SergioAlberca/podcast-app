import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles["lds-container"]} data-testid="loading">
      <div className={styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
