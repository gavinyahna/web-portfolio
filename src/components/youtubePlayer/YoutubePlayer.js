import ReactPlayer from 'react-player/youtube';
// or
// import ReactPlayer from 'react-player';
//if you want to support other video URLs

const YoutubePlayer = (props) => {
  return (
    <ReactPlayer url={props.url} />
  );
}

export default YoutubePlayer;