import Addcourse from "../componennts/Addcourse"
import { Divider } from "@mui/material"
import CourseColumn from "../componennts/CourseColumn.js"
import SideBar from "../componennts/SideBar.js"
import { Container } from "@mui/material"
export default function Courses(){
    return(
        <div>
            <Container></Container>
            <SideBar/>
            <Addcourse />   
            <Divider/>
            <CourseColumn/>

        </div>
    )
}