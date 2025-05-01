const PriceDisplay = ({ price }: any) => {
  return (
    <div className="price-display-wrapper">
      <h4 className="price-display-value">{price}</h4>
      <div className="price-display-remainder">
        <span>00</span>
        <span>zł</span>
      </div>
    </div>
  );
};

export default PriceDisplay;
