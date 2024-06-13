import { Outlet, NavLink } from 'react-router-dom'
import "../styles/View.css"

export function View({ list }) {

    return (
        <>
            <h2>View</h2>
            {list && list.map((item) => {
                return <NavLink 
                        key={item.id}
                        to={`/view/${item.id}`}>{item.name}</NavLink>
               })} 
            <Outlet />
        </>

    )
}