import * as S from './styles';

export type CouponProps = {
  img: string;
};

const Coupon = ({ img }: CouponProps) => (
  <S.Wrapper>
    <S.Image src={img} alt="Coupon image" />
  </S.Wrapper>
);

export default Coupon;
