import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProductImage from '../../assets/ProductImage.svg';
import ProductDetail1 from '../../assets/ProductDetail1.svg';
import ProductDetail2 from '../../assets/ProductDetail2.svg';
import ProductDetail3 from '../../assets/ProductDetail3.svg';

import './styles.css';

function Product() {

  const [qtd, setQtd] = useState(0);

  function addQtd(){
    setQtd(qtd+1)
  }
  function removeQtd(){
    if(qtd <= 0) return;
    setQtd(qtd-1)
  }

  return (
    <Container>
      <div className="product-page">
        <Row>
          <Col xs="5">
            <div>
              <img src={ProductImage} alt="Imagem do Produto" className="product-image"/>
              <div className="product-image-list">
                <ul>
                  <li><img src={ProductDetail1} alt="Detalhe 1"/></li>
                  <li><img src={ProductDetail2} alt="Detalhe 2"/></li>
                  <li><img src={ProductDetail3} alt="Detalhe 3"/></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs="7">
            <Row>
              <div className="breadcrumb-product">
                <ul>
                  <li>
                    <a href="!#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      Men's Clothing & Acessories
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
            <Row>
              <div className="description-stars">
                <p>Estrelas</p>
              </div>
            </Row>
            <Row>
              <div className="description-product">
                <h3>Super Oversized T-Shirt <br/> With Raw Sleeves In Brown</h3>
              </div>
            </Row>
            <Row>
              <div className="description-price">
                <h4>R$ 13,99</h4>
              </div>
            </Row>
            <Row>
              <div className="description-color">
                <h4>Color</h4>
                <span class="dot dot-1"></span>
                <span class="dot dot-2"></span>
                <span class="dot dot-3"></span>
                <span class="dot dot-4"></span>
                <span class="dot dot-5"></span>
                <span class="dot dot-6"></span>
                <span class="dot dot-7"></span>
              </div>
            </Row>
            <Row>
              <div className="description-size">
                <h4>Size</h4>              
                <h5>
                  <a href="!#">
                    Size Guide
                  </a>
                </h5>
              </div>
              <div className="squares">
                <div className="square">XS</div>
                <div className="square">S</div>
                <div className="square">M</div>
                <div className="square">L</div>
                <div className="square">XL</div> 
                <div className="square">XXL</div> 
              </div>
            </Row>
            <Row>
              <div className="description-qtd">
                <h4>Quantity</h4>
                <span class="dot dot-qtd-minus" onClick={removeQtd}>-</span>
                <span class="dot dot-qtd">{qtd}</span>
                <span class="dot dot-qtd-plus" onClick={addQtd}>+</span>
              </div>
            </Row>
            <Row>
              <div className="description-cart">
                <button>Add to Cart</button>
                <span>Add to Wish List</span>
              </div>
            </Row>
          </Col>        
        </Row>
      </div>
        
      <div className="products-review">

        <Row>
          <div className="title">
            <h3>Product Reviews</h3>
          </div>
        </Row>
        <Row>
          <div className="products-review-details">
            <Col xs="3">
              <div className="stars">
                <p>Stars</p>
                <p>One hour ago</p>
              </div>
            </Col>
            <Col xs="9">
              <div className="description">
                <p>Got this through the post the other day and right from opening the packet I knew this was quality, put it on and I was right!! Well done</p>  
              </div>
            </Col>
          </div>

        </Row>
      </div>

      {/* <div className="add-review">

        <Row>
          <Row>
            <h3>Add Review</h3>
          </Row>
          <Row>
            <Col xs="3"></Col>
            <Col xs="9">
              Form
            </Col>
          </Row>
        </Row>

      </div> */}

    </Container>
   )
}

export default Product
