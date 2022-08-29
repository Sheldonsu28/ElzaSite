import React from 'react';
import './AboutModel.css';
import Modeler from '../../../../assets/Dokex.png';
import design from '../../../../assets/design.jpg';
import design_bili from '../../../../assets/DanGo.gif'
import ImageViewer from '../ImageViewer';
import ContentContainer from '../ContentContainer';
import { Divider, Typography, Button, Avatar, CardHeader} from '@mui/material';
import { Box } from '@mui/system';
import VideoViewer from '../VideoView/videoView';

const AboutModel = () => {
  return (
    
    <ContentContainer sectionTitle={'关于艾尔莎的皮'}>
      <ImageViewer src={design}/>
                
      <Box sx={{height: 'fit-content', marginTop:'1%'}}>

        <Divider variant="middle">
          <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
            绘制
          </Typography>
        </Divider>

        <Box sx={{ justifyContents:'center', minWidth: 'fit-content', width:'100%', height: 'fit-content'}}>
          <Box sx={{display: 'flex', flexWrap:'wrap', flexDirection:'row', width:"100%", justifyContent:'center'}}>

            <Button disableRipple disableFocusRipple href='https://weibo.com/soramiao'>
              <CardHeader
                avatar={
                  <Avatar
                    alt="傲娇团子DanGo"
                    src="https://tvax2.sinaimg.cn/crop.81.106.924.924.180/80eff6e0ly8gno8go036oj20u016f7a9.jpg?KID=imgbed,tva&Expires=1651743586&ssig=szS0SgJsB%2B"
                    sx={{ width: 56, height: 56 }}
                  />
                }
                title='微博@傲娇团子DanGo'
              />
            </Button>

            <Button disableRipple disableFocusRipple href='https://space.bilibili.com/1437180'>
              <CardHeader
                avatar={
                  <Avatar
                    alt="画画的DanGo"
                    src={design_bili}
                    sx={{ width: 56, height: 56 }}
                  />
                }
                title='B站@画画的DanGo'
              />
            </Button>
          </Box>
          <h5 className='text' width='100%'>
            从她B站上传的原生动态头像和她仅仅7位的uid可以看出，这个妈咪，绝对不简单！
          </h5>
        </Box>

        <Divider variant="middle">
            <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
              模型
            </Typography>
        </Divider>

        <Box sx={{ justifyContents:'center', minWidth: 'fit-content', width:'100%', height: 'fit-content'}}>

          <Box sx={{display: 'flex', flexWrap:'wrap', flexDirection:'row', width:"100%", justifyContent:'center'}}>

            <Button disableRipple disableFocusRipple href='https://space.bilibili.com/10857187'>
              <CardHeader
                avatar={
                  <Avatar
                    alt="Dokex-尚尚"
                    src={Modeler}
                    sx={{ width: 56, height: 56 }}
                  />
                }
                title='B站@Dokex-尚尚'
              />
            </Button>
          </Box>
        </Box>

        <Divider variant="middle">
          <Typography gutterBottom variant="h5" component="div" marginBottom='0.2%'>
            演示
          </Typography>
        </Divider>
        <Box sx={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly', width:'100%', height: 'fit-content', marginTop:'3%'}}>
          <VideoViewer info={{aid: 419986250, 
                          bvid:"BV1S3411q7mH", 
                          description:"谁能想到这个皮现在这么屑了呢...",
                          cid: 391888610}}
                       title=""/>
        </Box>
      
      </Box>
    </ContentContainer>
      
  )
}

export default AboutModel