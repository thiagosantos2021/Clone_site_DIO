import { useNavigate } from 'react-router-dom';

import { MdEmail, MdLock } from 'react-icons/md';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

const Login = () => {

    const navigate = useNavigate();

    const handleClickFeed = () => {
        navigate('/feed')
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
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu Login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="e-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickFeed} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha Senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }