import { FaArrowRight } from "react-icons/fa";
import "./Product.css";
import grapich from "../../../public/assets/graphic.avif";
const Products = () => {
    const productData = [
        {
            id: 1,
            name:'Digital Marketing',
            img: grapich
        },
        {
            id: 1,
            name:'Digital Marketing',
            img: grapich
        },
        {
            id: 1,
            name:'Digital Marketing',
            img: grapich
        },
        {
            id: 1,
            name:'Digital Marketing',
            img: grapich
        },
        
    ]
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            productData.map(data=>  <div key={data.id} className="productCard">
            <img src={grapich} alt="grapich" />
            <div className="productCardContent">
              <h3 className="text-xl font-bold">Digital Marketing </h3>
              <div className="flex items-center cursor-pointer mt-2">
                <span>Learn More </span>
                <FaArrowRight className="ml-2 text-[#F87015] " />
              </div>
            </div>
            </div>)
        }
      
      </div>
    </div>
  );
};

export default Products;
