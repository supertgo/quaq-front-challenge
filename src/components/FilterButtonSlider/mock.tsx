import { ArrowIosDownwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { DirectionsWalk } from '@styled-icons/material/DirectionsWalk';
import { FilterButtonProps } from 'components/FilterButton';

const filterMock: FilterButtonProps[] = [
  {
    children: 'Ordenar',
    icon: <ArrowIcon />,
    iconAligment: 'right'
  },
  {
    children: 'Pra retirar',
    icon: <DirectionsWalk />
  },
  {
    children: 'Entrega gratis'
  },
  {
    children: 'Preço'
  },
  {
    children: 'Ordenar',
    icon: <ArrowIcon />,
    iconAligment: 'left'
  },
  {
    children: 'Pra retirar',
    icon: <DirectionsWalk />,
    iconAligment: 'right'
  },
  {
    children: 'Entrega gratis'
  },
  {
    children: 'Preço'
  }
];

export default filterMock;
