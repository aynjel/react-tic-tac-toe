import { Badge, Button, Container } from "react-bootstrap"
import Square from "./Square";
import Winner from "./Winner";
import { FaTimes, FaRegCircle } from "react-icons/fa";

function Game() {
    return (
        <>
            <Container
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ minHeight: "100vh" }}
            >
                {/* <Winner /> */}
                <div
                    className="shadow-lg rounded p-3"
                    >
                    <h1 className="text-center fw-bold">Tic Tac Toe</h1>
                        <hr />
                    <Badge bg="primary" className="fs-5 mb-3">
                        Next Player: { <FaRegCircle /> || <FaTimes /> }
                    </Badge>
                    <div className="d-grid"
                        style={{
                            gridTemplateColumns: "repeat(3, 1fr)",
                            width: "300px",
                        }}
                    >
                        <div>
                            <Square />
                            <Square />
                            <Square />
                        </div>
                        <div>
                            <Square />
                            <Square />
                            <Square />
                        </div>
                        <div>
                            <Square />
                            <Square />
                            <Square />
                        </div>
                    </div>
                    <Button variant="outline-primary" className="mt-3">
                        Reset
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default Game
