import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const PhoneDetails = () => {
  const { id } = useParams();
  const phones = useLoaderData();

  const [phone, setPhone] = useState();

  useEffect(() => {
    const myObj = phones?.find((phone) => phone.id === id);
    setPhone(myObj);
  }, [id, phones]);

  const handleAddToFavorite = () => {
    const addedFavoriteItem = [];
    const favoriteItem = JSON.parse(localStorage.getItem("favorite"));
    if (!favoriteItem) {
      addedFavoriteItem.push(phone);
      localStorage.setItem("favorite", JSON.stringify(addedFavoriteItem));
      alert("item added successful");
    } else {
      const isExist = favoriteItem.find((item) => item.id === id);
      if (!isExist) {
        addedFavoriteItem.push(...favoriteItem, phone);
        localStorage.setItem("favorite", JSON.stringify(addedFavoriteItem));
        swal("Hello world!", "success");
      } else {
        swal("Oops!", "Already Exist!", "error");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center mt-20">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={phone?.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {phone?.brand_name}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {phone?.phone_name}
          </h5>
          <button onClick={handleAddToFavorite} className="text-red-400">
            Add To Favorite
          </button>
        </div>
      </a>
    </div>
  );
};

export default PhoneDetails;
