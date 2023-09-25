export default function Button(props) {
  return (
    <div>
      <button className='flex items-center gap-2 bg-transparent text-white border white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full'>
        {props.text}
        {props.icon}
      </button>
    </div>
  );
}
