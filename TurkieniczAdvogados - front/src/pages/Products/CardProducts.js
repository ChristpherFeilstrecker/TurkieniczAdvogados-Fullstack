import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import caneca from "../../images/fotos/Canecas e Squeezes/Caneca Capuccino_CC10017-ok.jpg"

export default function CardProducts(props) {
    const { codigo_produto, nome, descricao1,descricao2, image } = props.product
    const prod = props.product
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    
    return (
        <div key={codigo_produto} id="errorpage">
            <div className="product-sector-1">
                {loading ?
                    <div className="loader"></div>
                    : <div onClick={() => navigate(`/aggostini/detalhe_produto?${codigo_produto}`)} className="product-sector-1">
                        <img className="image-product-sector-1" src={`https://aggostini.com.br/media/${image}`} alt={nome} />
                        <div className="detail-container-product-sector-1">
                            <strong className="detail-product-sector-1">{nome}</strong>
                            
                        </div>
    
                    </div>}
            </div>
        </div>
    )
}