import React from "react";
import './navop.css';
function navOp({title, onClick}) 
{
    return (
        <div className="navOp">
            <button onClick={onClick}>{title}</button>
        </div>
    )
}
export default navOp;