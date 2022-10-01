import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { Button, Stack, Box } from '@mui/material';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Iconify from '../../../components/Iconify';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 450,
  minHeight: 280,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '2px solid white',
  padding: '16px 32px 24px 32px',
  borderRadius:"8px",
  position:"relative"
});

export default function ModalUnstyledDemo() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(0)
  const [name , setName] = React.useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); setState(0)}

  const handleSubmit = () => {
    if(state === 0) {
      setState((prev) => prev + 1)
    }else if(state === 1) {
      handleClose()
     
    }
  }

  return (
    <div>
     <Button
        variant="contained"
        onClick={handleOpen}
        color="primary"
      >
        Create Project
      </Button>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Box sx={style}>
          {state === 0 && (
            <>
            <h2 id="unstyled-modal-title" style={{textAlign:"center"}}>New project</h2>
          
          <div style={{width:"100%", marginTop:"20px"}}>
            <label htmlFor='name' style={{fontSize:"14px"}}>Name
              <input onChange={(e) => setName(e.target.value)} placeholder='project name' id="name" style={{width:"100%", margin:"3px auto", borderRadius:"8px", height:"36px", outline:"none",border:"1px solid #dfe1e5", padding:"8px 12px", marginBottom:'20px'}} />
            </label>
            <label htmlFor='name' style={{fontSize:"14px"}}>Description
              <textarea id="name" style={{width:"100%", margin:"3px auto", borderRadius:"8px", height:"80px", outline:"none",border:"1px solid #dfe1e5", padding:"8px 12px", marginBottom:'20px'}} />
            </label>
           

          </div>
            </>
          )}
           {state === 1 && (
            <>
            <h2 id="unstyled-modal-title" style={{textAlign:"center"}}>Add members</h2>

            <h4 id="unstyled-modal-title" style={{textAlign:"center", fontSize:"12px"}}>{name}</h4>
          
          <div style={{width:"100%", marginTop:"20px"}}>
          <input placeholder='search people by name or email ' id="name" style={{width:"100%", margin:"3px auto", borderRadius:"8px", height:"36px", outline:"none",border:"1px solid #dfe1e5", padding:"8px 12px", marginBottom:'20px',position:"relative"}} />
            <div style={{position:"absolute", right:"40px", top:"85px"}}>
            <Iconify icon="bytesize:search" width={15} height={15} />
            </div>
          <h5 style={{fontWeight:"normal"}}>Recent Teammates</h5>
          {/* <hr style={{backgroundColor:"white", heigth:"0.3px", border:"0.3px thin white", color:"white", width:'98%', margin:"10px auto"}}/> */}
            
           <div>
              <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", margin:"15px auto"}}>
                <div>
                  <h3 style={{fontSize:"14px"}}>Jonh doe</h3>
                  <h5 style={{fontWeight:"normal", fontSize:"12px",  color:"GrayText"}}>johndoe@gmail.com</h5>
                </div>
                <Button variant="outlined">Add</Button>
              </div>
              <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", margin:"15px auto"}}>
                <div>
                  <h3 style={{fontSize:"14px"}}>Jonh doe</h3>
                  <h5 style={{fontWeight:"normal", fontSize:"12px",  color:"GrayText"}}>johndoe@gmail.com</h5>
                </div>
                <Button variant="outlined">Add</Button>
              </div>
              <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", margin:"15px auto"}}>
                <div>
                  <h3 style={{fontSize:"14px"}}>Jonh doe</h3>
                  <h5 style={{fontWeight:"normal", fontSize:"12px",  color:"GrayText"}}>johndoe@gmail.com</h5>
                </div>
                <Button variant="outlined">Add</Button>
              </div>
            
           </div>

          </div>
            </>
          )}
          


          <Button onClick={() => handleSubmit()} variant='contained' color='primary' sx={{width:"100%", margin:"10px auto"}}>Next</Button>

        </Box>
      </Modal>
    </div>
  );
}
