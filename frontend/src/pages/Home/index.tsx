import { Menu } from "../../components/Menu";
import { useRings } from "../../hooks/useRings";
import * as S from "./styles";

export function Home() {
  const { rings } = useRings();
  console.log("🚀 ~ Home ~ rings:", rings);
  return (
    <>
      <Menu />
      <S.Container>
        <S.Title>Home Page</S.Title>
      </S.Container>
    </>
  );
}
