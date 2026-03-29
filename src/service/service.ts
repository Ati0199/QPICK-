interface IHeadphonesData {
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

interface IProdInfo {
  key: string;
  label: string;
  value: string;
}
export default class Service {
  getHeadphones = async () => {
    const res = await fetch("http://localhost:3344/headphones/");
    const data = await res.json();
    return data;
  };

  getHeadphone = async (id: string): Promise<IHeadphonesData> => {
    const res = await fetch(`http://localhost:3344/headphones/${id}`);
    const data = await res.json();
    return data;
  };

  changeData = async (id: string, fav: boolean) => {
    await fetch(`http://localhost:3344/headphones/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFavorite: fav,
      }),
    });
  };
  onBasket = async (id: string, onBasket: boolean) => {
    await fetch(`http://localhost:3344/headphones/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        onBasket: onBasket,
      }),
    });
  };

  getBaner = async () => {
    const res = await fetch("http://localhost:3344/baner");
    const data = await res.json();
    return data;
  };

  getPhoneCase = async () => {
    const res = await fetch("http://localhost:3344/cases");
    const data = await res.json();
    return data;
  };

  getPhoneData = async () => {
    const res = await fetch("http://localhost:3344/phonedata");
    const data = await res.json();
    return data;
  };
}
