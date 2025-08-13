const Title = (props) => {
  return (
    <div className="adopt-title-container">
      <h1
        className={
          props.classOption ? `adopt-title ${props.classOption}` : "adopt-title"
        }
      >
        <span
          className={
            props.title.length < 18
              ? "adopt-title-text"
              : props.title.length < 23
                ? "adopt-title-text title-long"
                : "adopt-title-text title-xlong"
          }
        >
          {props.title.toUpperCase()}
        </span>
      </h1>
    </div>
  );
};

export default Title;
