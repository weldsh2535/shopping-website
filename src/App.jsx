import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([ ])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  console.log(data)

  useEffect(() => {
    console.log('count', count)
  }, [count])

  return (
    <>
      <h1>Shopping </h1>
      <div className="card">
       <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}
        </tbody>
    </table>
    </div>
    </>
  )
}

export default App
