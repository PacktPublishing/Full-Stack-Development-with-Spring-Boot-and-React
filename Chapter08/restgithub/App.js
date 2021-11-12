import React, { useState } from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => response.json())
    .then(data => setData(data.items))
    .catch(err => console.error(err))
  }

  const columns = [
    {field: 'full_name', sortable: true, filter: true},
    {field: 'html_url', sortable: true, filter: true},
    {field: 'owner.login', sortable: true, filter: true},
    {
      field: 'full_name',
      cellRendererFramework: params => 
        <button 
          onClick={() => alert(params.value)}>
          Press me
        </button>
    }
  ]

  return (
    <div className="App">
      <input value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={fetchData}>Fetch</button>
      <div className="ag-theme-material" style={{height: 500, width: '90%'}}>
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={8}
        />
      </div>
    </div>
  );
}

export default App;
