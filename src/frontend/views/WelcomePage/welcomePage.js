import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import backgroundImage from './out.png'
import Grid from '@material-ui/core/Grid';
import './welcomePage.css'
import PostPreview from '../Components/PostPreview' 
import AboutElza from '../Components/AboutElza'
import AboutModel from '../Components/AboutModel'


const WelcomePage = ()=>{
    // const [readTime, setTime] = useState('');
    useEffect(()=>{
        // setInterval(()=>{
        //     setTime(new Date().toLocaleTimeString())
        // }, 1000);
        document.title = "ELZA YORK!"
    }, [])

    return (
      <div id="root">
            <div id='intro'>
                <AppBar style={{background:'transparent', boxShadow:'none'}} position='sticky'>
                    <Grid container spacing>
                        <Grid item xs>
                            <h1 style={{margin:'0', color:'white'}}>艾薯条.icu</h1>
                        </Grid>
                    </Grid>
                </AppBar>
                <p id='icu'>艾尔莎<br />我们真的 <br /> 好~ 喜~ 欢~ 你~ 啊~</p>
                <h1>好了，发完病了，下滑了解更多的她！</h1>
            </div>
            <div id='contentSection'>
                <AboutElza/>
                <AboutModel/>
            </div>
      </div>  
    );
}

export default WelcomePage;