import styled from "styled-components";
import { mobile } from "../responsive";
// import Announcement from "../components/Announcement";
// import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100vm;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://ecommercepngs.s3.amazonaws.com/jakob-owens-CTflmHHVrBM-unsplash.jpg")
      center;

  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;

  &: hover {
    background-color: #7dc2e8;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crea tu cuenta!</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirma tu contraseña" />
          <Agreement>
            Al crear una cuenta estoy de acuerdo con la política de privacidad
            de datos que puede ser leída en el siguiente <b>enlace</b>
          </Agreement>
          <Button>Crear mi cuenta</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
