export function LeftImageColumn(props) {
  const handleIndexClick = (e) => props.setActiveIndex(+e.target.dataset.index);
  const mapper = [0, 1, 2];

  return (
    <div
      className={
        props.leftClicked
          ? "rescue-page-side-images left clicked"
          : "rescue-page-side-images left"
      }
    >
      {mapper.map((i) =>
        props.images[i] ? (
          <div className="rescue-page-side-image-container" key={i}>
            <img
              onClick={handleIndexClick}
              src={props.images[i]}
              alt="missing"
              data-index={i}
              className={
                i === props.activeIndex
                  ? "rescue-page-side-image rescue-page-current-hero"
                  : "rescue-page-side-image"
              }
            />
          </div>
        ) : (
          <div className="rescue-page-side-image-container" key={i}>
            <div className="rescue-page-side-image rescue-page-none" />
          </div>
        ),
      )}
    </div>
  );
}

export function RightImageColumn(props) {
  const handleIndexClick = (e) => props.setActiveIndex(+e.target.dataset.index);
  const mapper = [3, 4, 5];

  return (
    <div
      className={
        props.rightClicked
          ? "rescue-page-side-images right clicked"
          : "rescue-page-side-images right"
      }
    >
      {mapper.map((i) =>
        props.images[i] ? (
          <div className="rescue-page-side-image-container" key={i}>
            <img
              onClick={handleIndexClick}
              src={props.images[i]}
              alt="missing"
              data-index={i}
              className={
                i === props.activeIndex
                  ? "rescue-page-side-image rescue-page-current-hero"
                  : "rescue-page-side-image"
              }
            />
          </div>
        ) : (
          <div className="rescue-page-side-image-container" key={i}>
            <div className="rescue-page-side-image rescue-page-none" />
          </div>
        ),
      )}
    </div>
  );
}
