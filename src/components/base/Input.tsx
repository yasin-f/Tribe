
type InputType = 'text' | 'password' | 'email';
interface InputProps{
    onChangeText(e:  any):void
    type : InputType,
    placeholder : string,
  }

export const Input = ({type, placeholder, onChangeText} : InputProps) => {
    return(
        <input
        className={`bg-[#F8F8F8] mt-5 appearance-none border rounded-2xl w-full py-4 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline text-sm`}
        type={type} placeholder={placeholder} onChange={onChangeText}  />
      )
}