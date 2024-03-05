// eslint-disable-next-line react/prop-types
import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 20px;
    background-color: #1a1a1a;
    border-radius: 10px;
`;

function UserItem({ user }) {
    return (
        <StyledDiv>
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.email}</p>
            <p>{user.location.city}, {user.location.country}</p>
            <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
        </StyledDiv>
    );
}

export default UserItem;