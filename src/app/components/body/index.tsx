import { FaNodeJs, FaDocker } from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';

export default function Body() {
  return (
    <div className='container flex py-5 mx-auto justify-center h-full gap-10'>
      <div className='max-w-2xl p-3 flex flex-col gap-10 justify-center'>
        <h1 className='text-7xl text-justify'>Olá, meu nome é Vitor Lima</h1>
        <p className='text-2xl w-full text-justify'>
          Um apaixonado por tecnologia e programação que busca aprimorar os
          conhecimentos para se tornar um dev FullStack.
        </p>
        <div className=' flex w-full gap-4'>
          <div className='box1 flex items-center border rounded-full px-8 py-2 gap-1 text-black bg-white'>
            <FaNodeJs /> BackEnd
          </div>
          <div className='box1 flex items-center border rounded-full px-8 py-2 gap-1 text-black bg-white'>
            <SiTypescript /> FrontEnd
          </div>
          <div className='box1 flex items-center border rounded-full px-8 py-2 gap-1 text-black bg-white'>
            <FaDocker /> DevOps
          </div>
        </div>
      </div>
      <div>
        <img src='luffy.jpg' alt='Luffy' className='max-h-full rounded-xl' />
      </div>
    </div>
  );
}
