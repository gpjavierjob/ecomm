import "./Loading.css";

function Loading({ width }) {
  return (
    /* From Uiverse.io by abrahamcalsin */
    <div className="dot-spinner" style={width ? { width: `${width}` } : {}}>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
  );
}

export default Loading;
