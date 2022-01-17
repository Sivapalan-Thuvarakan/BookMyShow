import  Carousel  from "react-bootstrap/Carousel";
import  Card  from "react-bootstrap/Card";
import  CardGroup  from "react-bootstrap/CardGroup";
function Premire() {
  return (
    <div style={{ margin:"20px",background:"gray",padding:"5%" }}>
        <h2>Premires</h2>
         <Carousel variant="dark" indicators={false}>
            <Carousel.Item>
            <CardGroup style={{ display:"flex", gap:"30px", justifyContent:"space-around" }}>
                <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                    <Card.Img variant="top" src="./logo192.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                    <Card.Img variant="top" src="./logo192.png"/>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                    <Card.Img variant="top" src="./logo192.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup style={{ display:"flex", gap:"30px", justifyContent:"space-around" }}>
                    <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                        <Card.Img variant="top" src="./logo192.png" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                        <Card.Img variant="top" src="./logo192.png" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                        <Card.Img variant="top" src="./logo192.png" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup style={{ display:"flex", gap:"30px", justifyContent:"space-around" }}>
            <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                <Card.Img variant="top" src="./logo192.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                <Card.Img variant="top" src="./logo192.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{ height:"500px",width:"300px" }}>
                <Card.Img variant="top" src="./logo192.png" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}

export default Premire;
