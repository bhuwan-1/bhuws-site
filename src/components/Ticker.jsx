import { TICKER } from "../constants";

export default function Ticker() {
  const row = TICKER.map((t, i) => (
    <span className="tick" key={i}>
      {t}
      <i aria-hidden="true">●</i>
    </span>
  ));
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  );
}
