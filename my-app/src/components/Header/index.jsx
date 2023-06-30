import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickCadastre = () => {
        navigate('/cadastro')
    }

    
    const handleClickLogin = () => {
        navigate('/login')
    }

    return (
       <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='logo da DIO' />
                    {autenticado ? (
                    <>    
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Coding</Menu>
                    <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/88001621?v=4" />
                    ) : (
                        <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="entrar" onClick={handleClickLogin}/>
                        <Button title="cadastrar" onClick={handleClickCadastre}/>
                        </>
                    )}
                </Row>
            </Container>
       </Wrapper>
    )
}

export { Header }