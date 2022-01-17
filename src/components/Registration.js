import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Registration(){
    const [emailaddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function clearInput(){
        setEmailAddress("");
        setUsername("");
        setPassword("");
    }

    async function userPost(){
        const userDetails = {
            "username":username,
            "email":emailaddress,
            "password":password
        }
        
        
            const response = await axios.post(`https://bms-final.herokuapp.com/user-register`,userDetails)
            .then((response)=>{
                console.log(response);
                Swal.fire({
                    title: `<strong>${response.data.message}</strong>`,
                    icon: 'success',
                    showCloseButton: true,
                    showCancelButton: true,
                  })
            })
            .catch((error)=>{
                     Swal.fire({
                     title: `<strong>${error.message}</strong>`,
                     icon: 'error',
                     showCloseButton: true,
                     showCancelButton: true,
                    })});
            // console.log(response);
   
        clearInput();
    }

    return(
        <div>
                <Form style={{ padding:"8%" }}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary"  onClick={userPost}>
                    Submit
                </Button>
                </Form>
        </div>
    )
}
export default Registration;