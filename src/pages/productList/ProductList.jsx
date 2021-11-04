import { DataGrid } from '@material-ui/data-grid'
import './productList.scss'
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product', headerName: 'Product', width: 270, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.image} alt="" className='productListImg' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 270 },
        { field: 'status', headerName: 'Status', width: 270, },
        { field: 'price', headerName: 'Price', width: 260, },
        {
            field: 'action', headerName: 'Action', width: 270, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/ ' + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];
    return (
        <div className='productList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={15} checkboxSelection />
        </div>
    )
}
