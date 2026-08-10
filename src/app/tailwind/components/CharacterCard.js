export function CharacterCard(props) {
  const { name, type, power, level, image, theme } = props;

  return (
    <div
      className={`${theme === "red" ? "bg-red-950" : "bg-blue-950"} w-2xs p-4 m-3 border-3 border-gray-500 rounded-xl shadow-black shadow-lg `}
    >
      <img src={image} alt={name} />
      <p className="font-bold"> Name: {name} </p>
      <p> Type: {type}</p>
      <p className="text-green-800"> Power: {power}</p>
      <p className="text-green-800"> Level: {level}</p>
    </div>
  );
}
