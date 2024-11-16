const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h3 className="text-2xl">{subtitle}</h3>
    </div>
  );
};

export default Heading;
