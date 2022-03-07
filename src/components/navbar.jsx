import React from "react"
import { Link } from "react-router-dom"


class NavBar extends React.Component {

    render() {
        return (
            <><div>
                <Link to='/'>Customer Page</Link>
            </div>
            <div>
                <Link to='/admin/storemanager'>Store Manager</Link>
            </div>
            <div>
                <Link to='/admin/gaming'>Gaming Manager</Link>
            </div></>
        )
    }
}

export default NavBar