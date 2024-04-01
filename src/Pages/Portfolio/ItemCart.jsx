import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const ItemCart = ({ item }) => {
  const { imgURL, videoURL, audioURL, projectName, createdDate, liveLink } =
    item;

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="card w-full h-80 lg:h-96 max-w-md glass service_glow">
        <figure className="h-3/5">
          {imgURL && (
            <img
              src={imgURL}
              alt="Project"
              className="w-full h-full object-cover"
            />
          )}
          {videoURL && <ReactPlayer controls url={videoURL} width="100%" />}
          {audioURL && <ReactPlayer controls url={audioURL} width="100%" />}
        </figure>
        <div className="card-body">
          <h2 className="card-title gradient-text">{projectName}</h2>
          <p>Created at {createdDate}</p>
          {liveLink && (
            <Link to={liveLink} className="card-actions justify-end">
              <button className="btn btn-outline border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white">
                Visit now!
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
