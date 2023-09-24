import PropTypes from "prop-types";
import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center container m-auto gap-5 my-10">
      {phones?.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Phones;
