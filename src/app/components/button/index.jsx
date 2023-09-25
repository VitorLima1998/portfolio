export default function Button(props) {
  return (
    <div>
      <button className='flex items-center gap-2 bg-transparent border hover:bg-gray-500 font-bold py-2 px-4 rounded-full'>
        {props.text}
        {props.icon}
      </button>
    </div>
  );
}
