import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import InfoS1 from "../components/info-s1";
import InfoS2 from "../components/info-s2";
import InfoS3 from "../components/info-s3";
import InfoS4 from "../components/info-s4";

class Info extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <InfoS1/>
                <InfoS2/>
                <InfoS3/>
                <InfoS4/>
            </Container>    
        );
    }
}

export default Info;