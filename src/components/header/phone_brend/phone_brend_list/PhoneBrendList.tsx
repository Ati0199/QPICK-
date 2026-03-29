import "./PhoneBrendList.css";

import PhoneBrendListItem from "./phone_brend_list_item/PhoneBrendListItem";

import { type IPhoneBrendList } from "../../../../types";

export default function PhoneBrendList({
  id,
  openedBrendId,
  setOpenBrendId,
  data,
  isLoading,
}: IPhoneBrendList) {
  const handleClick = () => {
    if (openedBrendId === id) {
      setOpenBrendId(null);
    } else {
      setOpenBrendId(id);
    }
  };

  if (isLoading) return <div>loading</div>;
  const { brendName } = data;
  const isOpen = openedBrendId === data.id;

  return (
    <>
      <label key={id} onClick={handleClick} className="phone_model">
        <p>{brendName}</p>
        <img
          className={` ${isOpen ? "animation_up" : "animation_down"} `}
          src="/drop_down.svg"
          alt=""
        />
      </label>

      {isOpen ? (
        <div className="phones">
          {data.phone.map((phone) => {
            return <PhoneBrendListItem phone={phone} key={phone.id} />;
          })}
        </div>
      ) : null}
    </>
  );
}
