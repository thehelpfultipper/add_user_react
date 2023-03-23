import Button from "./UI/Button";
import Card from "./UI/Card";

const Modal = props => {
    return (
        <div className="modal_overlay">
            <Card>
                <div className="modal_header">
                    <p>Invalid input</p>
                </div>
                <div className="modal_body">
                    <p>Error message goes in here.</p>
                </div>
                <Button type="button">Close</Button>
            </Card>
        </div>
    )
}

export default Modal;