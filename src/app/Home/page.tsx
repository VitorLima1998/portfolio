import Header from '../components/header';
import Footer from '../components/footer';
import Body from '../components/body';
import Card from '../components/card';

export default function Home() {
  return (
    <div className='py-5 justify-between'>
      <Header />
      <Body />
      <Card />
      <Footer />
    </div>
  );
}
