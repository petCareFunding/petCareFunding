import React from 'react';
import './Wishlist.css';

const WishlistItem = ({ image, title }) => (
  <div className="wishlist-item">
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);

const Wishlist = () => {
  const items = [
    <img src="/" />, {title: '유치원 찜 목록'},
    <img src="/" />, {title: '용품 찜 목록' },
    <img src="/" />, {title: '컨텐츠 찜 목록' },
  ];

  return (
    <div className="wishlist">
      <h1>찜 목록</h1>
      <div className="wishlist-items">
        {items.map((item, index) => (
          <WishlistItem key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
