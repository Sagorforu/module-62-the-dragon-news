import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-sagorislam1318-gmailcom.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4 className="mb-4">All Categories</h4>
      <h5 className="p-4 text-center bg-light mb-4">National News</h5>
      <div className="ps-5">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-secondary text-decoration-none">{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
