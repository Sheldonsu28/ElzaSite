import { createContext } from "react";
const item = {greed: 'ahh'};
const change = (word)=>{
  item.greed = word;
}

item.fuc = change
export const TestContext = createContext(item);