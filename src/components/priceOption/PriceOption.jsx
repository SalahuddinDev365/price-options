import PropTypes from "prop-types";
import Feature from "../feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg bg-lime-100 rounded-lg p-6 flex flex-col">
            <h2 className="text-center">
                <span className="text-4xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-6">{name}</h4>

            <div className="flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>

            <button className="btn w-full text-white mt-2 py-3 text-center transition duration-500 
            bg-gradient-to-r from-[#314755] via-[#26a0da] to-[#314755] bg-[length:200%_auto] 
            hover:bg-[position:right_center]
            shadow-lg shadow-gray-300 rounded-lg">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;