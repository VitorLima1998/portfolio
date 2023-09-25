import Button from '../button';
import Link from 'next/link';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';

export default function Header() {
  return (
    <div className='bg-transparent px-10 py-3 mx-auto'>
      <header className='text-center flex justify-between items-center'>
        <div>
          <p className='flex gap-2 items-center text-2xl'>
            Vitor <BiCodeAlt />
          </p>
        </div>
        <div className='flex justify-center space-x-4'>
          <Link href='/'>
            <Button text={'Home'} />
          </Link>
          <Link href='/Projects'>
            <Button text={'Projetos'} />
          </Link>
          <Link href='/About'>
            <Button text={'Sobre'} />
          </Link>
        </div>
        <p className='flex gap-4 items-center text-2xl'>
          <a
            href='https://github.com/VitorLima1998'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />
          </a>

          <a
            href='https://www.instagram.com/iamvitor98/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsInstagram />
          </a>

          <a
            href='https://www.linkedin.com/in/vitor-dos-santos-lima-807461261/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin />
          </a>
        </p>
      </header>
    </div>
  );
}
