import React from 'react';

const Sresult = (props) => {
    const randomimg = `https://source.unsplash.com/500x500/?${props.name}`;
    return (
        <>
            <div style={{ marginTop: "5px" }}>
                <img src={randomimg} alt="random image" />
            </div>
        </>
    );
}

export default Sresult;