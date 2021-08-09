import React from 'react'

const Table = ({tableWords}) => {
    return (
        <table className="table table-striped">
            <tbody>
                {Object.entries(tableWords).map(([key, val]) => {
                    return (
                            <tr key={Math.random()}>
                                <td >{key} - {val}</td>
                            </tr>
                            )
                })}
            </tbody>
        </table>
    )
}
export default Table