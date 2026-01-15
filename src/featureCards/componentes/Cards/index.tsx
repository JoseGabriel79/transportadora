import * as S from './styles';

interface CardProps {
  title: string;
  description?: string;
  image: string;
}

export function Card(CardProps: CardProps){
    return(
        <S.Card>
            <S.Image src={CardProps.image} alt={CardProps.title} />
            <S.Title>{CardProps.title}</S.Title>
            <S.Description>{CardProps.description}</S.Description>
            <S.Button>Ver mais</S.Button>
        </S.Card>
    )
}