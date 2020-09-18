function ModalDelete({ isVisible, handleOk, handleCancel, getName }) {
  return (
    isVisible && (
      <div className="bg-modal">
        <div className="modal">
          <h3 className="title-modal">
            Bạn có chắc chắn muốn xóa sản phẩm {getName} hay không?
          </h3>
          <hr />
          <div className="box-btn">
            <a className="btn-delete" onClick={handleOk}>
              Đồng ý
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
