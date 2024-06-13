import { useParams, useNavigate } from 'react-router-dom'

function ProductInfo ({ product, handlerDelete }) {
    const navigate = useNavigate();

    return (
        <>
            <h1>Item</h1>
            <h3>Product ID: {product.id}</h3>
            <p>Name: {product.name}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
            <p>Discount: {product.discount}</p>
            <button onClick={() => {
                handlerDelete(product.id);
                navigate("/view")
            }}>
                Delete
            </button>
        </>

    )
}


export function Item ({ list, handlerDelete }) {
    const { id } = useParams();

    const product = list.find((item) => item.id === id);

    return (
        <>
            {product ? <ProductInfo product={product} handlerDelete={handlerDelete}/> : <h1>Product not found</h1>}
        </>
    )
}