const Modal = ({ setShowModal, cartData, addOrder,load, clearCart, total }) => {
  return (
    <main className="back-drop p-3">
      <div className="text-end">
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="btn btn-danger fw-bold"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <section className="cart container bg-light mt-3 p-0 rounded-3 box scroll text-center">
        <h5 className="alert co display-7 rounded-2 text-center">
          Cart <i className="fas fa-shopping-cart"></i>
        </h5>
        <div className="container">
          {cartData.length !== 0 ? (
            <>
              <table className="table table-hover rounded border">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Catagory</th>
                    <th scope="col">Product</th>
                    <th scope="col">Size</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData &&
                    cartData.map((cartData, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{cartData.cat_name}</td>
                          <td>{cartData.product_name}</td>
                          <td>{cartData.size_name}</td>
                          <td>{cartData.value}</td>
                        </tr>
                      );
                    })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="fw-bold">Total :</td>
                    <td className="fw-bold">{total}</td>
                  </tr>
                </tbody>
              </table>
              <div>
              {load ? <button
                  className="btn btn-success fw-bold wit me-1"
                  onClick={addOrder}
                >
                  Submit
                </button>: <button
                  className="btn btn-success fw-bold wit me-1"
                >
                 Generating...
                </button>  }
                
                <button
                  className="btn btn-danger fw-bold wit ms-1"
                  onClick={clearCart}
                >
                  Clear
                </button>
              </div>
            </>
          ) : (
            <center className="mt-5 pt-5">
              <div className="no-alert text-center">
                <i className="fas fa-trash icon mt-4"></i>{" "}
                <h1 className="text-center h4 mt-3 text">No Products</h1>
              </div>
            </center>
          )}
        </div>
      </section>
    </main>
  );
};
export default Modal;
