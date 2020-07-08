import React, {useState} from 'react';

const Search = ({getQ}) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q);
        getQ(q);
    }
    return (
        <section className='search'>
            <form action="">
                <input type="text" className='form-control' placeholder='Search characters' autoFocus value={text}
                       onChange={event => onChange(event.target.value)}/>
            </form>
        </section>
    );
};

export default Search;
