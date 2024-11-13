import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
    return (
        <div>
            <div className="px-4 py-0.5">
            <p className="flex items-center gap-2"> <AiFillCheckCircle className="text-blue-900"></AiFillCheckCircle> {feature}</p>
        </div>

       
        </div>
        
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;