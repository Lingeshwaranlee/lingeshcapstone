import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { GrFormClose} from 'react-icons/gr';
export function Recording() {
  const history =useHistory();
  return (
    <div>
      <h2 style={{justifyContent: "center",textAlign: "center",color: " #4e73df",padding: "1%",}}>
       Recording</h2>
      <Box
    sx={{
      width: "50%",
      height: "100%",
      backgroundColor: 'white',
      marginTop:'2%',
      marginLeft:"25%",
      borderRadius:"12px",
      overflow: "hidden",
      boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
      position:"static",
      padding:"2%"
    }}
  >
    <h4 style={{color:'black'}}>Recording Link   <IconButton aria-label="delete" style={{marginLeft:'62%'}} onClick={() => history.push("/class")}>
        <GrFormClose />
      </IconButton></h4>
    <p style={{color:'black'}}>Recording Link :</p>
     <p>https://us02web.zoom.us/rec/play/bNM_nHK998-iWSTsHF5egrbQ9j3wsFEgNA6dmGhynjmOVRcIsFNoiZKDqoz9lS8hFmmD-TbteyDF06Cb.ozO394n4mTgCHJIg?</p>
  <p style={{color:'black'}}>Passcode : guvi123</p>
  </Box>
    </div>
  );
}
