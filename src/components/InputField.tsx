
interface imputdata{
    name:string;
    placeholder:string;
    type:any;
    value:string;
    className:any;
    onChange:(e:any)=>void;
    id:string;
}

const InputField = ({onChange,name,placeholder,type,value,className,id}:imputdata) => {
    return (
      <>
        <div className="text-left m-2 ml-0 ">
          <form>
            <input
              type={type}
              name={name}
              id={id}
              className={`${className} text-sm focus:outline-none pt-4 pb-4 pl-4 pr-4 w-full`}
              placeholder={placeholder}
              value={value}
              onChange={(e:any)=>onChange(e)}
              required
            />
          </form>
          
        </div>
      </>
    );
  };
  export default InputField;
  