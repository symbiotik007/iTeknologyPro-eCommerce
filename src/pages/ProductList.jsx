import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 12px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const Select = styled.select`
  font-size: 16px;
  margin-right: 10px;
  padding: 7px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Chaquetas</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Rojo</Option>
            <Option>Blanco</Option>
            <Option>Azul</Option>
            <Option>Negro</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Talla
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Organizar Productos:</FilterText>
          <Select>
            <Option selected>Más nuevos</Option>
            <Option>Precio (Más caros primero)</Option>
            <Option>Precio (Más baratos primero)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
