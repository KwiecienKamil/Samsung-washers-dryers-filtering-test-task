import { FC } from "react";
import { EnergyClassComponentProps } from "../../types/FilterCategory";

const EnergyClassComponent: FC<EnergyClassComponentProps> = ({
  energyClassImg,
}) => {
  return (
    <div className="energy-class-component">
      <p>Klasa energetyczna</p>
      <img
        src={`${import.meta.env.VITE_API_URL}${energyClassImg}`}
        alt="Energy Class"
      />
    </div>
  );
};

export default EnergyClassComponent;
