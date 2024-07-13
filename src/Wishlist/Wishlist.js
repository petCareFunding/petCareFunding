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
    <img src="/Wishlist_img/kindergarten.png" />, {title: '유치원 찜 목록'},
    <img src="/Wishlist_img/Funding.png" />, {title: '용품 찜 목록' },
    <img src="/Wishlist_img/Supplies.png" />, {title: '컨텐츠 찜 목록' },
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
