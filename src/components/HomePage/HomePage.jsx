import {
  Col,
  Row,
  
} from "react-bootstrap";
import "./HomePage.css";
import logo from "../../assets/logo.jpg";
import UiAccordation from "../Ui/UiAccordation";
import AppConst from "../../shared/AppConstants";

export default function HomePage() {
  return (
    <>
      <Row>
        <Col className={"alignCenter"}>
          <img src={logo} alt="React logo" />
        </Col>
      </Row>
      <Row>
        <Col className={"home"}>
          <div>
           
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <UiAccordation  list= {AppConst.features}/>
          </div>
        </Col>
      </Row>
    </>
  );
}
