import { useEffect, useState } from "react";
import "./HeaderBaner.css";
import Service from "../../service/service";

export default function HeaderBaner() {
  const [baner, setBaner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const s = new Service();

  useEffect(() => {
    s.getBaner().then((baner) => {
      setBaner(baner);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>loading</div>;

  const { product, img } = baner[0];

  return (
    <div className="baner">
      <h1>{product}</h1>
      <img src={img} alt="" />
    </div>
  );
}
