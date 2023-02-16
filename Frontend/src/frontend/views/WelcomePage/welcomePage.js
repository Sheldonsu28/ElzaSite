import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import './welcomePage.css';
import AboutElza from '../Components/AboutElza';
import AboutModel from '../Components/AboutModel';
import VideoContentsView from '../Components/VideoContentsView';
import MontageController from '../../controllers/Montages';
// import VideoPlayer from '../Components/ModalPlayer/modalPlayer';
// import ContentContainer from '../Components/ContentContainer';
// import Game from '../Components/Game';



const WelcomePage = ()=>{
    return (
      <div id="root">
            <div id='intro'>
                <AppBar style={{background:'transparent', boxShadow:'none'}} position='sticky'>
                    <Grid container>
                        <Grid item xs>
                            <h1 style={{margin:'0', color:'#DBB2D1'}}>艾薯条.icu</h1>
                        </Grid>
                    </Grid>
                </AppBar>
                <p id='icu'>呐呐!<br/>艾尔莎!<br/>我们真的!<br/>♡好喜欢你啊♡</p>
                {/* <VideoPlayer/> */}
                <h1 className='subsection'>MUUUAAAA♡</h1>
                <h1 className='subsection'>不行我绷不住了</h1>
                <h1 className='subsection'>这味太冲了</h1>
            </div>
            <div id='contentSection'>
                {/* <Game></Game> */}
                <AboutElza fetchCallback={MontageController.fetchAllStreamRecordings}/>
                
                <AboutModel/>
                <VideoContentsView sectionTitle={'艾尔莎的切片man们'} fetchCallback={MontageController.fetchAllMontange}/>
                <VideoContentsView sectionTitle={'艾尔莎的二创man们'} fetchCallback={MontageController.fetchAllDerivativeWork}/>
                
                
                <h5 id='registry'>陕ICP备2021014934号-1</h5>

            </div>
      </div>  
    );
}

export default WelcomePage;