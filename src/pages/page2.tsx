import PageStore, { PageStoreProps } from 'templates/PageStore';

export default function Stores(props: PageStoreProps) {
  return <PageStore {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      cover: '/img/frutos-mar.png',
      name: 'Coco Bambu - Curitiba'
    }
  };
}
