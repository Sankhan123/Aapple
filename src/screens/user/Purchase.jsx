import axios from "axios";
import React from "react";
import { useEffect } from "react";


function Purchase() {

  useEffect(() => {
    async function getproducts(){
      const response = await axios.get("http://127.0.0.1:8000/api/get-products");

      if(response){
        console.log(response);
      }
    }

    getproducts();
   
  }, [])


    return(
        <>
            <PurchaseCategory catagoryId = {1}/>
            <PurchaseCategory catagoryId = {2}/>
            <PurchaseCategory catagoryId = {3}/>
        </>
    )
}

function PurchaseCategory({catagoryId}) {
  return (
    <>
      <section className="col">
        <div className="alert alert-primary" role="alert">
          Product Catagory {catagoryId}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">1L</th>
              <th scope="col">10L</th>
              <th scope="col">15L</th>
              <th scope="col">Cart</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">White</th>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
            </tr>
            <tr>
              <th scope="row">Black</th>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
            </tr>
            <tr>
              <th scope="row">Grey</th>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
              <td>
                <input type="number" name="" id="" min="0" max="20" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="alert alert-secondary text-end">
            <span>Total Product : </span>
            <input type="number" name="" id="" min="0" max="100"/>
        </div>
      </section>
    </>
  );
}

export default Purchase;
