import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../../../components/constants/BaseURL";
import { FILE_BASE_URL } from "../../../../../../components/constants/FileBaseUrl";
import GlobalContext from "../../../../../../components/global/globalContext";
import EditRequestData from "../../../../../../components/hooks/EditRequestData";
import useForm from "../../../../../../components/hooks/useForm";

export default function ProdToEditCard(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let prodSel = props.prodSel
    let [message, setMessage] = useState("")

  
    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }


    // destaque para editar
    const [formEditDestaque, onChangeEditDestaque] = useForm({ descricao: prodSel.descricao })

    const [imageEditDestaque, setImageEditDestaque] = useState("")
    const [idGaleriaDestaques, setIdGaleriaDestaque] = useState("")



    const EditDestaquesBD = (body) => {
        
        EditRequestData(BASE_URL + "/editardestaque", body)

        document.getElementById("inputFile").value = "";
        setMessage("Destaque editado com sucesso");
        setTimeout(() => {
            setMessage("")
            navigate("/admin/painel_de_controle")
            document.location.reload(true);
        }, 1000)

    }


    let editDestaque = async e => {
        e.preventDefault()
        let body = {
            id:prodSel && prodSel.id,
            id_galeria:prodSel && prodSel.id_galeria,
            nome: formEditDestaque.nome,
            descricao: formEditDestaque.descricao,
            preco: formEditDestaque.preco,
            imagem: prodSel && prodSel.imagem
        }

        if(idGaleriaDestaques){
            body.id_galeria = idGaleriaDestaques
        }

        if (imageEditDestaque !== "") {
            const formData = new FormData();
            formData.append('image', imageEditDestaque);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await axios.post(BASE_URL+"/upload", formData, headers)
                .then((response) => { 
                    body.imagem = FILE_BASE_URL+response.data
                }).catch((err) => {
                    
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        
        EditDestaquesBD(body)

    }


    //Fim editar destaque

    //Area para editar

    const [formEditArea, onChangeEditArea] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao })

    const [imageEditArea, setImageEditArea] = useState("")

    const EditAreaBD = (url) => {
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditArea.nome,
            descricao: formEditArea.descricao,
            preco: formEditArea.preco,
            imagem: prodSel && prodSel.imagem
        }
        

        if (url) {
            body.imagem = url
        }
        
        EditRequestData(BASE_URL + "/editargaleria", body)
        document.getElementById("inputFile").value = "";
        setMessage("Area editada com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }


    let editArea = async e => {
        e.preventDefault()
        let url = false
        if (imageEditArea !== "") {
            const formData = new FormData();
            formData.append('image', imageEditArea);

            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await axios.post(BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        
        EditAreaBD(url)

    }

    // Fim editar area

    // Noticia para editar

    const [formEditNoticia, onChangeEditNoticia] = useForm({ titulo: prodSel.titulo, descricao: prodSel.descricao, data: prodSel.data,  fonte: prodSel.fonte})
  
    const [imageEditNoticia, setImageEditNoticia] = useState("")



    const EditNoticiaBD = (url) => {
        let body = {
            id:prodSel && prodSel.id,
            titulo: formEditNoticia.titulo,
            descricao: formEditNoticia.descricao,
            data: formEditNoticia.data,
            imagem: prodSel && prodSel.imagem,
            fonte: formEditNoticia.fonte
 
        }

        if (url) {
            body.imagem = url
        }


        EditRequestData(BASE_URL + "/editarproduto", body)
        document.getElementById("inputFile").value = "";
        setMessage("Noticia editada com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)
    }


    let editNoticia= async e => {
        e.preventDefault()
        let url = false

        if (imageEditNoticia !== "") {
            const formData = new FormData();
            formData.append('image', imageEditNoticia);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        
        EditNoticiaBD(url)

    }
    // fim editar noticia

    // video para editar
    const [formEditVideo, onChangeEditVideo] = useForm({ titulo: prodSel.titulo, descricao: prodSel.descricao, url: prodSel.url })

    const EditVideoBD = e => {
        e.preventDefault()
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditVideo.titulo,
            descricao: formEditVideo.descricao,
            url: formEditVideo.url,
        }
        
        EditRequestData(BASE_URL + "/editarvideo", body)

        setMessage("Video editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

    //fim editar video

    // Admin para editar
    const [formEditAdmin, onChangeEditAdmin] = useForm({ nome: prodSel.nome, password: prodSel.senha })

    const EditAdminBD = e => {
        e.preventDefault()
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditAdmin.nome,
            senha: formEditAdmin.password,
        }
        
        EditRequestData(BASE_URL + "/editaradmin", body)

        setMessage("Administrador editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

    // fim editar admin

    //Listagem de inputs
    const prodToEdit = () => {
        if (toEdit === "DESTAQUES") {
            return <div className="product-to-edit">
                <form onSubmit={editDestaque} className="form-Subsection3">

                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <textarea
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditDestaque.descricao}
                            onChange={onChangeEditDestaque}
                            className="description"
                            required
                        />
                    </div>

                    <div className="flex-container" >
                        <label>Editar Imagem:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImageEditDestaque(e.target.files[0])}

                    />
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                <div>{message}</div>
                <div>
                    <button onClick={() => goToApp()}>voltar</button>
                </div>

                <div className="info-actual">
                    <div className="container-img">Imagem Atual:
                        <img className="actual-img" src={prodSel && prodSel.img} alt="img" />
                    </div>
                </div>
            </div>
        } else if (toEdit === "NOTICIAS") {
            return <div className="product-to-edit2">
                 <form onSubmit={editNoticia} className="form-Subsection3">
                 
                    <div className="flex-container" >
                        <label>Titulo da noticia:</label>
                        <input
                            placeholder={"Titulo da Noticia*"}
                            type='titulo'
                            name="titulo"
                            value={formEditNoticia.titulo}
                            onChange={onChangeEditNoticia}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <textarea
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditNoticia.descricao}
                            onChange={onChangeEditNoticia}
                            className="description"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Data:</label>
                        <input
                            placeholder={"data*"}
                            type='data'
                            name="data"
                            value={formEditNoticia.data}
                            onChange={onChangeEditNoticia}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Editar Imagem :</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImageEditNoticia(e.target.files[0])}

                    />
                    
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                  <div>{message}</div>  
                  <div className="container-img">Imagem Atual :
                        <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                        
                    </div>
                </form>
                
            </div>
        } else if (toEdit === "ÁREAS") {
            return <div className="product-to-edit">
               <form onSubmit={editArea} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome da ÁREA:</label>
                        <input
                            placeholder={"Nome da Área*"}
                            type='nome'
                            name="nome"
                            value={formEditArea.nome}
                            onChange={onChangeEditArea}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <textarea
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditArea.descricao}
                            onChange={onChangeEditArea}
                            className="description"
                            required
                        />
                    </div>
                    
                    <div className="flex-container" >
                        <label>Editar Imagem:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImageEditArea(e.target.files[0])}

                    />
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                <div>{message}</div>
                <div>
                    <button onClick={() => goToApp()}>voltar</button>
                </div>

                <div className="info-actual">
                    <div className="container-img">Imagem Atual:
                        <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                    </div>
                </div>
            </div>
        } else if (toEdit === "VIDEOS") {
            return <div className="product-to-edit">
                 <form onSubmit={EditVideoBD} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Titulodo Video:</label>
                        <input
                            placeholder={"Titulo do Video*"}
                            type='titulo'
                            name="titulo"
                            value={formEditVideo.titulo}
                            onChange={onChangeEditVideo}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <textarea
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditVideo.descricao}
                            onChange={onChangeEditVideo}
                            className="description"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>url:</label>
                        <input
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditVideo.url}
                            onChange={onChangeEditVideo}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                <div>{message}</div>
                <div>
                    <button onClick={() => goToApp()}>voltar</button>
                </div>

                <div className="info-actual">
                    <div className="container-img">Video Atual:
                       <iframe width="380" height="200" src={prodSel && prodSel.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                </div>
              
            </div>
        } else if (toEdit === "USUÁRIO") {
            return <div className="product-to-edit">
               <form onSubmit={EditAdminBD} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome:</label>
                        <input
                            placeholder={"Nome do Administrador*"}
                            type='nome'
                            name="nome"
                            value={formEditAdmin.nome}
                            onChange={onChangeEditAdmin}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Senha:</label>
                        <input
                            placeholder={"Senha*"}
                            type='password'
                            name="password"
                            value={formEditAdmin.password}
                            onChange={onChangeEditAdmin}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                <div>{message}</div>
                <div>
                    <button onClick={() => goToApp()}>voltar</button>
                </div>
            </div>
        }
    }

    //retorno

    return (
        <div className="product-to-edit-card">
            {prodToEdit()}
        </div>
    )
}