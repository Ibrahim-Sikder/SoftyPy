import  './SectionTitle.css'
const SectionTitle = ({title, text}) => {
    return (
        <div className='text-center w-full md:w-8/12 lg:w-5/12  mx-auto'>
            <h2 className="text-2xl md:text-4xl text-[#F87015] font-bold"> {title}</h2>
            <p className='mt-3 text-xl '> {text} </p>
        </div>
    );
};

export default SectionTitle;