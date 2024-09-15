import { useRings } from "../../hooks/useRings";
import * as S from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "40px",
};

export function RingCarousel() {
  const { rings, deleteRing } = useRings();

  return (
    <S.Container>
      <Slider {...settings}>
        {rings.map((ring) => (
          <S.RowSlider key={ring.id}>
            <S.SliderText>{ring.name}</S.SliderText>
            <S.SliderText>{ring.power}</S.SliderText>
            <S.SliderText>{ring.carrier}</S.SliderText>
            <S.SliderText>{ring.forgedBy}</S.SliderText>
            <button onClick={() => deleteRing(Number(ring.id))}>Deletar</button>
          </S.RowSlider>
        ))}
      </Slider>
    </S.Container>
  );
}
