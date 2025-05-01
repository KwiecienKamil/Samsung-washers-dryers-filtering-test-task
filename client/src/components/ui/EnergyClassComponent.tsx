import { FC } from "react";
import { EnergyClassComponentProps } from "../../types/FilterCategory";

const EnergyClassComponent: FC<EnergyClassComponentProps> = ({
  energyClassImg,
}) => {
  return (
    <div className="energy-class-component">
      <p>Klasa energetyczna</p>
      <img src={energyClassImg} alt="energy class" />
    </div>
  );
};

export default EnergyClassComponent;
