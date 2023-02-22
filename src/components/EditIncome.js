import React, { useState } from 'react'

function EditIncome(props) {
    const [value, setValue] = useState(props.income);
    return (<div className='flex'>
        <input
            required='required'
            type='number'
            className=''
            id='name'
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
        <button
            type='button'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={() => props.handleSaveClick(value)}
        >
            Save
        </button>
    </div>
    )
}

export default EditIncome