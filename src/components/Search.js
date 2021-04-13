import React, { useState } from 'react'

const Search = ({ getQuery }) => {  

    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
        console.log(text);
    }

    return (
        <div className='search'>
            <form>
                <input type='text' className='form-control' placeholder='Search characters' value={text} onChange={(e) => onChange(e.target.value)} autoFocus />
            </form>
        </div>
    )
}
export default Search
