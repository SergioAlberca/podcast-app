import usePodcastDetailController from "./controller/podcast_detail.controller";

export default function PodcastDetail() {
  const { podcastDetail } = usePodcastDetailController();

  return (
    <div>
      <h1>{podcastDetail[0].trackName}</h1>
      <audio controls>
        <source
          src={
            "https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/524GE/traffic.megaphone.fm/VMP9770237637.mp3?updated=1680567637"
          }
          type="audio/mp3"
        />
        <p>
          Su navegador no es compatible con audio HTML5. Aquí hay un{" "}
          <a href="viper.mp3">enlace al audio</a> en su lugar.
        </p>
      </audio>
    </div>
  );
}
