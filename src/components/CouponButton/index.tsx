import { ArrowIosForwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { Ticket } from '@styled-icons/ionicons-sharp/Ticket';

import * as S from './styles';

const CouponButton = () => (
  <S.Wrapper>
    <S.Content>
      <Ticket />
      <span>Clube Ifood pra quem ama cupom</span>
      <ArrowIcon />
    </S.Content>
  </S.Wrapper>
);

export default CouponButton;
