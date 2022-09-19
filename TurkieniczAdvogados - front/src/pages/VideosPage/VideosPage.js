import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledVideosPage.css";


export default function VideosPage() {
   let navigate = useNavigate();
    const data = useContext(GlobalContext);

    let videos = data.videos

let listVideos = videos && videos
.map((video)=>{
return<div onClick={()=>navigate(`/player?${video.id}`)} key={video.id} className="video-container">

<iframe className="video" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 

<div className="title-video">{video.titulo}</div>
<div className="navigate-video">REPRODUZIR</div>
</div>
})


    return (
<div className="videos-page">
    
</div>
    )
}