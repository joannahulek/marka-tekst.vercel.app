import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from "./components/Menu";
import Hero from "./components/Hero";


const App: React.FC = () => {
    return (
            <Container>
                <Menu />
                <Hero />
            </Container>
    );
}

export default App;
