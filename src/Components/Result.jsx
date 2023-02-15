import {Box,styled} from '@mui/material'
import { useContext,useState,useEffect} from 'react'
import { DataContext } from '../Context/DataProvider'

const Container=styled(Box)`
height:41vh;
`

const Result=()=>{
    const[src,setSrc]=useState('');
    const {html,css,js}=useContext(DataContext)
    const srcCode=
    `
   <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `

    useEffect(()=>{
     const Timeout= setTimeout(() => {
        setSrc(srcCode)
      }, 1000)
      return ()=>clearTimeout(Timeout);
    },[html,css,js])

    return(
        <>
        <Container>
          <iframe
          srcDoc={src}
          title="Output"
          sandbox="Allow-scripts"
          width="100%"
          height="100%"
          />
        </Container>
        </>
    )
}
export default Result