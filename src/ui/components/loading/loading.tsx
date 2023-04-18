import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles["lds"]} data-testid="loading">
      <div className={styles["lds__roller"]}>
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
