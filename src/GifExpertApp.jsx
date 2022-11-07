import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Lady Gaga'])

    const onAddCategory = (newValue) => {
        if (categories.includes(newValue)) return;
        setcategories([newValue, ...categories])
    }

    return (
        <>
            <h1>Gif expert</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            <button onClick={onAddCategory}>Agregar</button>

            {
                categories.map((category =>
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
