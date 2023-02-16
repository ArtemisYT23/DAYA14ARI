import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModalVideoPlay } from "../../Redux/States/LoginAction";

const useStyless = makeStyles((theme) => ({
  modalPlayVideo: {
    position: "absolute",
    width: "800px",
    "@media (max-width: 767px)": {
      width: "100%",
      height: "350px",
    },
    height: "600px",
    backgroundColor: "#0e0d0d28",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "13px",
    overflow: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const VideoPlay = () => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { sesion } = useSelector((store) => store);
  const { videoActive } = sesion;

  const CloseModalVideoPlay = () => {
    dispatch(setActiveModalVideoPlay(false));
  };

  return (
    <div className={styless.container}>
      <Modal open={videoActive} onClose={CloseModalVideoPlay}>
        <div className={styless.modalPlayVideo}>
          <iframe
            width="100%"
            height="100%"
            src="https://sisadazurestorage.blob.core.windows.net/toyota/Dedicatoria.mp4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlay;
