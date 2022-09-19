import { useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledVideoPlayerPage.css";


export default function VideoPlayerPage() {
   // let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let videos = data.videos

    const params = window.location.search.substring(1).split(':'); 
    let id =params && params[0]

      let toDetail= videos && videos.map((video)=>{

        if(video.id === id){
            
            return <div key={video.id} className="container-Player">
                <iframe className="video-player" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                <div className="video-text">
                     <div className="video-title">{video.titulo}</div>
            <div className="video-text">{video.descricao}</div>   
                </div>
            
                </div>
        }
    })

    return (
        <div id="VideoPlayerPage">

           {toDetail}
        </div>
    )
}