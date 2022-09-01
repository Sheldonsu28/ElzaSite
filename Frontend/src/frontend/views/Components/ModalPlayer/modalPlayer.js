import React, { useState } from "react";
import 'mui-player/dist/mui-player.min.css';
import {Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ContentContainer from "../ContentContainer";

const VideoPlayer = (props)=>{
  const [openVid, setOpenVid] = useState(false);
  const [openCof, setOpenConf] = useState(false);
  const [openAgree, setOpenAgree] = useState(false);
  const [openDisagree, setOpenDisagree] = useState(false);
  const [time, setTime] = useState(null);  

  const handleOpenVid = () => {
    setOpenVid(true);
    setTime(Date.now());
  };

  const handleCloseVid = () => {
  
    if (Date.now() > time + 278 * 1000){
      setOpenVid(false);
      return;
    }
    setOpenConf(true);
  };
  
  const handleCloseConfAccept = ()=>{
    setOpenConf(false);
    setOpenAgree(true);
  } 

  const handleCloseAgree = ()=>{
    setOpenAgree(false);
    setOpenConf(false);
    setOpenVid(false);
  } 

  const handleOpenDisagree = ()=>{
    setOpenAgree(false);
    setOpenConf(false);
    setOpenDisagree(true);
  } 

   const handleCloseDisagree = ()=>{
    setOpenAgree(false);
    setOpenConf(false);
    setOpenDisagree(false);
  } 

  

  return (
    <div>
      <Button onClick={handleOpenVid}>
        <h1 className="subsection">
          <PlayCircleOutlineIcon/>点击这里观看一周年小惊喜！
        </h1>
      </Button>

      <Dialog open={openVid} onClose={handleCloseVid} maxWidth={'lg'} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
        PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}>
        
        <ContentContainer>
         <CardMedia width={"100%"} src={ process.env.REACT_APP_HOST_URL + '/videos/celebrate'} component='video' autoPlay controls></CardMedia>
        </ContentContainer>
        
      </Dialog>

      <Dialog open={openCof} maxWidth={'xs'} onClose={handleOpenDisagree}>
        
        <DialogTitle>
          {"莎莎，我知道你很急，但你先别急"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            你得考虑好嗷，关掉了就要给我唱哦！
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleOpenDisagree}>打咩</Button>
          <Button onClick={handleCloseConfAccept}>
            好呀
          </Button>
        </DialogActions>
        
      </Dialog>

      <Dialog open={openAgree} onClose={handleCloseAgree}>
        <DialogTitle>
          {"真的吗！！！！！"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           呜呜呜莎莎对薯条们真好！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAgree}>啊吧啊吧</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDisagree} onClose={handleCloseDisagree}>
        <DialogTitle>
          {"那，请看完这个视频吧！"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           不同意的话就只能请莎莎看完这个视频了，<br/>
           只有看完这个视频或是同意唱歌给薯条听才能关掉哟！<br/>
           啊对了，跳进度条没有是用的嗷！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>知道了</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VideoPlayer;