import styles from "./filter.module.css";

interface Props {
  payload: string;
  setPayload: (value: string) => void;
}

export default function Filter({ payload, setPayload }: Props) {
  return (
    <div className={styles["input-container"]}>
      <input
        data-testid="filter-input"
        type="text"
        id="input"
        className={styles["input-text"]}
        placeholder="Filter podcasts..."
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
      />
    </div>
  );
}
