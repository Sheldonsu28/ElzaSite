import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import axios from "axios";

const SlicerView = (props)=>{
  const slicers = [{auth: '诺音Noyin', mid: 484951879}]
  const [slicerInfo, setSlicerInfo] = useState([]);

  const getslicerInfo = async (slicer)=>{
      
    return axios.get(`https://cors-anywhere.herokuapp.com/http://api.bilibili.com/x/space/arc/search?mid=484951879&keyword=艾尔莎&pn=1&ps=10`);
  }
  
  useEffect(()=>{
   

    for (let i = 0; i < slicers.length; i++){
      setTimeout(()=>{getslicerInfo(slicers[i]).then(res=>{console.log(res)})}, 200)
    }
  }, [])
  return (
   <div className='sectionContainer'>
      <h1 className='sectionTitle'>艾尔莎的切片man们</h1>
        <Card id='contentCard'>
          
        </Card>
        <iframe url='http://api.bilibili.com/x/space/arc/search?mid=484951879&keyword=艾尔莎&pn=1&ps=10'></iframe>
    </div>
  );
}

export default SlicerView;