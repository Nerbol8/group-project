import React, { useState } from 'react'
import {Button, Container, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material'
import { adminContext } from '../contexts/AdminContext'

const AddProductPage = () => {

    const data = React.useContext(adminContext)

    const {addProduct}=data

const [newProduct,setNewProduct]=useState({
    name: "",
    desc:"",
    price:"",
    image:"",
    size:"",
    color:""
})

const handleSubmit=(event)=>{
    event.preventDefault();

    for (let key in newProduct){
        let value = newProduct[key]
        if (typeof value==="string"){
            if(!value.trim()){
                alert('Заполните поля!')
                return
            }
        }
    }
    addProduct(newProduct);
    setNewProduct({
        name: "",
        desc:"",
        price:"",
        image:"",
        size:"",
        color:""
    })
}

  return (
      <Container>
    <div className='add-edit-page'>
        <h1>Добавить товар</h1>
        <form onSubmit={handleSubmit}>
            <TextField onChange={(e)=>setNewProduct({...newProduct, name: e.target.value})} value={newProduct.name}label="Введите название" variant='standard'/>
            <TextField onChange={(e)=>setNewProduct({...newProduct, desc: e.target.value})}value={newProduct.desc}label="Введите описание" variant='standard'/>
            <TextField type="number" onChange={(e)=>setNewProduct({...newProduct, price: parseInt(e.target.value)})}value={newProduct.price}label="Введите цену" variant='standard'/>
            <TextField onChange={(e)=>setNewProduct({...newProduct, image: e.target.value})}value={newProduct.image}label="Вставьте фото" variant='standard'/>
        <FormControl variant='standard'>
            <InputLabel id='color-select-label'>Выберите цвет</InputLabel>
            <Select onChange={(e)=>setNewProduct({...newProduct, color: e.target.value})}value = {newProduct.color}label="Выберите цвет" labelId='color-select-label'>
              <MenuItem value="black">Черный</MenuItem> 
              <MenuItem value="white">Белый</MenuItem> 
              <MenuItem value="blue">Синий</MenuItem> 
              <MenuItem value="pink">Розовый</MenuItem> 
              <MenuItem value="yellow">Желтый</MenuItem> 
              <MenuItem value="red">Красный</MenuItem> 
            </Select>
        </FormControl>

        <FormControl variant='standard'>
            <InputLabel id='size-select-label'>Выберите размер</InputLabel>
            <Select onChange={(e)=>setNewProduct({...newProduct, size: e.target.value})}value={newProduct.size}label="Выберите размер" labelId='size-select-label'>
              <MenuItem value="s">SMALL</MenuItem> 
              <MenuItem value="m">MIDDLE</MenuItem> 
              <MenuItem value="l">LARGE</MenuItem> 
              <MenuItem value="xl">EXTRA LARGE</MenuItem> 
              <MenuItem value="xxl">XX LARGE</MenuItem> 
              
            </Select>
        </FormControl>
        <Button type="submit" variant='outlined'>Добавить</Button>
            
        </form>
    </div>
    </Container>
  )
}

export default AddProductPage