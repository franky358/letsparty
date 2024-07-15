import React, { useRef, useEffect } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "./custom-lightgallery.css"; // Importa tu CSS personalizado
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ParedImgData } from "../database";
import { ParedImgDataEvent } from "../database2";

const ParedImgFunc = ({ className, title, subTitle, isEventPage }) => {
  const lightGalleryRef = useRef(null);
  const wallData = isEventPage ? ParedImgDataEvent : ParedImgData;

  const handleClose = () => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.closeGallery();
    }
  };

  useEffect(() => {
    const handleOpen = () => {
      const closeButton = document.createElement("button");
      closeButton.innerText = "Cerrar";
      closeButton.classList.add("lg-custom-close");
      closeButton.onclick = handleClose;

      const lgContainer = document.querySelector(".lg-current .lg");
      if (lgContainer) {
        lgContainer.appendChild(closeButton);
      }
    };

    document.addEventListener("lgAfterOpen", handleOpen);

    return () => {
      document.removeEventListener("lgAfterOpen", handleOpen);
    };
  }, []);

  return (
    <LightGallery
      onInit={(detail) => {
        lightGalleryRef.current = detail.instance;
      }}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      closable={true}
      backdropDuration={300}
      addClass="custom-lightbox"
    >
      {wallData.length > 0 &&
        wallData.map((item, i) => (
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

export default ParedImgFunc;
