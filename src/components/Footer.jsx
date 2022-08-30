import styled from "styled-components";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div``;

const Description = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 10px 0px;
`;

const Payment = styled.img`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 200px;
  height: 40px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>iTeknology</Logo>
        <Description>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit
          inventore assumenda repellendus quis perspiciatis temporibus ipsa
          enim, ut cum itaque adipisci officiis tempore architecto maiores
          eligendi voluptatum vel dignissimos!
        </Description>
        <SocialContainer>
          <SocialIcon color="0050FF">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="00d0ff">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="ff0050">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links utiles</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Hombres</ListItem>
          <ListItem>Mujeres</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Mi Cuenta</ListItem>
          <ListItem>Seguimiento de mi Pedido</ListItem>
          <ListItem>Lista de deseos</ListItem>
          <ListItem>Términos y Condiciones</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto:</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Cra 12 #32-44 - Bogotá - Colombia
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +573214567890
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />
          contact@iteknology.com
        </ContactItem>
        <Payment src="https://ecommercepngs.s3.amazonaws.com/pagos_1.png" />
      </Right>
    </Container>
  );
};

export default Footer;
