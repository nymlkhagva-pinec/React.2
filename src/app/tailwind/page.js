import "./components/CharacterCard.js";
import { CharacterCard } from "./components/CharacterCard.js";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <CharacterCard
        name="Spider-Man"
        type="Hero"
        power="Enhanced human"
        level="67"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFteNQWP8Q40856Ir2ihzepnZ6Di4P6MX-_Jnq_yi8F8FVQFK3UOJg3k5&s=10"
        theme="red"
      />
      <CharacterCard
        name="Batman"
        type="Hero"
        power="Stupid rich"
        level="17"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjz1bJTXFoMfIxmbSpfI62Spm-k-MIJap6JR3OV0kLsQ&s=10"
      />
      <CharacterCard
        name="Daredevil"
        type="Anti-villian"
        power="Heightened senses"
        level="25"
        image="https://preview.redd.it/why-is-daredevil-so-awesome-v0-inb4p3oszef91.jpg?width=640&crop=smart&auto=webp&s=306bf01482a081434d3cf71c64f1a6ef9315cef5"
        theme="red"
      />
    </div>
  );
}
