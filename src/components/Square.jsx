import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"

function Square({ value, onClick }) {
    return (
        <>
            <Button
                className="border border-light rounded-0"
                style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "3rem",
                }}
                onClick={onClick}
            >
                {value}
            </Button>
        </>
    )
    
}

Square.propTypes = {
    value: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}

export default Square