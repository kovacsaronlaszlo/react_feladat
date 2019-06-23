import React from "react";

const Table = (props) => {
    console.log(props.data);
    return (
        <>
        <table>
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <button onClick={props.prevPage}>Prev</button>
        <button onClick={props.nextPage}>Next</button>
        </>
    );
}

export default Table;