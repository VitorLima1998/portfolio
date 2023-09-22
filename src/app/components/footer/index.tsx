import { SiNextdotjs } from 'react-icons/si';
import { FaCopyright, FaGithub } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div className='bg-transparent p-3 container mx-auto'>
      <footer className='flex justify-between'>
        <div className='flex gap-5'>
          <p className='flex items-center gap-2'>
            Desenvolvido utilizando NextJS <SiNextdotjs />
          </p>
          <p className='flex items-center gap-2'>
            2023 Vitor Lima <FaCopyright />
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
