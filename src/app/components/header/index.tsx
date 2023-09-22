import Button from '../button';

export default function Header() {
  return (
    <div className='bg-transparent p-3 container mx-auto'>
      <header className='text-center'>
        <div className='flex justify-center space-x-4'>
          <Button text={'home'} />
          <Button text={'Projects'} />
          <Button text={'About'} />
        </div>
      </header>
    </div>
  );
}
