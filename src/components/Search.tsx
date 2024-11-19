import { memo } from 'react';

interface SearchProps {
    onChange: (text: string) => void;
}
let z = 0;
function Search({ onChange }: SearchProps) {
    console.log('Search rendered!');
    z+=1;
    return (
        <>
            <>
                {z}
            </>
        <input
            type='text'
            placeholder='Search users...'
            onChange={(e) => onChange(e.target.value)}
        />
        </>

    );
}

export default memo(Search);