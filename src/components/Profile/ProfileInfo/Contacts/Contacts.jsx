
import React from "react";



const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            <span>{contactTitle}:<a href="">{contactValue}</a></span>
        </div>
    )
};
export default Contacts;