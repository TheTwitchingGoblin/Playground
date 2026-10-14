import type { ReactNode } from "react";

type HeaderProps = {
  person: {
    message: ReactNode;
    emoji: ReactNode;
    name: ReactNode;
    seatNumbers: ReactNode;
  };
};

function Header({ person }: HeaderProps) {
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Header;
