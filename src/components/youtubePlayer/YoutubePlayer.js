import ReactPlayer from 'react-player/youtube';

const YoutubePlayer = (props) => {
  return (
    <ReactPlayer url={props.url} />
  );
}

export default YoutubePlayer;