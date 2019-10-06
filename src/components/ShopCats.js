import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid';

const ShopCats = (props) => {
    
    let count = 0;
    const cats = props.productCategories.map((cat, idx) => {
        console.log(idx < props.productCategories.length-1)
        const catName = idx < props.productCategories.length-1 ? `${cat.category_name} / ` : cat.category_name;
        return (
            <div key={uuid()}><Link className="text-primary" to="/cats" title="Click To Mange Your Product categories">{cat.category_name}</Link></div>
        )

    });


    return (

            <div className="prod-user-cat-list bg-dark">
                {cats}
            </div>
    )
}

export default ShopCats