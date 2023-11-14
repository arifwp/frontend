import { useEffect, useState } from "react"
import api from '../api'
import { useNavigate } from "react-router-dom"
import { Table } from "react-bootstrap";

const ProductIndex = () => {
    const [product, setProduct] = useState([])

    const fetchDataProduct = async () => {
        await api.post('/product').then(response => {
            setProduct(response.data.data.data)
        })
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        } else {
            fetchDataProduct()
        }
    }, [])

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.length > 0
                        ? product.map((product, index) => (
                            <tr key={index}>
                                <td className="text-center">
                                    <img src={product.image} alt={product.name} width="200" className='rounded' />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.description}</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="alert alert-danger mb-0">
                                    Data Belum Tersedia!
                                </div>
                            </td>
                        </tr>
                }
            </tbody>
        </Table>
        // <div className="container mt-5 mb-5">
        //     <div className="row">
        //         <div className="col-md-12">
        //             <div className="card border-0 rounded shadow">
        //                 <div className="card-body">
        //                     <table className="table table-bordered">
        //                         <thead className="bg-dark text-white">
        //                             <tr>
        //                                 <th scope="col">Image</th>
        //                                 <th scope="col">Name</th>
        //                                 <th scope="col">Price</th>
        //                                 <th scope="col">Stock</th>
        //                                 <th scope="col">Description</th>
        //                                 <th scope="col" style={{ 'width': '15%' }}>Actions</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {
        //                                 product.length > 0
        //                                     ? product.map((product, index) => (
        //                                         <tr key={index}>
        //                                             <td className='text-center'>
        //                                                 <img src={product.image} alt={product.name} width="200" className='rounded' />
        //                                             </td>
        //                                             <td>{product.name}</td>
        //                                             <td>{product.price}</td>
        //                                             <td>{product.stock}</td>
        //                                             <td>{product.description}</td>
        //                                             <td className="text-center">
        //                                                 {/* <Link to={`/product/edit/${product.id}`} className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</Link> */}
        //                                                 <button className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
        //                                             </td>
        //                                         </tr>
        //                                     ))

        //                                     : <tr>
        //                                         <td colSpan="4" className="text-center">
        //                                             <div className="alert alert-danger mb-0">
        //                                                 Data Belum Tersedia!
        //                                             </div>
        //                                         </td>
        //                                     </tr>
        //                             }
        //                         </tbody>
        //                         <tfoot>
        //                             <tr>
        //                                 <th scope="col">Image</th>
        //                                 <th scope="col">Name</th>
        //                                 <th scope="col">Price</th>
        //                                 <th scope="col">Stock</th>
        //                                 <th scope="col">Description</th>
        //                                 <th scope="col" style={{ 'width': '15%' }}>Actions</th>
        //                             </tr>
        //                         </tfoot>
        //                     </table>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductIndex