import { useContext } from "react";
import Editor from "./Editor";
import {Box,styled} from '@mui/material'
import { DataContext } from "../Context/DataProvider";
const Container=styled(Box)`
display:flex;
height:50vh;
background-color:#000022
`
const Code=()=>{
    const{html, setHtml,css, setCss , js , setJs} = useContext(DataContext);
  return (
    <>
    <Container>
    <Editor
    heading="HTML"
    icon="/"
    color="#ff3c41"
    value={html}
    onChange={setHtml}
    />
    <Editor
    heading="CSS"
    icon="*"
    color="#0ebfff"
    value={css}
    onChange={setCss}
    />
    <Editor
    heading="js"
    icon="()"
    color="#fcd000"
    value={js}
    onChange={setJs}
    />
    </Container>
    </>
      );
}
export default Code