import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductsDetails.css"

function ProductsDetails() {
    const [product, setproducts] = useState();
    let { ProductsID } = useParams();
    useEffect(() => {
        fetch(`http://localhost:9000/products/${ProductsID}`)
            .then((repo) => repo.json())
            .then((product) => {
                setproducts(product);
            })
    }, [])
    return (
        <>
            {product &&
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={product.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.description}</p>
                                <p class="card-text">price:{product.price}</p>
                            </div>
                        </div>
                    </div >
                </div >
            }
        </>
    )
}

export default ProductsDetails;