import React from 'react'

import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css';

import { Link } from 'react-router-dom';

import Category from '../components/UI/category/Category';

import '../styles/home.css';

import featureimg01 from '../assets/images/service-01.png'
import featureimg02 from '../assets/images/service-02.png'
import featureimg03 from '../assets/images/service-03.png'

/*import products from '../assets/fake-data/products.js'*/

import foodCategoryImg01 from '../assets/images/carne.png'
import foodCategoryImg02 from '../assets/images/bebida.png'
import foodCategoryImg03 from '../assets/images/acompanhamento.png'
import foodCategoryImg04 from '../assets/images/sobremesa.png'

const featureData = [
  {
    title:'Quick Delivery',
    imgUrl: featureimg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et."
  },
  {
    title:'Super Dine in',
    imgUrl: featureimg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et."
  },
  {
    title:'Easy Pick Up',
    imgUrl: featureimg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et."
  },
]



const Home = () => {
  return <Helmet title='Home'>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
            <h5 className="mb-3">Easy way to make an order</h5>
            <h1 className="mb-4 hero__title">
              <span> HUNGRY?</span> Just wait <br /> food at
              <span> your door</span>
            </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iusto libero, 
                earum saepe facilis explicabo dolor esse aperiam voluptatem eius laborum inventore qui!
              </p>

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between">Order now
                <i class="ri-arrow-right-s-line"></i>
                </button>

                <button className="all__foods-btn">
                  <Link to='/foods'>See all foods</Link>
                </button>
              </div>

              <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>{" "}
                    No shipping Charge
                  </p>

                <p className=" d-flex align-items-center gap-2 ">
                 <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                 </span>{" "}
                   100% secure checkout
                </p>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero-img" className="w-100"  />
            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Category />
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h5 className="feature__subtitle mb-4">What we serve</h5>
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">
              we will <span>take care</span>
            </h2>
            <p className="mb-1 mt-4 feature__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque, laudantium.
            </p>
            <p className="feature__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis, saepe.{" "}
            </p>
          </Col>

          {
            featureData.map((item,index)=>(
              <Col lg='4' md='4' key={index} className='mt-5'>
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2>Popular Foods</h2>
          </Col>

          <Col lg='12'>
            <div className="food__category">
              <button className="all_btn">All</button>
              <button><img src={foodCategoryImg01} alt="" />Carne</button>
              
              <button><img src={foodCategoryImg02} alt="" />Bebida</button>

              <button><img src={foodCategoryImg03} alt="" />Acompanhamento</button>

              <button><img src={foodCategoryImg04} alt="" />Sobremesa</button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home
