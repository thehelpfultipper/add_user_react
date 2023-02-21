import Button from "./UI/Button";
import Card from "./UI/Card";

const Modal = props => {
    return (
        <div className="modal_overlay">
            <Card>
                <div className="modal_header"></div>
                <div className="modal_body">Error message goes in here.</div>
                <Button type="button">Close</Button>
            </Card>
        </div>
    )
}

export default Modal;