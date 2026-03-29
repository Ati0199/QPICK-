import HeadphonesList from "./main_headphones/headphones_list/HeadphonesList";
import MainCases from "./main_cases/MainCases";
import HeaderBaner from "../header_baner/HeaderBaner";
import { type IHeadphonesData } from "../../types";

interface IProps {
  headphones: IHeadphonesData[];
}

export default function MainBlock({ headphones }: IProps) {
  return (
    <>
      <HeaderBaner />
      <MainCases />
      <HeadphonesList headphones={headphones} />
    </>
  );
}
