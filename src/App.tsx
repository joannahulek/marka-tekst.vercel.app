import React from 'react';
import CardWithTabs from './components/Menu';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
    return (
        <div>
            <Container>
                <h1>Strona Marty</h1>
                <CardWithTabs />
            </Container>
        </div>
    );
}

export default App;
