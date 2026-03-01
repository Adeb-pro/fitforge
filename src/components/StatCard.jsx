const StatCard = ({ title, value, subtitle, positive, danger }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-gray-500 text-sm mb-4">{title}</h3>

      <p
        className={`text-3xl font-bold ${
          positive
            ? "text-green-600"
            : danger
            ? "text-red-600"
            : "text-black"
        }`}
      >
        {value}
      </p>

      <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
    </div>
  );
};

export default StatCard;