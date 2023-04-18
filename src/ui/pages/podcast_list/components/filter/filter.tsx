import styles from "./filter.module.css";

interface Props {
  podcastLength: number;
  payload: string;
  setPayload: (value: string) => void;
}

export default function Filter({ payload, setPayload, podcastLength }: Props) {
  return (
    <div className={styles["filter"]}>
      <span className={styles["filter__quantity"]}>{podcastLength}</span>
      <input
        data-testid="filter-input"
        type="text"
        id="input"
        className={styles["filter__input"]}
        placeholder="Filter podcasts..."
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
      />
    </div>
  );
}
