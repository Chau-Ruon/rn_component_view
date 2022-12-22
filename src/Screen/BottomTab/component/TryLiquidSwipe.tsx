import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { food1,food2,food3,food4,food5 } from '../../../assets/indexImage';

import Slider from '../../../component/BottomTab/TryLiquidSwipe/Slider';
import Slide from '../../../component/BottomTab/TryLiquidSwipe/Slide';

const slides = [
  {
    color: "#F2A1AD",
    title: "Dessert Recipes",
    description:
      "Hot or cold, our dessert recipes can turn an average meal into a memorable event",
    picture:food1,
  },
  {
    color: "#0090D6",
    title: "Healthy Foods",
    description:
      "Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs",
    picture: food2,
  },
  {
    color: "#69C743",
    title: "Easy Meal Ideas",
    description:
      "explore recipes by food type, preparation method, cuisine, country and more",
    picture: food3,
  },
  {
    color: "#FB3A4D",
    title: "10000+ Recipes",
    description:
      "Browse thousands of curated recipes from top chefs, each with detailled cooking instructions",
    picture: food4,
  },
  {
    color: "#F2AD62",
    title: "Video Tutorials",
    description:
      "Browse our best themed recipes, cooking tips, and how-to food video & photos",
    picture: food5,
  },
];


const TryLiquidSwipe = () => {
  const [index,setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev= {prev && <Slide slide={prev} />}
      next= {next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default TryLiquidSwipe;