import PropTypes from "prop-types";

const FavoriteCard = ({ phone }) => {
  const { image, brand_name, phone_name } = phone || {};
  return (
    <div>
      <div className="flex flex-col justify-center  items-center mt-20">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {brand_name}
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {phone_name}
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
};

FavoriteCard.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default FavoriteCard;
