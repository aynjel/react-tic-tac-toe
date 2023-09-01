import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";

function Winner({ winner }) {
    return (
        <div className="position-absolute top-50 start-50"
            style={{ 
                transform: "translate(-50%, -50%)",
                zIndex: 1,
            }}
        >
            <Card className="shadow-lg rounded p-3 border-4 border-secondary">
            <Card.Body className="text-center">
            <Badge bg="success" className="fs-5 mb-3">
                Winner: {winner}
            </Badge>
            </Card.Body>
                <Card.Footer>
            <Button variant="outline-primary" className="mt-3">
                Start New Game
            </Button>
            </Card.Footer>
            </Card>
        </div>
    );
}

Winner.propTypes = {
    winner: PropTypes.string,
};

export default Winner;
