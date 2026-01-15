import { Header } from './componentes/Header';
import { Container } from './styles';
import {Main} from './componentes/Main';

export function MainPage() {
    return (
        <Container>
            <Header />
            <Main />
        </Container>
    )
}