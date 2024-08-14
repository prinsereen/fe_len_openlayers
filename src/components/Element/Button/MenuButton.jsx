import PropTypes from "prop-types";

export const MenuButton = (props) => {
    const { imgSrc, onClick } = props;

    return (
        <>
            <button 
                className="bg-slate-200 hover:bg-slate-300 w-12 rounded-full "
                onClick={onClick}
            >
                <img src={imgSrc} className="p-2" alt="img" />
            </button>
        </>
    );
}

MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    imgSrc: PropTypes.string.isRequired
}