import HeadphonesListItem from "../headphones_list_item/HeadphonesListItem";

import "./HeadphonesList.css";

import { type IHeadphonesData } from "../../../../types";

interface IProps {
  headphones: IHeadphonesData[];
}

export default function HeadphonesList({ headphones }: IProps) {
  return (
    <div className="headphones_block">
      <h2>Наушники</h2>
      <div className="headphones">
        {headphones.map((data) => {
          return <HeadphonesListItem key={data.id} headphones={data} />;
        })}
      </div>
    </div>
  );
}
