import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import CoursesS1 from "../components/courses-s1";
import CoursesS2 from "../components/courses-s2";
import CoursesS3 from "../components/courses-s3";

class Courses extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <CoursesS1/>
                <CoursesS2/>
                <CoursesS3/>
            </Container>    
        );
    }
}

export default Courses;