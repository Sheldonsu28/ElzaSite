import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import './welcomePage.css';
import AboutElza from '../Components/AboutElza';
import AboutModel from '../Components/AboutModel';
import VideoContentsView from '../Components/VideoContentsView';
import MontageController from '../../controllers/Montages';



const WelcomePage = ()=>{

    return (
      <div id="root">
            <div id='intro'>
                <AppBar style={{background:'transparent', boxShadow:'none'}} position='sticky'>
                    <Grid container>
                        <Grid item xs>
                            <h1 style={{margin:'0', color:'white'}}>艾薯条.icu</h1>
                        </Grid>
                    </Grid>
                </AppBar>
                <p id='icu'>哈哈！<br/>大白猫！<br/> 你出道一周年辣！</p>
                <h1 id='subsection'>好了，发完病了，下滑了解更多的她！</h1>
            </div>
            <div id='contentSection'>
                <AboutElza/>
                <AboutModel/>
                <VideoContentsView sectionTitle={'艾尔莎的切片man们'} fetchCallback={MontageController.fetchAllMontange}/>
                <VideoContentsView sectionTitle={'艾尔莎的二创man们'} fetchCallback={MontageController.fetchAllDerivativeWork}/>
                
                <h5 id='registry'>陕ICP备2021014934号-1</h5>

            </div>
      </div>  
    );
}

export default WelcomePage;