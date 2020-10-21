import React, { useState } from 'react';
import Sresult from "./Sresult";

const Search = () => {
    const [img, setImg] = useState("");
    const inputField = (e) => {
        const input = e.target.value;
        setImg(input);
    }
    return (
        <>
            <div className="searchresults">
            <h3> Showing image as per You type  </h3>
                <input type="text" placeholder="Search Anything Here" onChange={inputField} value={img} />
                <Sresult name={img} />
            </div>
        </>
    );
}
export default Search;