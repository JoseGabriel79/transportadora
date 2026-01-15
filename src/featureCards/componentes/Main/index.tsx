import { Card } from '../Cards';
import * as S from './styles';
import img1 from '../../../img/performance.svg';
import img2 from '../../../img/dinheiro.svg';
import img3 from '../../../img/dados.svg';
import img4 from '../../../img/calculadora.svg';
import img5 from '../../../img/tempo.svg';
import img6 from '../../../img/pacote.svg';
import img7 from '../../../img/caminhao.svg';

export function Main() {
    return (
        <S.CardContainer>
            <Card title='Entregas'
                image={img1}
                description='This is a description for Card 1.'
            />
            <Card title='Meu saldo'
                image={img2}
                description='This is a description for Card 2.'
            />
            <Card title='Metricas'
                image={img3}
                description='This is a description for Card 3.'
            />
            <Card title='Calcular frete'
                image={img4}    
                description='This is a description for Card 4.'
            />
            <Card title='Tempo medio' 
                image={img5}
                description='This is a description for Card 5.'
            />
            <Card title='Pacotes' 
                image={img6}
                description='This is a description for Card 6.'
            />
            <Card title='Caminhões' 
                image={img7}
                description='This is a description for Card 7.'
            />

        </S.CardContainer>
    )
}