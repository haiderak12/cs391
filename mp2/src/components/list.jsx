import { useState, useEffect } from 'react';
import UserItem from "./listItem.jsx";
import styled from "styled-components";


const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  padding: 20px;
`;

export function List() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                'https://randomuser.me/api/?results=24');
            const json = await data.json();

            setUsers(json.results);
            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <UsersGrid>
                {users.map((user, index) => (
                    <UserItem key={index} user={user}/>
                ))}
            </UsersGrid>
        </div>
    );
}