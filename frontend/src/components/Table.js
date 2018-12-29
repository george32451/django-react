import React from 'react'
import PropTypes from 'prop-types'
import key from 'weak-key'

const Table = ({ data }) =>
    !data.length ? (
        <p>Nothing to show</p>
    ) : (
        <div className='column'>
            <h2 className='subtitle'>
                Showing <strong>{data.length} items</strong>
            </h2>
            <table className='table is-striped'>
                <thead>
                    <tr>
                        {Object.entries(data[0]).map(elem => <th key={key(elem)}>{elem[0]}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(elem => (
                        <tr key={elem.id}>
                            {Object.entries(elem).map(elem => <td key={key(elem)}>{elem[1]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

Table.propTypes = {
    data: PropTypes.array.isRequired
}

export default Table