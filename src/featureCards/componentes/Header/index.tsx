import  * as  S  from './styles';
import Icon from "../../../img/logo.svg"
export function Header() {
    return (
        <S.Container>
            <S.Header>
                <S.Icon src = {Icon} />
                <S.Title>Seja bem-vindo, motorista</S.Title>
            </S.Header>
        </S.Container>
    )
}