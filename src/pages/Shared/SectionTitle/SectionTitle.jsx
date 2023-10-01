import  './SectionTitle.css'
const SectionTitle = ({title, text}) => {
    return (
        <div className='text-center w-5/12 mx-auto'>
            <h2 className="text-4xl text-[#F87015] font-bold"> {title}</h2>
            <p className='mt-3'> {text} </p>
        </div>
    );
};

export default SectionTitle;