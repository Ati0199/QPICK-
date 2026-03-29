import "./ProductDescr.css";

import { type IProdInfo } from "../../../../../types";

interface IProps {
  data: IProdInfo[];
}

export default function ProductDescr({ data }: IProps) {
  return (
    <>
      <div className="prod_descr">
        {data?.map((item, i) => {
          return (
            <p key={i}>
              {item.label}: {item.value}
            </p>
          );
        })}
      </div>
    </>
  );
}
