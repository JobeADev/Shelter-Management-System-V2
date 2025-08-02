const Title = (props) => {
  return (
    <div className="adopt-title-container">
      <h1
        className={
          props.classOption ? `adopt-title ${props.classOption}` : "adopt-title"
        }
      >
        <span className="adopt-title-text">{props.title.toUpperCase()}</span>
      </h1>
    </div>
  );
};

export default Title;
