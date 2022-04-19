import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { adminContext } from '../contexts/AdminContext'

const EditProductPage = () => {
    const data = React.useContext(adminContext)
    const { getProductToEdit,productToEdit,saveEditedProduct } = data

    const params = useParams()
    const navigate = useNavigate()
    // console.log(productToEdit)

    const [editedProduct, setEditedProduct] = useState(productToEdit)

    // console.log(newProduct)

    const handleSubmit = (event) => {
        event.preventDefault()
        for (let key in editedProduct) {
            let value = editedProduct[key]
            if (typeof value === "string") {
                if (!value.trim()) {
                    alert("Заполните поля!")
                    return
                }
            }

        }

        saveEditedProduct(editedProduct)
        navigate("/admin-panel")
        
    }

    useEffect(()=>{
      getProductToEdit(params.id)
    },[])

    useEffect(()=>{
     setEditedProduct(productToEdit)
    },[productToEdit])

    if (!editedProduct) {
      return <h2>Loading...</h2>
    }

    return (
        <Container>
            <div className='add-edit-page'>
                <h2>Редактировать товар</h2>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} value={editedProduct.name} label="Введите название" variant='standard' />
                    <TextField onChange={(e) => setEditedProduct({ ...editedProduct, desc: e.target.value })} value={editedProduct.desc} label="Введите описание" variant='standard' />
                    <TextField type="number" onChange={(e) => setEditedProduct({ ...editedProduct, price: parseInt(e.target.value) })} value={editedProduct.price} label="Введите цену" variant='standard' />
                    <TextField onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })} value={editedProduct.image} label="Введите фото" variant='standard' />
                    <FormControl variant='standard' >
                        <InputLabel id='color-select-label'>Выберите цвет</InputLabel>
                        <Select onChange={(e) => setEditedProduct({ ...editedProduct, color: e.target.value })} value={editedProduct.color} label="Выберите цвет" labelId='color-select-label' >
                            <MenuItem value="black">Чёрный</MenuItem>
                            <MenuItem value="white">Белый</MenuItem>
                            <MenuItem value="blue">Синий</MenuItem>
                            <MenuItem value="pink">Розовый</MenuItem>
                            <MenuItem value="yellow">Жёлтый</MenuItem>
                            <MenuItem value="red">Красный</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant='standard' >
                        <InputLabel id='size-select-label'>Выберите размер</InputLabel>
                        <Select onChange={(e) => setEditedProduct({ ...editedProduct, size: e.target.value })} value={editedProduct.size} label="Выберите размер" labelId='size-select-label' >
                            <MenuItem value="s">SMALL</MenuItem>
                            <MenuItem value="m">MIDDLE</MenuItem>
                            <MenuItem value="l">LARGE</MenuItem>
                            <MenuItem value="xl">EXTRA LARGE</MenuItem>
                            <MenuItem value="xxl">XX LARGE</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type='submit' variant='outlined'>Сохранить</Button>
                </form>
            </div>
        </Container>
    )
}

export default EditProductPage