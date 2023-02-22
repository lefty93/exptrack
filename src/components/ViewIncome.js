import React from 'react'

function ViewIncome(props) {
    return (<div className='flex mt-1 justify-center'>

        <button type='button' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.handleEditClick}>
            Edit
        </button>
    </div>
    )
}

export default ViewIncome