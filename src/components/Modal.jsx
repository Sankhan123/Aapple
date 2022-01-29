const Modal = ({setShowModal, cartData}) => {
    console.log(cartData)
    function toggleModalfalse() {
        setShowModal(false);
    }
    return (
        <main className="back-drop p-3">
            <div className="text-end">
            <button onClick={toggleModalfalse} className="btn btn-light cancel-btn">Cancel</button>
            </div>
        </main>
    )
}
export default Modal;