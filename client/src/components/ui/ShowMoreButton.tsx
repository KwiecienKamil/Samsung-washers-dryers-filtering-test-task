import { FC } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ShowMoreButtonProps } from "../../types/FilterCategory";

const ShowMoreButton: FC<ShowMoreButtonProps> = ({
  showMoreProducts,
  isAllVisible,
}) => {
  return (
    <div id="show-more-section">
      {!isAllVisible && (
        <button onClick={showMoreProducts}>
          Pokaż więcej
          <span>
            <IoMdArrowDropdown id="show-more-section-arrow" />
          </span>
        </button>
      )}
    </div>
  );
};

export default ShowMoreButton;
