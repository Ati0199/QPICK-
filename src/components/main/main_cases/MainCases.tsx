import { useEffect, useMemo, useState } from "react";
import "./MainCases.css";

import { type ICase } from "../../../types";
import Service from "../../../service/service";

import MainCase from "./main_case/MainCase";

export default function MainCases() {
  const [cases, setCases] = useState([]);

  const s = useMemo(() => new Service(), []);

  useEffect(() => {
    s.getPhoneCase().then((cs) => setCases(cs));
  }, []);

  return (
    <div className="cases_block">
      <h1>Чехлы</h1>
      <div className="cases">
        {cases.map((cs: ICase) => {
          return <MainCase cas={cs} key={cs.id} />;
        })}
      </div>
    </div>
  );
}
