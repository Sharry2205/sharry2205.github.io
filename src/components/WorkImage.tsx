import { useState } from "react";
import {
  MdArrowOutward,
  MdOutlineAutoGraph,
  MdOutlineEmojiObjects,
  MdOutlineRocketLaunch,
  MdOutlineSchema,
} from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
  title?: string;
  subtitle?: string;
  sticker?: "strategy" | "gtm" | "roadmap";
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const StickerIcon = (() => {
    switch (props.sticker) {
      case "strategy":
        return MdOutlineEmojiObjects;
      case "gtm":
        return MdOutlineRocketLaunch;
      case "roadmap":
        return MdOutlineSchema;
      default:
        return MdOutlineAutoGraph;
    }
  })();

  const content = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {props.image ? (
        <img src={props.image} alt={props.alt} />
      ) : (
        <div className={`work-fallback work-fallback-${props.sticker ?? "default"}`}>
          <div className="work-fallback-sticker">
            <StickerIcon />
          </div>
          <div className="work-fallback-body">
            <div className="work-fallback-title">{props.title ?? props.alt}</div>
            {props.subtitle && (
              <div className="work-fallback-subtitle">{props.subtitle}</div>
            )}
          </div>
        </div>
      )}
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          {content}
        </a>
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor="disable"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
