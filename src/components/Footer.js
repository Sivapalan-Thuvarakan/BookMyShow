
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div style={{ background:"black",color:"white",padding:"2%",marginBottom:"2%"}}>
        <Row>
            <Col xs={2}>
                col1
            </Col>
            <Col xs={4}>
                col2
            </Col>
            <Col xs={6} style={{ display:"flex",flexDirection:"row-reverse" }}>
                <Button style={{ background:"red" }}>Contact Today!</Button>
            </Col>
        </Row>
        <Row style={{ textAlign:"center",padding:"3%" }}>
            <Col>
                Col1
            </Col>
            
            <Col>
                Col2
            </Col>
            
            <Col>
                Col3
            </Col>
        </Row>
        <Row>
            <Col>
                Col1
            </Col>
            
            <Col>
                Col2
            </Col>
            
            <Col>
                Col3
            </Col>
        </Row>

    </div>
  );
}

export default App;
