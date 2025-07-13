export default function RescuePageImageColumn(props) {
  const handleIndexClick = (e) => props.setActiveIndex(+e.target.dataset.index);

  return (
    <div className="rescue-page-side-images">
      {props.images.length < 4 ? (
        <>
          <div className="rescue-page-side-image-container">
            <div className="rescue-page-side-image rescue-page-none" />
          </div>

          <div className="rescue-page-side-image-container">
            <div className="rescue-page-side-image rescue-page-none" />
          </div>

          <div className="rescue-page-side-image-container">
            <div className="rescue-page-side-image rescue-page-none" />
          </div>
        </>
      ) : props.images.length === 4 ? (
        props.images.slice(3).map((i, index) => (
          <>
            <div className="rescue-page-side-image-container" key={i}>
              <img
                onClick={handleIndexClick}
                src={i}
                alt="missing"
                data-index={index + 3}
                className={
                  index + 3 === props.activeIndex
                    ? "rescue-page-side-image rescue-page-current-hero"
                    : "rescue-page-side-image"
                }
              />
            </div>
            <div className="rescue-page-side-image-container">
              <div className="rescue-page-side-image rescue-page-none" />
            </div>
            <div className="rescue-page-side-image-container">
              <div className="rescue-page-side-image rescue-page-none" />
            </div>
          </>
        ))
      ) : props.images.length === 5 ? (
        props.images.slice(3).map((i, index) => (
          <>
            <div className="rescue-page-side-image-container" key={i}>
              <img
                onClick={handleIndexClick}
                src={i}
                alt="missing"
                data-index={index + 3}
                className={
                  index + 3 === props.activeIndex
                    ? "rescue-page-side-image rescue-page-current-hero"
                    : "rescue-page-side-image"
                }
              />
            </div>
            {index + 3 === 4 ? (
              <div className="rescue-page-side-image-container">
                <div className="rescue-page-side-image rescue-page-none" />
              </div>
            ) : null}
          </>
        ))
      ) : (
        props.images.slice(3).map((i, index) => (
          <div className="rescue-page-side-image-container" key={i}>
            <img
              onClick={handleIndexClick}
              src={i}
              alt="missing"
              data-index={index + 3}
              className={
                index + 3 === props.activeIndex
                  ? "rescue-page-side-image rescue-page-current-hero"
                  : "rescue-page-side-image"
              }
            />
          </div>
        ))
      )}
    </div>
  );
}
