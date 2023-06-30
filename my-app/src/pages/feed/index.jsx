import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING DA SEMANA </TitleHighlight>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={72}/>
                <UserInfo nome="Thiago Santos" image="https://avatars.githubusercontent.com/u/88001621?v=4" percentual={65}/>
                <UserInfo nome="Harys Rafael" image="https://avatars.githubusercontent.com/u/69483666?v=4" percentual={45}/>
                <UserInfo nome="Lucas Magalhães" image="https://avatars.githubusercontent.com/u/43296467?v=4" percentual={25}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 