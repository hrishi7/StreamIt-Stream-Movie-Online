import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  trending,
  getAllGenres,
  getLinkForMoviesForGenres,
} from "../services/ExternalApi";
import { CustomSlider } from "../reusable/CustomSlider";
export const Home: React.FC<{}> = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const [categoryWise, setCategoryWise] = useState<
    { categoryTitle: string; movies: any[] }[]
  >([]);

  useEffect(() => {
    getAllGenre();
    getTrendings();
  }, []);

  const chunksArr = (inputArray: any) => {
    var perChunk = 5; // items per chunk

    var result = inputArray.reduce(
      (resultArray: any, item: any, index: number) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      },
      []
    );
    return result;
  };

  const getTrendings = async () => {
    axios.get(trending).then((res) => {
      let data = chunksArr(res.data.results);

      setTrendingItems(data);
      // console.log(res);
    });
  };

  const getAllGenre = async () => {
    let res = await axios.get(getAllGenres);
    // console.log(res.data.genres)
    let x: { categoryTitle: string; movies: any[] }[] = [];
    for (let i = 0; i <= res.data.genres.length - 1; i++) {
      let movies = await getLinkForMoviesForGenres(res.data.genres[i].id);
      x.push({
        categoryTitle: res.data.genres[i].name,
        movies: chunksArr(movies.results),
      });
    }
    setCategoryWise(x);
    console.log(x);
  };

  return (
    <div>
      <CustomSlider items={trendingItems} heading="Trending" />
      {categoryWise.map((cat, ind) => (
        <CustomSlider items={cat.movies} heading={cat.categoryTitle} key={ind} />
      ))}
    </div>
  );
};
