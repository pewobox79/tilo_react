import { createPortal } from "react-dom"
const DefaultModal = ({ title, paragraph, open }) => {

    return <>{open ? createPortal(<div className="modal" style={{ display: open ? "fixed" : "none" }}>
        <div className="modalInner">
            <h3>Modal {title}</h3>
            <p>{paragraph}</p>
        </div>
    </div>, document.body) : ""}</>
}

export default DefaultModal