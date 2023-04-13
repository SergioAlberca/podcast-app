import { useState } from "react";
import "./filter.css";

interface Props {
  payload: string;
  setPayload: (value: string) => void;
}
export default function Filter({ payload, setPayload }: Props) {
  return (
    <div className="input-container">
      <input
        type="text"
        id="input"
        className="Input-text"
        placeholder="Filter podcasts..."
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
      />
    </div>
  );
}
