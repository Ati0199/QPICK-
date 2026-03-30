import "./MainCase.css";
import { type ICase } from "../../../../types";

interface IProps {
  cas: ICase;
}

export default function MainCase({ cas }: IProps) {
  const { img, name } = cas;
  return (
    <div className="case">
      <img src={img} alt={name} />
      <div className="case_name">{name}</div>
    </div>
  );
}
