import Fruit from "./Fruit";

type FruitProps = {
  name: string;
  price: number;
  emoji: string;
};

export default function Fruits() {
  const fruits: FruitProps[] = [
    { name: "Apple", price: 6, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}
          emoji={fruit.emoji}
        />
      ))}
    </ul>
  );
}
