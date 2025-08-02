import { useEffect } from "react";
import "./Popup.css";

function Popup(props) {
  useEffect(() => {
    let timeLimit;
    if (!props.isError) {
      timeLimit = 3400;
    } else {
      timeLimit = 1400;
    }
    const timer = setTimeout(() => {
      props.setShowPopup(false);
      props.setError(false);
    }, timeLimit);
    return () => {
      clearTimeout(timer);
    };
  }, [props.showPopup]);

  return props.showPopup ? (
    <div
      className={
        !props.isError ? "popup-container" : "popup-container popup-error"
      }
    >
      <div className="popup">
        {/* <button className="popup-btn" onClick={() => props.setShowPopup(false)}>
          <i className="fas fa-xmark" />
        </button> */}
        <p className="popup-text">{props.text}</p>
        {/* {props.children} */}
      </div>
    </div>
  ) : null;
}

export default Popup;
