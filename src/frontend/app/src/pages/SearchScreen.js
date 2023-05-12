import React, { useReducer } from 'react';
import {Link, useNavigate, useLocation } from 'react-router-dom'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { MainNav } from '../components/Main/MainNav';
import { MainCategories } from '../components/Main/MainCategories';
import { useEffect } from 'react';
import { getError } from '../utils';
import axios from 'axios';
import {toast} from 'react-toastify';
import  {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { MainItemCards } from '../components/Main/MainItemCards';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getCurrentUser } from '../api/UserRequests';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true};
        case 'FETCH_SUCCESS':
            return {
                 ...state, 
                 products: action.payload.products,
                 page: action.payload.page,
                 pages: action.payload.pages,
                 countProducts: action.payload.countProducts,
                 loading: false,
                };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload};
        
        default:
            return state;
    }
}

const prices = [
    {
        name: '$1 to $50',
        value: '1-50',
    },
    {
        name: '$51 to $200',
        value: '51-200',
    },
    {
        name: '$201 to $1000',
        value: '201-1000',
    },
];



export default function SearchScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const category = sp.get('category') || 'all';
    const query = sp.get('query') || 'all';
    const price = sp.get('price') || 'all';
    const order = sp.get('order') || 'newest';
    const page = sp.get('page') || 1;

    const [{loading, error, products, pages, countProducts}, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
    });
    const [school, setSchool] = useState("");


    useEffect(() => {
        (async () => {
          try {
            const {data} =  await getCurrentUser();
            setSchool(data.school);
          } catch (error) {
            //console.log(error.respo);
          }
        })();
      },[]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:4000/api/product/search?page=${page}&query=${query}&category=${category}&price=${price}&order=${order}`
                );
                dispatch({type: 'FETCH_SUCCESS', payload: data})
            } catch (error) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(error),
                });
            }
        }
        fetchData();
    }, [page, query, category, price, order]);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/api/product/categories`);
                setCategories(data);
            } catch (error) {
                toast.error(getError(error));
                };
            };
        fetchCategories();
    }, [dispatch]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || page;
        const filterCategory = filter.category || category;
        const filterQuery = filter.query || query;
        const filterPrice = filter.price || price;
        const sortOrder = filter.order || order;
        return `/search?page=${filterPage}&query=${filterQuery}&category=${filterCategory}&price=${filterPrice}&order=${sortOrder}`
    }

    return (
        <>
        <MainNav/> 
        <MainCategories/>
        <div className="background-1">
        <Row>
            <Col md={2} className='boxertemp'>
                {/* comment with 'command ?' */}
            <h3 className='dept'>Department</h3> 
            <div>
                <ul>
                    <li>
                        <Link className={'all' === category ? 'text-bold' : ''} to={getFilterUrl({category: 'all'})}>
                        Any
                        </Link>
                    </li>
                    {categories.map((c) => (
                        <li key={c}>
                            <Link className={c === category ? 'text-bold' : ''} to= {getFilterUrl({ category: c})}>
                                {c}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Price</h3>
                <h3 className='search-price'>Price</h3>
                <ul>
                    <li>
                        <Link className={'all' === price ? 'text-bold' : ''} to={getFilterUrl({price: 'all'})}>
                        Any
                        </Link>
                    </li>
                    {prices.map((p) => (
                        <li key={p.value}>
                            <Link className={p.value === price ? 'text-bold' : ''} to= {getFilterUrl({ price: p.value})}>
                                {p.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </Col>
            <Col md={9}>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                    <Row className="justify-content-between mb-3">
                    <Col md={6}>
                        <div>
                            {countProducts === 0 ? 'No' : countProducts} Results 
                            {query !== 'all' && ' : ' + query}
                            {category !== 'all' && ' : ' + category}
                            {price !== 'all' && ' : ' + price}
                            {query !== 'all' ||
                            category !== 'all' ||
                            price !== 'all' ? (
                                <Button variant="light" onClick={() => navigate('/search')}>
                                    <i className="fas fa-times-circle"></i>
                                </Button>
                            ) : null}
                        </div>
                    </Col>
                    <Col className="text-end">
                        Sort by{' '}
                        <select value={order} onChange={(e) => {
                            navigate(getFilterUrl({ order: e.target.value }));
                        }}>
                            <option value="newest">Newest Arrivals</option>
                            <option value="lowest">Price: Low to High</option>
                            <option value="highest">Price: High to Low</option>
                        </select>
                    </Col>
                    </Row>
                    {products.length === 0 && <div>No Product Found</div>}
                    <Row>
                        {products.map((product) => ( product.school === school && product.purchased === false &&
                            <Col sm={6} lg={4} className="mb-3" key={product._id}>
                                <MainItemCards product={product}></MainItemCards>
                            </Col>
                        ))}
                    </Row>

                    
                    </>
                )}
            </Col>
        </Row>
        </div>
        
        </>
    );
}