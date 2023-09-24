import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/Banner";

import Phones from "../../components/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();

  return (
    <div>
      <Banner />
      <Phones phones={phones} />
    </div>
  );
};

export default Home;
