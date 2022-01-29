const Modal = ({setShowModal, cartData}) => {
    console.log(cartData)
    return (
        <main className="back-drop p-3">
            <div className="text-end">
            <button onClick={() => {setShowModal(false)}} className="btn btn-light cancel-btn">Cancel</button>
            </div>
        </main>
    )
}
export default Modal;