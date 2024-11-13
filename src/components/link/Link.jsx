import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="mr-10 hover:bg-lime-200 hover:rounded-lg px-2">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};





Link.propTypes = {
    route: PropTypes.object
}
export default Link;