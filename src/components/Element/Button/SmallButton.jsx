
import PropTypes from "prop-types";

export const SmallButton = (props) => {
    const { label, onClick } = props;

    return (
        <>
            <button
                className="bg-green-400 px-2 rounded-xl"
                onClick={onClick}
            >
                <span
                className=""
                >
                    {label}
                </span>
            </button>
        </>
    );
}

SmallButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}