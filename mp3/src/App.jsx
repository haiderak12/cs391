import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import styled from "styled-components";

const AppDiv = styled.div`
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 10px auto;
    padding: 2rem;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
`;

export default function App() {

  return (
      <AppDiv>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Profile userName='haiderak12'/>}/>
            <Route path='/projects' element={<Projects userName='haiderak12'/>}/>
            <Route
                path='/projects/:name'
                element={<ProjectDetail userName='haiderak12'/>}
            />
          </Routes>
        </BrowserRouter>
      </AppDiv>
  )
}
