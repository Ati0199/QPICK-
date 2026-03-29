export interface IHeadphonesData {
  id: string;
  discount: number;
  path: string;
  price: number;
  productName: string;
  rating: number;
  isFavorite: boolean;
  onBasket: boolean;
  description: IProdInfo[];
}
export interface IProdInfo {
  label: string;
  value: string;
}
export interface IProd {
  path: string;
  price: number;
  productName: string;
  onBasket: boolean;
}

export interface IPhoneData {
  brendName: string;
  phone: { id: string; name: string }[];
  id: string;
}

export interface IPhoneBrendList {
  data: IPhoneData;
  key: string;
  isLoading: boolean;
  id: string;
  openedBrendId: string | null;
  setOpenBrendId: Function;
}
export interface ICase {
  img: string;
  name: string;
  id: string;
}
