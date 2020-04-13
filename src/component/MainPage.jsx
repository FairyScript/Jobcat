import React, { useEffect } from "react";
import { filter } from "rxjs/operators";

import { LogSubject } from "../api/Adapter";
import { LogType } from "../api/Def";
import { TeamBuffBar } from "./TeamBuffBar";
import { StatusBar } from "./StatusBar";

const LangContext = React.createContext('cn');

export function MainPage(params) {

  return (
    <div>
      <h1>HELLO!</h1>
      <LangContext.Provider value='cn'>
        <TeamBuffBar />
        <StatusBar />
      </LangContext.Provider>
    </div>
  );
}