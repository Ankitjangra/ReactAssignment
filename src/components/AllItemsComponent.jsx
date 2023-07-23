import React, { useEffect, useState } from 'react';

const AllItemsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setData(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>Name: </strong>{item.title} <br />
            <strong>Description: </strong>{item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllItemsComponent;