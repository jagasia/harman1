import { useMemo, useReducer, useState } from 'react';

// Initial product list
const initialState = [
    { id: 1, name: 'Pencil', price: 10 },
    { id: 2, name: 'Pen', price: 20 },
    { id: 3, name: 'Notebook', price: 50 },
];

// Reducer function for CRUD
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];

        case 'UPDATE':
            return state.map(p => (p.id === action.payload.id ? action.payload : p));

        case 'DELETE':
            return state.filter(p => p.id !== action.payload);

        default:
            return state;
    }
};

export const ProductManager = () => {
    const [products, dispatch] = useReducer(reducer, initialState);
    const [form, setForm] = useState({ id: 0, name: '', price: '' });
    const [minPrice, setMinPrice] = useState(0);

    // Memoize the filtered product list
    const filteredProducts = useMemo(() => {
        console.log('Filtering products...');
        return products.filter(p => p.price >= minPrice);
    }, [products, minPrice]);

    // Handle Add / Update
    const handleSubmit = (e) => {
        e.preventDefault();
        const price = parseFloat(form.price);
        if (!form.name || isNaN(price)) return;

        if (form.id === 0) {
            dispatch({
                type: 'ADD',
                payload: { ...form, id: Date.now(), price },
            });
        } else {
            dispatch({
                type: 'UPDATE',
                payload: { ...form, price },
            });
        }

        setForm({ id: 0, name: '', price: '' });
    };

    const handleEdit = (product) => {
        setForm(product);
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    return (
        <div>
            <h2>Product Manager with useMemo</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                />
                <button type="submit">{form.id === 0 ? 'Add' : 'Update'}</button>
            </form>

            <hr />

            <label>Minimum Price Filter: </label>
            <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
            />

            <h3>Products (filtered)</h3>
            <br/><br/><br/>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Price</th><th></th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredProducts.map((p, i)=><tr key={i}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>
                            <button className='btn btn-warning' onClick={() => handleEdit(p)}>Edit</button>&nbsp;
                        <button className='btn btn-danger' onClick={() => handleDelete(p.id)}>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        </div>
    );
};
