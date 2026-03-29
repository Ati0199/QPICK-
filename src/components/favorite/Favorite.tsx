import HeadphonesList from "../main/main_headphones/headphones_list/HeadphonesList";
import { type IHeadphonesData } from "../../types";
interface IProps {
  headphones: IHeadphonesData[];
}

export default function Favorite({ headphones }: IProps) {
  if (!headphones.length) {
    return <div>korzina pusta</div>;
  }
  return <HeadphonesList headphones={headphones} />;
}
