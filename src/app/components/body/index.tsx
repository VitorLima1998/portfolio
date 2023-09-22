export default function Body() {
  return (
    <div className='container flex py-5 mx-auto justify-center'>
      <div className='max-w-2xl p-3 flex flex-col gap-5'>
        <h1 className='text-7xl'>Hello, my name is Vitor Lima</h1>
        <p className='text-2xl'> I am a FullStack developer </p>
      </div>
      <div>
        <img src='luffy.jpg' alt='Luffy' className='max-h-full rounded-xl' />
      </div>
    </div>
  );
}
