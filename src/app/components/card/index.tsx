import { AiFillCode } from 'react-icons/ai';
export default function Card() {
  return (
    <div className='container flex gap-10 justify-center mx-auto border rounded-xl p-5'>
      <div className='flex flex-col gap-2 w-1/3'>
        <AiFillCode className='text-4xl' />
        <h1 className='text-5xl'>Full Cycle</h1>
        <p className='text-md text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          nobis assumenda at suscipit id recusandae ipsa exercitationem
          veritatis iste nihil necessitatibus neque nostrum debitis quibusdam
          quo, totam eos vel deserunt!
        </p>
      </div>
      <div className='flex flex-col gap-2 w-1/3'>
        <AiFillCode className='text-4xl' />
        <h1 className='text-5xl'>Full Cycle</h1>
        <p className='text-md text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          nobis assumenda at suscipit id recusandae ipsa exercitationem
          veritatis iste nihil necessitatibus neque nostrum debitis quibusdam
          quo, totam eos vel deserunt!
        </p>
      </div>
      <div className='flex flex-col gap-2 w-1/3'>
        <AiFillCode className='text-4xl' />
        <h1 className='text-5xl'>Full Cycle</h1>
        <p className='text-md text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          nobis assumenda at suscipit id recusandae ipsa exercitationem
          veritatis iste nihil necessitatibus neque nostrum debitis quibusdam
          quo, totam eos vel deserunt!
        </p>
      </div>
    </div>
  );
}
