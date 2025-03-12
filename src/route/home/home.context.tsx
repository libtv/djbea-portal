import "../../style/css/home/home.context.css";
import { HomeSection01 } from "./section/01/home.section-01";
import { HomeSection02 } from "./section/02/home.section-02";
import { HomeSection03 } from "./section/03/home.section-03";
import { HomeSection04 } from "./section/04/home.section-04";
import { HomeSection05 } from "./section/05/home.section-05";
import { HomeSection06 } from "./section/06/home.section-06";
import { HomeSection07 } from "./section/07/home.section-07";
import { HomeSection08 } from "./section/08/home-section-08";
import { HomeSection09 } from "./section/09/home-section-09";

export function HomeContext() {
  return (
    <div className="home-context">
      {/*
      <HomeSection01></HomeSection01>
      <HomeSection06></HomeSection06>
      <HomeSection07></HomeSection07>
      <HomeSection02></HomeSection02>
      <HomeSection03></HomeSection03>
      <HomeSection04></HomeSection04>
      <HomeSection05></HomeSection05>
        */}
      <HomeSection08></HomeSection08>
      <HomeSection09></HomeSection09>
    </div>
  );
}
