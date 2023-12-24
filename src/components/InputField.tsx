import Image from "next/image";
interface imputdata {
  name: string;
  placeholder: string;
  type: any;
  value: string;
  className: any;
  onChange: (e: any) => void;
  id: string;
  alt: string;
  src: string;
  svgWidth: number;
  svgHeight: number;
}

const InputField = ({
  onChange,
  name,
  placeholder,
  type,
  value,
  className,
  id,
  alt,
  src,
  svgWidth,
  svgHeight,
}: imputdata) => {
  return (
    <>
      <div
        className={`text-left m-2 ml-0 flex  p-2 justify-between rounded-md ${className}`}
      >
        <div className="flex gap-2 w-full">
          <Image src={src} alt={alt} width={svgWidth} height={svgHeight} />
          <input
            type={type}
            name={name}
            id={id}
            className={` text-sm bg-transparent focus:outline-none w-full`}
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => onChange(e)}
            required
          />
        </div>
        {placeholder === "password" && (
          <Image
            src={"/eye.svg"}
            alt={alt}
            width={svgWidth}
            height={svgHeight}
            className="cursor-pointer"
          />
        )}
      </div>
    </>
  );
};
export default InputField;
