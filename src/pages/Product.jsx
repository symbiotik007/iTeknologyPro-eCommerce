import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90vh;
  objet-fit: cover;
  width: 100%;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  padding: 0px 50px;
  flex: 1;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 70%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOptions = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  border-radius: 30%;
  height: 30px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const Button = styled.option`
  padding: 15px;
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  border-radius: 2%;
  font-weight: 500;

  &: hover {
    background-color: #b9fff7;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://ecommercepngs.s3.amazonaws.com/ben-kolde-xdLXPic3Wfk-unsplash.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Un producto</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            ratione eos odio deleniti, inventore ad aspernatur et sed sunt
            dolore natus omnis modi cupiditate error dicta tempora ipsa porro!
            Placeat?
          </Description>
          <Price>$ 123</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOptions>S</FilterSizeOptions>
                <FilterSizeOptions>M</FilterSizeOptions>
                <FilterSizeOptions>L</FilterSizeOptions>
                <FilterSizeOptions>XL</FilterSizeOptions>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Añadir al carrito.</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
