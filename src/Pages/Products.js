import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "./Products.css"

function Products() {
    //fetch data and restore 
    const [products, setproducts] = useState([]);
    useEffect(() => {
        GetAllProducts();
    }, [])

    const GetAllProducts = () => {
        fetch('http://localhost:9000/products')
            .then((res) => res.json())
            .then((data) => {
                setproducts(data)
            })
    }
    // Delete data 
    const DeleteProducts = (product) => {
        Swal.fire({
            title: `Are you  sure to delete ${product.title} ?`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        GetAllProducts();
                    })
            }
        })
    }

    return (
        <>
            <h1 className="heading-all text-center">All Products</h1>
            <table class="table-products mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">operation</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <>
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td className="Btn-all">
                                        <Link to={`/products/${product.id}`} className="btn btn-info">Viwe</Link>
                                        <Link to={`/UpdateProducts/${product.id}`} className=" btn btn-success" > Update</Link>
                                        <button onClick={() => DeleteProducts(product)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr >
                            </>
                        )
                    })}
                </tbody>
            </table >
        </>
    )
}

export default Products;