const LeftArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -5 5 10"
      className={props.sideOfShow}
    >
      <path d="M 0 0 L 5 -5 L 5 -3 L 2 0 L 5 3 L 5 5 Z" fill="#000000" />
    </svg>
  );
};

const RightArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 5 10"
      className={props.sideOfShow}
    >
      <path
        d="M 0 0 L -5 -5 L -5 -3 L -2 0 L -5 3 L -5 5 L 0 0"
        fill="#000000"
      />
    </svg>
  );
};

const LeftContextArrows = (props) => {
  return (
    <>
      <p className="show-arrow-text">{props.clicked ? "hide" : "show"}</p>
      {props.clicked ? (
        <LeftArrow sideOfShow={props.sideOfShow} />
      ) : (
        <RightArrow sideOfShow={props.sideOfShow} />
      )}
      <p className="show-arrow-text">images</p>
    </>
  );
};

const RightContextArrows = (props) => {
  return (
    <>
      <p className="show-arrow-text">{props.clicked ? "hide" : "show"}</p>
      {props.clicked ? (
        <RightArrow sideOfShow={props.sideOfShow} />
      ) : (
        <LeftArrow sideOfShow={props.sideOfShow} />
      )}
      <p className="show-arrow-text">images</p>
    </>
  );
};

export default function ContentArrows(props) {
  return (
    <>
      {props.side === "left" ? (
        <LeftContextArrows
          clicked={props.clicked}
          sideOfShow={props.sideOfShow}
        />
      ) : (
        <RightContextArrows
          clicked={props.clicked}
          sideOfShow={props.sideOfShow}
        />
      )}
    </>
  );
}
