import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [notfound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorite"));

    if (favoriteItem) {
      setFavorite(favoriteItem);
    } else {
      setNotFound("Not Data Found");
    }
  }, []);

  const totalPrice = favorite.reduce(
    (prev, current) => prev + current.price,
    0
  );

  console.log(totalPrice);

  const handleRemove = () => {
    localStorage.clear();
    setFavorite();
    setNotFound("Not Data Found");
  };

  return (
    <div>
      {notfound ? (
        <p>{notfound}</p>
      ) : (
        <div>
          {favorite.length > 0 && (
            <span className="text-center mt-4 flex justify-center items-center gap-4 ">
              <div className="btn-primary p-3">TotalPrice: {totalPrice}</div>
              <button onClick={handleRemove} className="btn btn-success ">
                Delete All Favorite
              </button>
            </span>
          )}
          {isShow ? (
            <div className="grid grid-cols-2 gap-4 m-16">
              {favorite.map((phone) => (
                <FavoriteCard key={phone.id} phone={phone} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 m-16">
              {favorite.slice(0, 2).map((phone) => (
                <FavoriteCard key={phone.id} phone={phone} />
              ))}
            </div>
          )}
          <div className="text-center -mt-10">
            {" "}
            {favorite.length > 2 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-primary"
              >
                {isShow ? "see less" : "See more"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
