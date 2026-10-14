type FruitProps = {
  name: string;
  price: number;
  emoji: string;
};

export default function Fruit({ name, price, emoji }: FruitProps) {
  return (
    <li>
      {emoji} {name} {price}
    </li>
  );
}
