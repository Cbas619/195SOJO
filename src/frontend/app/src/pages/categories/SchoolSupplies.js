import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";
import  {useState} from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../actions/productActions";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import axios from 'axios';
export function SchoolSupplies() {
  const dispatch = useDispatch();

  const {loading, products, error} = useSelector(state => state.products)
  const [school, setSchool] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setSchool(respo.data.school);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <div className="categoryPageHeader">School Supplies</div>
      <div className="categorySection">
        <Row>
        {products && products.map(products => (
          products.category === 'supplies' && products.purchased === false && products.school === school &&
          <Col key={products._id} sm={6} md={4} lg={2}>
            <div className="mainItemCard">
              <MainItemCards product={products}/>
            </div>
          </Col>
        ))}
        </Row>     
      </div>

    </div>
    </>       
  );
}