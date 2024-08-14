
import PropTypes from "prop-types";

export const BigButton = (props) => {
    const { label, onClick, type } = props;

    return (
        <>
            <button
                className={`text-xl border-b-2 py-2 font-semibold flex justify-center items-center ${type === label ? 'border-blue-400' : 'border-transparent'}`}
                onClick={onClick}
            >
            {label}
            </button>
        </>
    );
}

BigButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}