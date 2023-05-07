import React from "react";
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

const Home=props=>{
    return(
        <>
        <div className="p-4 box mt-3 text-center">Hello Welcome</div>
        <div className="d-grid gap-2">
        <Link to="/"><Button variant="primary" className="g-btn text-center">LogOut</Button></Link>
        </div>
        </>
    );
};
export default Home;
