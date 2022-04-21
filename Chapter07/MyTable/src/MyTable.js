import React from 'react';

function MyTable() {
  const data = [
    {brand: 'Ford', model: 'Mustang'},
    {brand: 'VW', model: 'Beetle'}, 
    {brand: 'Tesla', model: 'Model S'}];

  return (
    <div>
      <table>
        <tbody>
        {
        data.map((item, index) =>
          <tr key={index}>
            <td>{item.brand}</td><td>{item.model}</td>
          </tr>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
