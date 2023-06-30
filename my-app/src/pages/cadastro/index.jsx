import { useNavigate } from 'react-router-dom';


import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Column, Container, FazerLogin, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

const Cadastro = () => {

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="Nome Completo" leftIcon={<MdPerson />} />
                        <Input placeholder="e-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" onClick={handleClickHome} type="button"/>
                    </form>
                       <Row>
                           <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de <br/>Privacidade e os termos de uso da DIO.</p>
                           <p>Já tenho conta. <FazerLogin onClick={handleClickLogin}>Fazer Login</FazerLogin></p>
                       </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }