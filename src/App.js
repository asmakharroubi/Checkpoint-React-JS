import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form , Button, Row , Col} from "react-bootstrap" ;
import {Navbar, Nav, img} from "react-bootstrap"

 
function App () {
   return (
     <div>
       <div>
         <Navbar bg="danger" variant="dark">
           <Navbar.Brand href="#home">
             <img src="./logo.svg" alt="Go My Code" />
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#home">About Us</Nav.Link>
               <Nav.Link href="#link">Inscription</Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
       </div>
       <div>
         <Form>
           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Row>
               <Col>
                 <Form.Label>First Name</Form.Label>
                 <Form.Control placeholder="First name" />
               </Col>

               <Col>
                 <Form.Label>Last Name</Form.Label>
                 <Form.Control placeholder="Last name" />
               </Col>
             </Row>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
             <Form.Text className="text-muted">
               We'll never share your email with anyone else.
             </Form.Text>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Adress</Form.Label>
             <Form.Control type="text" placeholder="Enter Your Adress" />
           </Form.Group>

           <Row>
             <Col>
               <Form.Group className="mb-3">
                 <Form.Label htmlFor="disabledSelect">State</Form.Label>
                 <Form.Select id="disabledSelect">
                   <option>Choose Your State</option>
                   <option>Tunisia</option>
                   <option>Algeria</option>
                   <option>Marocco</option>
                 </Form.Select>
               </Form.Group>
             </Col>
             <Col>
               <Form.Group className="mb-3">
                 <Form.Label htmlFor="disabledSelect">City</Form.Label>
                 <Form.Select id="cities">
                   <option>Choose Your City</option>
                   <option>Béja</option>
                   <option>Jendouba</option>
                   <option>El-Kef</option>
                   <option>Siliana</option>
                   <option>Sousse</option>
                   <option>Mounastir</option>
                   <option>Mahdia</option>
                   <option>Sfax</option>
                   <option>Mednin</option>
                   <option>Gabes</option>
                   <option>Tunis</option>
                   <option>Manouba</option>
                   <option>Ben-Arouss</option>
                   <option>Ariana</option>
                   <option>Kairaoun</option>
                   <option>Bizerte</option>
                   <option>Sidi-Bouzid</option>
                   <option>Gafsa</option>
                   <option>Tozeur</option>
                   <option>Tataouine</option>
                   <option>Gbeli</option>
                   <option>Douz</option>
                   <option>Zaghouan</option>
                 </Form.Select>
               </Form.Group>
             </Col>
             <Col>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Postal code</Form.Label>
                 <Form.Control type="number" placeholder="Postal code" />
               </Form.Group>
             </Col>
           </Row>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Phone Number</Form.Label>
             <Form.Control type="number" placeholder="##  ### ###" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Row>
               <Form.Label>Languages :</Form.Label>
             </Row>
             <Row>
               <Col>
                 <Form.Label>
                   Arabic
                   <Form.Check type="switch" id="custom-switch" />
                 </Form.Label>
               </Col>
               <Col>
                 <Form.Label>French</Form.Label>
                 <Form.Check type="switch" id="custom-switch" />
               </Col>
               <Col>
                 <Form.Label>English</Form.Label>
                 <Form.Check type="switch" id="custom-switch" />
               </Col>
               <Col>
                 <Form.Label>Other</Form.Label>
                 <Form.Control type="text" placeholder="Other Languages" />
               </Col>
             </Row>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Comments</Form.Label>
             <Form.Control type="text" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check
               type="checkbox"
               label="I have read and agree to the terms and conditions"
             />
           </Form.Group>
           <Button variant="success" type="submit">
             Submit
           </Button>
         </Form>
       </div>
     </div>
   );
  }

  export default App;
  