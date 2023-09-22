export default function Button(props) {
  return (
    <div>
      <button className='bg-transparen text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white font-bold py-2 px-4 rounded-full'>
        {props.text}
      </button>
    </div>
  );
}
