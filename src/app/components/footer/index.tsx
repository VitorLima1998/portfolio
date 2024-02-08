import { SiNextdotjs } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div className='bg-transparent px-10 py-3 pt-20 mx-auto'>
      <footer className='flex justify-between'>
        <div className='flex gap-5'>
          <p className='flex items-center gap-2'>
            Desenvolvido por Vitor Lima <SiNextdotjs />
          </p>
        </div>

        <a
          href='https://github.com/VitorLima1998'
          target='blank'
          className='flex items-center gap-2'
        >
          <FaGithub /> Github
        </a>
      </footer>
    </div>
  );
}
