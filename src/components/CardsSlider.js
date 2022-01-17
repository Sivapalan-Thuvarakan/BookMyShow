import  Carousel  from "react-bootstrap/Carousel";
import  Card  from "react-bootstrap/Card";
import  CardGroup  from "react-bootstrap/CardGroup";
function CardsSlider() {
  return (
    <div style={{ margin:"20px",background:"gray",padding:"5%" }}>
         <Carousel variant="dark" indicators={false}>
            <Carousel.Item>
                <CardGroup style={{ display:"flex", gap:"30px", justifyContent:"space-around" }}>
                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup style={{ display:"flex", gap:"30px", justifyContent:"space-around" }}>
                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup style={{ display:"flex", gap:"30px", justifyContent:"space-around" }}>
                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{ height:"300px",width:"300px" }}>
                    <Card.Img src="./logo192.png" alt="Card image"  style={{ height:"300px",width:"300px",paddingLeft:"50px"}} />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}

export default CardsSlider;
