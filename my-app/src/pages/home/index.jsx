import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import banner from '../../assets/banner.png';

import { Container, TextContent, Title, TitleHighLight} from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickCadastre = () => {
        navigate('/cadastro')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente 
                    <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="começar agora" variant="secondary" onClick={handleClickCadastre}/>
            </div>
            <div>
                <img src={banner} alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}

export { Home }