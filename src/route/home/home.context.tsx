import "../../style/css/home/home.context.css";
import { HomeSection01 } from "./section/01/home.section-01";
import { HomeSection02 } from "./section/02/home.section-02";
import { HomeSection03 } from "./section/03/home.section-03";
import { HomeSection04 } from "./section/04/home.section-04";
import { HomeSection05 } from "./section/05/home.section-05";

export function HomeContext() {
  return (
    <div className="home-context">
      <HomeSection01></HomeSection01>
      <HomeSection02></HomeSection02>
      <HomeSection03></HomeSection03>
      <HomeSection04></HomeSection04>
      <HomeSection05></HomeSection05>
    </div>
  );
}
