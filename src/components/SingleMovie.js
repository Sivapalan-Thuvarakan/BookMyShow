import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Card  from "react-bootstrap/Card";
import data from "./movies.json";
import {useParams} from "react-router";
import { useState,useEffect } from 'react';
import axios from 'axios';

function SingleMovie(){
    const {movid} = useParams();
    const [singledata,setSingledata] = useState([]);
    useEffect(async () => {
        try {
          const response = await axios.get(`https://bms-final.herokuapp.com/movies/${movid}`);
          console.log(response);
          setSingledata(response.data);
        } catch (error) {
          console.error(error);
        }
    }, [])
    return (
        <div>
            <Container fluid style={{ background:"gray",padding:"1%" }}>
                <Row style={{ textAlign:"center",margin:"2%" }}>
                                    <Col xs={6} md={3} lg={2} style={{ marginLeft:"5%",marginBottom:"2%"}}>
                                        <Card className="bg-dark text-white" >
                                            <Card.Img variant="top" src={singledata.imageurl} style={{ height:"75%" }}/>
                                            <Card.Body>
                                            <Card.Title>{singledata.title}</Card.Title>
                                            <Card.Text>
                                                {singledata.actor}
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SingleMovie;