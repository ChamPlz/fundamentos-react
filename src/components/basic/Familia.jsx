import React from "react";

export default props =>{
    return (
        <span>
                {props.children.map((child, i) => {
                    return  React.cloneElement(child, {...props, key: i });
                })}
        </span>
    )
}