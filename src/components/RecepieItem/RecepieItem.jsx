import React from 'react'
import { Row,Col } from 'react-bootstrap'
function RecepieItem({item}) {
  return (
    <div className='item-container'>

        <div>
            <Row className='recepie-title'>
                <h4> {item.title}</h4>
            </Row>
            <Row>
            <img src={item.image_url} />
            </Row>
            <Row>
                <NavLink to={`/recipe/${item.id}`} className="detail-link">
                 Recepie Details
                </NavLink>
            </Row>
        </div>

    </div>
  )
}

export default RecepieItem