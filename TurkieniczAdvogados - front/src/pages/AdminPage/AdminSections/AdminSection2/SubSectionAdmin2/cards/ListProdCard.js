import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledCards.css"
import axios from "axios";
import delRequestData from "../../../../../../components/hooks/delRequestData"
import { BASE_URL } from "../../../../../../components/constants/BaseURL";
import GlobalContext from "../../../../../../components/global/globalContext";
import useForm from "../../../../../../components/hooks/useForm";
import EditRequestData from "../../../../../../components/hooks/EditRequestData";


export default function ListProdCard(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let newdestaques = data.newdestaques
    let setNewDestaques = data.setNewDestaques
    let setInfoOpen = props.setInfoOpen
    let setProdSel = props.setProdSel
    let prodSel = props.prodSel

    let destaques = data.destaques

    let areas =  data.areas

    let noticias = data.noticias

    let usuarios = data.usuarios

    let videos = data.videos

    let [message, setMessage] = useState("")

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }
  
    // Informações para editar
    
    const [formEditInfo, onChangeEditInfo] = useForm({ telefone:  prodSel.telefone, celular: prodSel.whats, email: prodSel.email, endereco: prodSel.endereco, facebook: prodSel.facebook, instagram:prodSel.instagram, twiter: prodSel.twiter,bairro: prodSel.bairro, cidade: prodSel.cidade, estadoPaisCep: prodSel.estadoPaisCep })

    const EditInfoBD = e => {
        e.preventDefault()
        let body = {
            id: "001",
            telefone: formEditInfo.telefone,
            celular: formEditInfo.celular,
            email: formEditInfo.email,
            endereco: formEditInfo.endereco,
            facebook: formEditInfo.facebook,
            instagram: formEditInfo.instagram,
            youtube: formEditInfo.youtube,
        }
        console.log("body", body)
        EditRequestData(BASE_URL + "/editarinformacoes", body)

        setMessage("Informações editadas com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

    //fim editar informações

    //abrir opção selecionada para editar
    const openProdToEdit = (prod) => {
        setInfoOpen(true)
        setProdSel(prod)
    }

    const DeleteGaleriaBD = (id) => {

        delRequestData(BASE_URL + `/deletargaleria?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listArea = areas && areas
        .map((gal) => {
            return <div key={gal.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(gal)} className="position-name-edit-or-delete">{gal.nome}</div>
                <strong onClick={() => DeleteGaleriaBD(gal.id)} className="button-delete">X</strong>
            </div>
        })

    const DeleteProdutoBD = (id) => {

        delRequestData(BASE_URL + `/deletarproduto?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listNews = noticias && noticias
        .map((prod) => {
            return <div key={prod.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(prod)} className="position-name-edit-or-delete">{prod.titulo}</div>
                <strong onClick={() => DeleteProdutoBD(prod.id)} className="button-delete">X</strong>
            </div>
        })

    const DeleteAdminBD = (id) => {

        delRequestData(BASE_URL + `/deletaradmin?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listUsers = usuarios && usuarios
        .map((user) => {

            return <div key={user.id} className="body-position-to-edit-or-delete">
                <div className="position-name-edit-or-delete">{user.nome}</div>
                <strong onClick={() => DeleteAdminBD(user.id)} className="button-delete">X</strong>
            </div>
        })

    const DeleteVideoBD = (id) => {

        delRequestData(BASE_URL + `/deletarvideo?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listVideos = videos && videos
        .map((video) => {
            return <div key={video.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(video)} className="position-name-edit-or-delete">{video.titulo}</div>
                <strong onClick={() => DeleteVideoBD(video.id)} className="button-delete">X</strong>
            </div>
        })

    const prodToEdit = () => {
        if (toEdit === "DESTAQUES") {
            return <div>
                <strong>Selecione o destaque que deseja editar</strong>

                <div className="container-list-to-edit">
                    <div className="title-list-to-edit">
                        <div className="title-position-to-edit">Posição</div>

                        <div>Nome</div>
                    </div>
                    <div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">1</div>
                            <div onClick={() => openProdToEdit(destaques && destaques[0])} className="position-name-edit">{destaques && destaques[0].descricao}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">2</div>
                            <div onClick={() => openProdToEdit(destaques && destaques[1])} className="position-name-edit">{destaques && destaques[1].descricao}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">3</div>
                            <div onClick={() => openProdToEdit(destaques && destaques[2])} className="position-name-edit">{destaques && destaques[2].descricao}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">4</div>
                            <div onClick={() => openProdToEdit(destaques && destaques[3])} className="position-name-edit">{destaques && destaques[3].descricao}</div>
                        </div>
                    </div>

                </div>
            </div>
        } else if (toEdit === "NOTICIAS") {
            return <div>
                <strong>Selecione a noticia que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listNews}

                    </div>

                </div>
            </div>
        } else if (toEdit === "ÁREAS") {
            return <div>
                <strong>Selecione a área que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>

                    </div>
                    <div>

                        {listArea}

                    </div>

                </div>
            </div>
        } else if (toEdit === "VIDEOS") {
            return <div>
                <strong>Selecione o video que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listVideos}

                    </div>

                </div>
            </div>
        } else if (toEdit === "INFORMAÇÕES") {
            return <div className="product-to-edit">
                <form onSubmit={EditInfoBD} className="form-Subsection3">
                    <strong>Editar Informações:</strong>
                    <div className="flex-container" >
                        <label>Telefone:</label>
                        <input
                            placeholder={"Telefone*"}
                            type='telefone'
                            name="telefone"
                            value={formEditInfo.telefone}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        /></div>
                    <div className="flex-container" >
                        <label>Celular:</label>
                        <input
                            placeholder={"Celular*"}
                            type='celular'
                            name="celular"
                            value={formEditInfo.celular}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Email:</label>
                        <input
                            placeholder={"Email*"}
                            type='email'
                            name="email"
                            value={formEditInfo.email}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Endereço:</label>
                        <input
                            placeholder={"Endereço*"}
                            type='endereco'
                            name="endereco"
                            value={formEditInfo.endereco}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Bairro:</label>
                        <input
                            placeholder={"Bairro*"}
                            type='bairro'
                            name="bairro"
                            value={formEditInfo.bairro}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Cidade:</label>
                        <input
                            placeholder={"Cidade*"}
                            type='cidade'
                            name="cidade"
                            value={formEditInfo.cidade}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Estado, pais e Cep:</label>
                        <input
                            placeholder={"Estado, Pais e CEP*"}
                            type='estadoPaisCep'
                            name="estadoPaisCep"
                            value={formEditInfo.estadoPaisCep}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Facebook:</label>
                        <input
                            placeholder={"Facebook*"}
                            type='facebook'
                            name="facebook"
                            value={formEditInfo.facebook}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Instagram:</label>
                        <input
                            placeholder={"Instagram*"}
                            type='instagram'
                            name="instagram"
                            value={formEditInfo.instagram}
                            onChange={onChangeEditInfo}
                            className="input-Subsection3"
                            required

                        />
                    </div>

                    <div className="flex-container" >
                        <label>Twiter:</label>
                        <input
                            placeholder={"Twiter*"}
                            type='twiter'
                            name="twiter"
                            value={formEditInfo.twiter}
                            onChange={onChangeEditInfo}
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

                <div className="product-to-edit" >
                    <strong>Informações Atuais:</strong>
                    <label>Telefone: {prodSel.telefone}</label>
                    <label>Celular: {prodSel.whats}</label>
                    <label>Email: {prodSel.email}</label>
                    <label>Endereço: {prodSel.endereco}</label>
                    <label>Bairro: {prodSel.bairro}</label>
                    <label>CIdade: {prodSel.cidade}</label>
                    <label>Estado, Pais e CEP: {prodSel.estadoPaisCep}</label>
                    <label>Facebook: {prodSel.facebook}</label>
                    <label>Instagram: {prodSel.instagram}</label>
                    <label>Twiter: {prodSel.twiter}</label>
                </div>

            </div>
        } else if (toEdit === "USUÁRIO") {
            return <div>
                <strong>Excluir Administrador</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit"></div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listUsers}

                    </div>

                </div>
            </div>
        }
    }

    return (
        <div className="list-product-card">
            {prodToEdit()}
        </div>
    )
}