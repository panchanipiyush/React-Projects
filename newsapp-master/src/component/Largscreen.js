import React from "react";

const Largscreen = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="card mb-3">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://mcdn.wallpapersafari.com/medium/49/28/vDFNZl.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By <strong>{author ? author : "unknown"}</strong> on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
        </div>
      </div>
    </>
  );
};
export default Largscreen;
