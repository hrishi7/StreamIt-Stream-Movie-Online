import React, { useEffect,useState } from "react";
import axios from "axios";
import {trending} from '../services/ExternalApi'
import {CustomSlider} from '../reusable/CustomSlider'
import { AnyNaptrRecord } from "dns";
export const Home: React.FC<{}> = () => {

    const [trendingItems, setTrendingItems] = useState([])


  useEffect(() => {
    axios
      .get(
        trending
      )
      .then((res) => {
        let data =  chunksArr(res.data.results)
          
          setTrendingItems(data)
        // console.log(res);
      });
  }, []);

  const chunksArr = (inputArray:any) =>{
    var perChunk = 4 // items per chunk 

    
    var result = inputArray.reduce((resultArray:any, item:any, index:number) => { 
      const chunkIndex = Math.floor(index/perChunk)
    
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
    
      resultArray[chunkIndex].push(item)
    
      return resultArray
    }, [])
    return result;
  }
 
  
  return <div>
      <CustomSlider items={trendingItems}/>
  </div>;
};
