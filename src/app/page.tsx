import Body from './components/body';
import Card from './components/card';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <div className='flex flex-col items-center gap-10 px-4'>
      <Header />
      <Body />
      <Card />
      <Footer />
    </div>
  );
}
