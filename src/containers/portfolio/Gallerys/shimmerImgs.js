import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ShimmerImgDataEvent } from "../database2";
import { ShimmerImgData } from "../database";

const ShimmerImgFunc = ({ className, title, subTitle, isEventPage }) => {
  const shimmerData = isEventPage ? ShimmerImgDataEvent : ShimmerImgData;

  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      closable={true}
      backdropDuration={300}
      addClass="custom-lightbox"
    >
      {shimmerData.length > 0 &&
        shimmerData.map((item, i) => (
          <a
            key={i}
            href={`/assets/images${item.img}`}
            data-src={`/assets/images${item.img}`}
            data-sub-html={
              title || subTitle
                ? `<h3>${title || ""}</h3><p>${subTitle || ""}</p>`
                : ""
            }
            className="gallery-item"
          >
            <div className={className}>
              <div className="overlay">
                <div className="border-portfolio">
                  <div className="overlay-background">
                    <i aria-hidden="true" className="fa fa-plus"></i>
                  </div>
                  <img
                    alt=""
                    className="img-fluid blur-up lazyload"
                    src={`/assets/images${item.img}`}
                  />
                </div>
              </div>
              {title && (
                <div className="portfolio-text">
                  <h3 className="head-text">{title}</h3>
                  <h6 className="head-sub-text">{subTitle}</h6>
                </div>
              )}
            </div>
          </a>
        ))}
    </LightGallery>
  );
};

export default ShimmerImgFunc;
