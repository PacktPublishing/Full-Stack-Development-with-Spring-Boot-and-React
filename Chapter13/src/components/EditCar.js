import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function EditCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: '', model: '', color: '',  
    year: '', fuel:'', price:  ''
  });
    
  // Open the modal form and update the car state
  const handleClickOpen = () => {
    setCar({
      brand: props.data.row.brand,
      model: props.data.row.model,
      color: props.data.row.color,
      year: props.data.row.year,
      fuel: props.data.row.fuel,
      price: props.data.row.price 
    })      
    setOpen(true);
  }

  // Close the modal form 
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (event) => {
    setCar({...car, 
      [event.target.name]: event.target.value});
  }

  // Update car and close modal form 
  const handleSave = () => {
    props.updateCar(car, props.data.id);
    handleClose();
  }

  return(
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit car</DialogTitle>
          <DialogContent>
            <Stack spacing={2} mt={1}>
              <TextField label="Brand" name="brand" autoFocus
                variant="standard" value={car.brand} 
                onChange={handleChange}/>
              <TextField label="Model" name="model" 
                variant="standard" value={car.model} 
                onChange={handleChange}/>
              <TextField label="Color" name="color" 
                variant="standard" value={car.color} 
                onChange={handleChange}/>
              <TextField label="Year" name="year" 
                variant="standard" value={car.year} 
                onChange={handleChange}/>
              <TextField label="Price" name="price" 
                variant="standard" value={car.price} 
                onChange={handleChange}/>
            </Stack>         
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>            
    </div>
  );  
}

export default EditCar;
