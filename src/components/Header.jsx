import { Outlet, Link } from "react-router-dom"

export function Header() {
    return (
        <>
            <h1>Shopping Cart</h1>

            <nav>
                <Link to="/view">View Product Details</Link>
                <Link to="/add">Add Product</Link>
            </nav>

            <Outlet />
            
        </>
    )
}