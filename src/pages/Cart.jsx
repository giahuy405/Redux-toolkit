import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, changeQuantity } from '../redux/reducers/shopReducer';
const Cart = () => {
  const { cart } = useSelector(state => state.shopReducer);
  const dispatch = useDispatch();
  const [inputA, setInputA] = useState({ myInput: '' });
  return (
    <div>
      <input type="text" onChange={(event) => setInputA({ ...inputA, myInput: event.target.value })} />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">

              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item =>
              <tr className="bg-white border-b" key={item.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  <img width={50} src={item.image} alt="" />
                </td>
                <td className="px-6 py-4">
                  {item.price}
                </td>
                <td className="px-6 py-4">

                  <button
                    onClick={() => {
                      const itemCart = {
                        quantity: -1,
                        id: item.id
                      }
                      dispatch(
                        changeQuantity(itemCart)
                      )
                    }}
                    type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 px-4 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">-</button>
                  {item.quantity}
                  <button
                    onClick={() => {
                      const itemCart = {
                        quantity: 1,
                        id: item.id
                      }
                      dispatch(
                        changeQuantity(itemCart)
                      )
                    }}
                    type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 px-4 ml-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">+</button>
                </td>
                <td className="px-6 py-4">
                  {(item.price * item.quantity).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      dispatch(
                        deleteCartItem(item.id)
                      )
                    }}
                    type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xóa</button>
                </td>
              </tr>
            )}


          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Cart


