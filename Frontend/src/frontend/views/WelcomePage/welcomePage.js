import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import './welcomePage.css';
import AboutElza from '../Components/AboutElza';
import AboutModel from '../Components/AboutModel';
import AboutSlicers from '../Components/AboutSlicers';
import AboutDerivativeWorkers from '../Components/AboutDerivativeWorkers';



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
                <p id='icu'>艾尔莎<br />我们真的 <br /> 好喜欢你啊</p>
                <h1 id='subsection'>好了，发完病了，下滑了解更多的她！</h1>
            </div>
            <div id='contentSection'>
                <AboutElza/>
                <AboutModel/>
                <AboutSlicers/>
                <AboutDerivativeWorkers/>
                
                <h5 id='registry'>陕ICP备2021014934号-1</h5>

            </div>
      </div>  
    );
}

export default WelcomePage;