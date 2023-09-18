

export default function Accordion(props) {
 
  return (
    <>
    {/* the accordion section  */}
      <div className=" rounded-md mt-2 ">
        <button
          className="w-full p-4 text-left text-white text-2xl border-b hover:bg-[#414141] border-black font-semibold bg-[#2d2d2d] 
                          transition duration-300"
          onClick={props.toggleAccordion}
        >
          {props.title}
          <span
            className={`float-right text-5xl transform ${
              props.isOpen ? "rotate-45" : "rotate-0"
            } 
                               transition-transform duration-300`}
          >
            &#43;
          </span>
        </button>
        {props.isOpen && (
          <div className="  p-5  bg-[#2d2d2d] text-white text-2xl ">
            {props.data}
          </div>
        )}
      </div>

    </>
  );
}
