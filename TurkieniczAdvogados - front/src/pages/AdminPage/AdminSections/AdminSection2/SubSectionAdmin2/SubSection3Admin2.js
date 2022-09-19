import { useContext, useEffect, useState } from "react"
import "./StyledSubSection3Admin2.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../../../../components/global/globalContext";
import useForm from "../../../../../components/hooks/useForm";
import { BASE_URL} from "../../../../../components/constants/BaseURL";
import { FILE_BASE_URL } from "../../../../../components/constants/FileBaseUrl";
import newRequestData from "../../../../../components/hooks/newRequestData";
import { useProtectedPage } from "../../../../../components/hooks/useProtectPage";






export default function SubSection3Admin2() {
    useProtectedPage();
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let setToAdd = data.setToAdd
    let toAdd = data.toAdd
    let setToEdit = data.setToEdit
    let [message, setMessage] = useState("")

    const useRequestData = (url) => {
        const [data, setData] = useState();
        let urlLink = url+"?req="+ new Date().getTime()
       
        useEffect((url) => {
            axios
                .get(urlLink)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
        }, [url]);
    
        return data;
    
    }

    let galerias = useRequestData(BASE_URL + "/galerias")

    const goToAdd = (add) => {
        setToAdd(add)
    }

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }

    const goToEdit = (edit) => {

        setToEdit(edit)
        navigate("/admin/painel_de_controle/edit")
    }

    //Add noticias

    const [formAddNoticias, onChangeAddNoticias, clearGal] = useForm({ titulo: "", descricao: "", data:"", fonte:""})

    const [image, setImage] = useState("")

    const NewNoticiasBD = (url) => {
        let body = {
            titulo: formAddNoticias.nome,
            descricao: formAddNoticias.descricao,
            data: formAddNoticias.data,
            fonte: formAddNoticias.fonte,
            imagem: url
        }

        newRequestData(BASE_URL + "/addgaleria", body)
        clearGal()
        document.getElementById("inputFile").value = "";
        setMessage("Noticia adicionada com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)

    }


    let addNoticias = async e => {
        e.preventDefault()
        let url = ""
        const formData = new FormData();
        formData.append('image', image);

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

        NewNoticiasBD(url)

    }

    //End Add galeria

    //Add produto

    const [formAddProduto, onChangeAddProduto, clearProd] = useForm({ nome: "", descricao: "", observacao: "", imagem: "" })

    const [imageProduto, setImageProduto] = useState("")

    const [idGaleriaProduto, setIdGaleriaProduto] = useState("")

    let updateIdGalery = (ev) => {
        setIdGaleriaProduto(ev.target.value)
    }
    const NewProdutoBD = (url) => {
        let body = {
            id_galeria: idGaleriaProduto,
            nome: formAddProduto.nome,
            descricao: formAddProduto.descricao,
            observacao: formAddProduto.observacao,
            imagem1: url
        }

        newRequestData(BASE_URL + "/addproduto", body)
        clearProd()
        document.getElementById("inputFile").value = "";
        setMessage("Produto adicionado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)

    }


    let addProduto = async e => {
        e.preventDefault()
        let url = ""
        const formData = new FormData();
        formData.append('image', imageProduto);

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

        if (idGaleriaProduto === "") {
            setMessage("Selecione a galeria");
            setTimeout(() => {
                setMessage("")
            }, 4000)

        } else {
            NewProdutoBD(url)
        }



    }

    //lista as galerias para selecionar id
    let idGaleryList = galerias && galerias
        .map((gal) => {
            return <option key={gal.id} value={gal.id}>{gal.nome}</option>

        })


    //End Add Produto

    //Add video

    const [formAddVideo, onChangeAddVideo, clearVideo] = useForm({ titulo: "", descricao: "", url: "" })

    const NewVideoBD = (url) => {
        let body = {
           titulo: formAddVideo.titulo,
            descricao: formAddVideo.descricao,
            url: formAddVideo.url
        }

        newRequestData(BASE_URL+"/addvideo", body)
        clearVideo()
        setMessage("Video adicionado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)

    }

    const AddVideo = (ev) => {
        ev.preventDefault()
        NewVideoBD(formAddVideo)
    }
    //End Add Video

    //add Admin

    const [formAddAdmin, onChangeAddAdmin, clearAdmin] = useForm({ nome: "", senha: "" })

    const NewAdminBD = () => {
        let body = {
            nome: formAddAdmin.nome,
            password: formAddAdmin.password
        }
        let url = BASE_URL+"/addAdmin"

        newRequestData(url, body)
        clearAdmin()
        setMessage("Administrador adicionado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)

    }

    const AddAdmin = (ev) => {
        ev.preventDefault()
        NewAdminBD(formAddAdmin)
    }
    //End Add Admin

    //lista inputs para add: Galerias, produtos, videos e usuário(admin) 

    const inputsToAdd = () => {
        if (toAdd === "NOTICIAS") {
            return <div>
                <form onSubmit={addNoticias} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Titulo da noticia:</label>
                        <input
                            placeholder={"Titulo*"}
                            type='titulo'
                            name="titulo"
                            value={formAddNoticias.titulo}
                            onChange={onChangeAddNoticias}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label className="label">Descrição:</label>
                        <textarea
                        
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formAddNoticias.descricao}
                            onChange={onChangeAddNoticias}
                            className="description"
                            
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Imagem:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage(e.target.files[0])}
                        required
                    />
                    <div className="btn-container" >
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
                <button onClick={() => goToApp()}>voltar</button>
                <div>{message}</div>

            </div>
        } else if (toAdd === "PRODUTOS") {
            return <div>
                <form onSubmit={addProduto} className="form-Subsection3">

                    <div className="flex-container" >
                        <label>Galeria:</label>

                        <select name="idgaleria" value={idGaleriaProduto} onChange={updateIdGalery} >
                            <option value="">Selecionar galeria</option>
                            {idGaleryList}
                        </select>
                    </div>
                    <div className="flex-container" >
                        <label>Nome do Produto:</label>
                        <input
                            placeholder={"Nome do Produto*"}
                            type='nome'
                            name="nome"
                            value={formAddProduto.nome}
                            onChange={onChangeAddProduto}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição do Produto:</label>
                        <textarea
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formAddProduto.descricao}
                            onChange={onChangeAddProduto}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Observação do Produto:</label>
                        <input
                            placeholder={"Observação*"}
                            type='observacao'
                            name="observacao"
                            value={formAddProduto.observacao}
                            onChange={onChangeAddProduto}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Imagem do Produto:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImageProduto(e.target.files[0])}
                        required
                    />

                    <button type="submit">Adicionar</button>

                </form>
                <button onClick={() => goToApp()}>voltar</button>
                <div>obs.:Para adicionar mais imagens ao produto, vá em editar.</div>
                <div>{message}</div>
            </div>
        } else if (toAdd === "VIDEOS") {
            return <div>
                <form onSubmit={AddVideo} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Titulo do Video:</label>
                        <input
                            placeholder={"Titulo*"}
                            type='titulo'
                            name="titulo"
                            value={formAddVideo.titulo}
                            onChange={onChangeAddVideo}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição do Video:</label>
                        <textarea
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formAddVideo.descricao}
                            onChange={onChangeAddVideo}
                            className="description"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>URL do video:</label>
                        <input
                            placeholder={"Observação*"}
                            type='url'
                            name="url"
                            value={formAddVideo.url}
                            onChange={onChangeAddVideo}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="btn-container" >
                        <button>Adicionar</button>
                    </div>
                </form>
                <button onClick={() => goToApp()}>voltar</button>
                <div>{message}</div>
            </div>
        }else if (toAdd === "USUÁRIO") {
            return <div>
                 <form onSubmit={AddAdmin} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome do Administrador:</label>
                        <input
                            placeholder={"Nome*"}
                            type='nome'
                            name="nome"
                            value={formAddAdmin.nome}
                            onChange={onChangeAddAdmin}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Senha:</label>
                        <input
                            placeholder={"Senha*"}
                            type='password'
                            name="password"
                            value={formAddAdmin.password}
                            onChange={onChangeAddAdmin}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                   
                    <div className="btn-container" >
                        <button>Adicionar</button>
                    </div>
                </form>
                <button onClick={() => goToApp()}>voltar</button>
                <div>{message}</div>
            </div>
        }
    }


    return (
        <div className="body-subsection3">
            <div>
                <div className="title-subsection3">Administração: Adicionar</div>

                <div className="services-container-subsection2">
                    <div className="title-container-subsection2">APP</div>
                    <div className="service-subsection2">
                        <strong className="service-type-subsection2">DESTAQUES</strong>
                        <div className="options-service-subsection2">
                            <div onClick={() => goToEdit("DESTAQUES")} className="option-service-subsection2">EDITAR</div>
                        </div>
                    </div>
                    <div className="service-subsection2">
                    <strong className="service-type-subsection2">NOTICIAS</strong>
                    <div className="options-service-subsection2">
                    <div onClick={()=>goToAdd("NOTICIAS")} className="option-service-subsection2">ADD</div>
                        <div onClick={()=>goToEdit("NOTICIAS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">ÁREAS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={()=>goToEdit("ÁREAS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                    <div className="service-subsection2">
                        <strong className="service-type-subsection2">VIDEOS</strong>
                        <div className="options-service-subsection2">
                            <div onClick={() => goToAdd("VIDEOS")} className="option-service-subsection2">ADD</div>
                            <div onClick={() => goToEdit("VIDEOS")} className="option-service-subsection2">EDITAR</div>
                        </div>
                    </div>

                    <div className="service-subsection2">
                        <strong className="service-type-subsection2">INFORMAÇÕES</strong>
                        <div className="options-service-subsection2">
                            <div onClick={() => goToEdit("INFORMAÇÕES")} className="option-service-subsection2">EDITAR</div>
                        </div>
                    </div>
                </div>
                <div className="users-container-subsection2">
                    <div className="title-container-subsection2">AUTENTICAÇÃO E AUTORIZAÇÃO</div>

                    <div className="service-subsection2">
                        <strong className="service-type-subsection2">USUÁRIO</strong>
                        <div className="options-service-subsection2">
                            <div onClick={() => goToAdd("USUÁRIO")} className="option-service-subsection2">ADD</div>
                            <div onClick={() => goToEdit("USUÁRIO")} className="option-service-subsection2">EDITAR</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-to-add">
                <div>Adicionar {toAdd}</div>
                {inputsToAdd()}

            </div>
        </div>
    )

}