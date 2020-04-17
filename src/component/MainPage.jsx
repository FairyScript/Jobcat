import React from "react";

import { BuffBar } from "./TeamBuffBar";
import { teamBuffSub, dotSub } from "../api/Adapter";

const LangContext = React.createContext('cn');

export function MainPage(params) {

  return (
    <div>
      <h1>HELLO!</h1>
      <LangContext.Provider value='cn'>
        <BuffBar label="DoT:" source={dotSub} />
        <BuffBar label="团辅:" source={teamBuffSub}/>
      </LangContext.Provider>
    </div>
  );
}