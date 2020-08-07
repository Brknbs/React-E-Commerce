import React from 'react';
import ShopMen from '../../assets/shopMens.jpg';
import ShopWomen from '../../assets/shopWomens.jpg';
import './directory.scss';
import '../../sass/main.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap row">
        <div className="item col-sm-12 col-md-6" style={{backgroundImage: `url(${ShopWomen})`}}> 
          <a>Shop Womens</a>
        </div>
        <div className="item col-sm-12 col-md-6" style={{backgroundImage: `url(${ShopMen})`}}> 
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  )
}

export default Directory;