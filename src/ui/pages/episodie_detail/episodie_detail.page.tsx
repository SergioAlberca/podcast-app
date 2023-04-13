import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectedEpisodie } from "../podcast_detail/state/podcast_detail.slice";

export default function EpisodieDetail() {
  const { episodeId } = useParams();
  if (!episodeId) return null;
  const episode = useAppSelector((state) =>
    selectedEpisodie("1535809341", state)
  );
  console.log("Holaaaa", episode);
  return (
    <div>
      {/* <audio controls>
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
      </audio> */}
    </div>
  );
}
