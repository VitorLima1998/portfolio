import { AiFillCode } from 'react-icons/ai';
import { GiTeamIdea } from 'react-icons/gi';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

export default function Card() {
  return (
    <div className='container  flex gap-10 justify-center mx-auto border border-gray-500 rounded-3xl p-5 md:flex-row flex-col '>
      <div className='flex flex-col gap-2 w-full md:w-1/3'>
        <AiFillCode className='text-4xl' />
        <h1 className='text-5xl'>Full Stack</h1>
        <p className='text-md text-justify'>
          Sou um estudante apaixonado, empenhado em me tornar um desenvolvedor
          full stack. Com foco e dedicação, estou adquirindo habilidades tanto
          no desenvolvimento front-end quanto no back-end. Minha jornada é
          impulsionada pela resolução de problemas e pela curiosidade
          incessante. Estou comprometido em criar soluções tecnológicas
          inovadoras e versáteis, abraçando desafios e novas oportunidades de
          aprendizado. Acredito que a versatilidade é fundamental no mundo da
          tecnologia, e estou determinado a dominar diversas linguagens e
          ferramentas para atender às demandas em constante mudança da
          indústria.
        </p>
      </div>
      <div className='flex flex-col gap-2 w-full md:w-1/3'>
        <BsFillRocketTakeoffFill className='text-4xl' />
        <h1 className='text-5xl'>Entusiasta</h1>
        <p className='text-md text-justify'>
          Meu fascínio pelo mundo digital me impulsiona a abraçar novas áreas e
          tendências. Estou sempre em busca de oportunidades para aprender e
          aplicar meu conhecimento em projetos empolgantes. Minha paixão e
          dedicação à tecnologia me motivam a enfrentar desafios complexos com
          entusiasmo e determinação. Acredito que a tecnologia tem o poder de
          transformar o mundo e estou comprometido em fazer minha parte nesse
          processo.
        </p>
      </div>
      <div className='flex flex-col gap-2 w-full md:w-1/3'>
        <GiTeamIdea className='text-4xl' />
        <h1 className='text-5xl'>Trabalho em Equipe</h1>
        <p className='text-md text-justify'>
          Considero o trabalho em equipe uma pedra angular do sucesso em
          qualquer empreendimento. Sou um colaborador comprometido que valoriza
          a sinergia de uma equipe coesa. Minha abordagem é comunicativa e
          aberta, estou sempre receptivo às ideias e perspectivas dos outros.
          Contribuo com meu conhecimento e habilidades para alcançar objetivos
          comuns, mantendo um ambiente de trabalho positivo e produtivo.
          Acredito que a diversidade de habilidades e experiências enriquece
          qualquer equipe e leva a resultados mais inovadores e eficazes. Estou
          empenhado em cultivar relações de trabalho sólidas e em colaborar para
          alcançar o sucesso conjunto.
        </p>
      </div>
    </div>
  );
}
