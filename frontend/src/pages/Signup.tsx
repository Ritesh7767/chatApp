import Gender from "../components/Gender"
import Input from "../components/Input"

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] border-1 border-black'>
        <form action="" className='border border-black m-auto w-1/2 p-2 flex flex-col gap-2 rounded-xl has-focus-within:bg-black-50'>
            <input type="file" className="" />
            <Input label='Fullname' type='text' placeholder='fullname' />
            <Input label='Email' type='password' placeholder='email' />
            <Input label='Username' type='text' placeholder='Username' />
            <Input label='Password' type='password' placeholder='Password' />
            <Gender/>
            <div className='text-center'>
                <input type="submit" className='border border-black font-bold rounded-md bg-black p-2 text-white' />
            </div>
        </form>
    </div>
  )
}

export default Signup