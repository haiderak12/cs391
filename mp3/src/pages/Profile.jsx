import { useState, useEffect } from 'react';
import Link from '../components/Link.jsx';
import List from '../components/List.jsx';
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 50%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

const StyledHeader = styled.h2`
    font-size: 30px;
`;

const StyledProfileAvatar = styled.img`
  width: 150px;
  height: 150px;
`;

const StyledSpan = styled.span`
    color: white
`;

function Profile({ userName }) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url} />,
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url} />,
        },
        { field: 'Name', value: profile.name },
        { field: 'Company', value: profile.company },
        { field: 'Location', value: profile.location },
        { field: 'Email', value: profile.email },
        { field: 'Bio', value: profile.bio },
    ];

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();

            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <StyledDiv>
            <StyledHeader>About me</StyledHeader>
            {loading ? (
                <StyledSpan>Loading...</StyledSpan>
            ) : (
                <>
                    <StyledProfileAvatar
                        src={profile.avatar_url}
                        alt={profile.name}
                    />
                    <List items={items} />
                </>
            )}
        </StyledDiv>
    );
}

export default Profile;