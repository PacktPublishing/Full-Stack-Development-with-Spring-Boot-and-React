import React, { useEffect, useState } from 'react';
import { SERVER_URL } from  '../constants.js';
import { AgGridReact } from 'ag-grid-react';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import AddCar from './AddCar.js';
import EditCar from './EditCar.js';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Carlist() {
  const [cars, setCars] = useState([])
  const [open, setOpen] = useState(false);
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    fetch(SERVER_URL + 'api/cars')
    .then(response => response.json())
    .then(data => setCars(data._embedded.cars))
    .catch(err => console.error(err));    
  }

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const exportData = () => {
    gridApi.exportDataAsCsv({ fileName: 'cars.csv'});
  }

  const onDelClick = (url) => {
    if (window.confirm("Are you sure to delete?")) {
      fetch(url,  {method:  'DELETE'})
      .then(response => {
        if (response.ok) {
          fetchCars();
          setOpen(true);
        }
        else {
          alert('Something went wrong!');
        }
      })
      .catch(err => console.error(err))
    }
  }

  // Add a new car 
  const addCar = (car) =>  {
    fetch(SERVER_URL  +  'api/cars',
      { 
        method: 'POST', 
        headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(car)
    })
    .then(response => {
      if (response.ok) {
        fetchCars()
      }
      else {
        alert('Something went wrong!');
      }
    })
    .catch(err => console.error(err))
  }

  // Update car 
  const updateCar = (car, link) => {
    fetch(link,
      { 
        method: 'PUT', 
        headers: {
        'Content-Type':  'application/json',
      },
      body: JSON.stringify(car)
    })
    .then(response => {
      if (response.ok) {
        fetchCars();
      }
      else {
        alert('Something went wrong!');
      }
    })
    .catch(err => console.error(err))
  }
   
  const columns = [
    {field: 'brand', filter: true, sortable: true},
    {field: 'model', filter: true, sortable: true},
    {field: 'color', filter: true, sortable: true, width: 120},
    {field: 'year', filter: true, sortable: true, width: 120},
    {field: 'price', filter: true, sortable: true, width: 120},  
    {
      headerName: '',
      field: '_links.self.href',
      sortable: false,
      filter: false,
      width: 100,
      cellRendererFramework: 
        params => 
          <EditCar link={params.value} car={params.data} updateCar={updateCar} />
    },
    {
      headerName: '',
      field: '_links.self.href',
      sortable: false,
      filter: false,
      width: 100,
      cellRendererFramework: 
        params => 
          <button onClick={() => onDelClick(params.value)}>
            Delete
          </button>
    }
  ];

  return(
    <React.Fragment>
      <Stack direction="row" spacing={2} justifyContent="center">
        <AddCar addCar={addCar} />
        <button onClick={exportData}>Export</button>
      </Stack>
      <div 
        className="ag-theme-material" 
        style={{height: 500, width: '80%', margin: 'auto'}}
      >
        <AgGridReact
          rowData={cars}
          columnDefs={columns}
          suppressCellSelection={true}
          onGridReady={onGridReady}
        />
        <Snackbar
          open={open}
          autoHideDuration={200000}
          onClose={() => setOpen(false)}
          message="Car deleted"
        />
      </div>
    </React.Fragment>
  );
}

export default Carlist;