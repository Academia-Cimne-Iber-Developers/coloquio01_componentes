function Modal({ title, content, onClose, onAccept }) {
    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content">
                <div className="box">
                    <h1 className="title">{title}</h1>
                    <div className="content">{content}</div>
                    <footer className="modal-card-foot">
                        <div className="buttons">
                            <button
                                className="button is-success"
                                onClick={onAccept}
                            >
                                Confirm
                            </button>
                            <button className="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={onClose}
            ></button>
        </div>
    );
}

export default Modal;
