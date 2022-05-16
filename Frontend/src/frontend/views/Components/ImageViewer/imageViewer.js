import React from 'react';
import {CardActionArea, CardMedia, Modal } from '@mui/material';
import { Box } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  maxHeight: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
};

const ImageViewer = (props) =>{
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CardActionArea onClick={handleOpen}>
        <CardMedia component="img" image={props.src}/>
      </CardActionArea>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{padding:0}}
      >
        <Box component='img' sx={style}
          src={props.src}
        />
          
      </Modal>
    </div>
  );
}

export default ImageViewer;