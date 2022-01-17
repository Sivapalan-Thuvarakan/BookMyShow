import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Card  from "react-bootstrap/Card";
import { useState,useEffect } from 'react';
import axios from 'axios';
// import data from "./movies.json";
function AllMovies(){
    const [data,setData] = useState([]);
    useEffect(async () => {
        try {
          const response = await axios.get('http://localhost:5000/movies');
          console.log(response);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
    }, [])
    // async function getMovies() {
    //     try {
    //       const response = await axios.get('http://localhost:5000/movies');
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    return (
        <div>
            <Container fluid style={{ background:"gray",padding:"1%" }}>
                <Row style={{ textAlign:"center",margin:"2%" }}>
                    {data.map((mov)=>
                            <Col xs={6} md={3} lg={2} style={{ marginLeft:"5%",marginBottom:"2%"}}>
                                <Card onClick={() => window.location.href="/all-movies/"+mov._id} id={mov._id} key={mov._id} className="bg-dark text-white" style={{ cursor:"pointer" }} >
                                    <Card.Img variant="top" src={mov.imageurl} style={{ height:"75%" }}/>
                                    <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>
                                        {mov.actor}
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default AllMovies;