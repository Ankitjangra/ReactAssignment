import React, { useEffect, useState } from 'react';

const AllItemsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>Name: </strong>{item.name} <br />
            <strong>Description: </strong>{item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllItemsComponent;