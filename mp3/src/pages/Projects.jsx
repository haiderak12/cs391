import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

const StyledSpan = styled.span`
    color: white
`;

function Projects({ userName }) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/users/${userName}/repos`,
            );
            const result = await data.json();

            if (result) {
                setProjects(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <StyledDiv>
            <StyledHeader>Projects</StyledHeader>
            {loading ? (
                <StyledSpan>Loading...</StyledSpan>
            ) : (
                <div>
                    <List
                        items={projects.map((project) => ({
                            field: project.name,
                            value: (
                                <RouterLink to={`/projects/${project.name}`}>
                                    Open project
                                </RouterLink>
                            ),
                        }))}
                    />
                </div>
            )}
        </StyledDiv>
    );
}

export default Projects;