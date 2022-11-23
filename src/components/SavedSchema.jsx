const Savedschecma = ({ savedScheams }) => {
  return (
    <div className="color-info-container">
      <p>name</p>

      {[].map((color) => {
        return (
          <div
            style={{ backgroundColor: `${hex}` }}
            className="color-item"
          ></div>
        );
      })}
    </div>
  );
};

export default Savedschecma;
