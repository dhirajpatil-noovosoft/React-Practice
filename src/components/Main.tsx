import { useCallback, useState } from 'react';

import Search from './Search';

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
];

interface DemoProps {}

export default function Main({}: DemoProps) {
    const [users, setUsers] = useState(allUsers);

    const repl = () => {
        let fr = [...users];
        fr.reverse();
        setUsers(fr);
    };

    const handleSearch = useCallback(
        (text: string) => {
            const filteredUsers = allUsers.filter((user) => user.includes(text));
            setUsers(filteredUsers);
        },
        []
    );

    return (
        <div className='tutorial'>
            <div className='align-center mb-2 flex'>
                <button onClick={() => repl()}>
                    Shuffle
                </button>

                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}
