function ModalDelete({ isVisible, handleOk, handleCancel }) {
  return (
    isVisible && (
      <div className="bg-modal">
        <div className="modal">
          <h2 className="title-modal">
            Bạn có chắc chắn muốn xóa sản phẩm hay không?
          </h2>
          <hr />
          <div className="box-btn">
            <a className="btn-delete" onClick={handleOk}>
              Xóa
            </a>
            <a className="btn-cancel" onClick={handleCancel}>
              Thoát
            </a>
          </div>
        </div>
      </div>
    )
  );
}
