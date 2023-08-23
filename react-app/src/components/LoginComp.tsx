
function LoginComp() {
  return (<>
  <div className="flex flex-col gap-3 py-32">
    <div className=" flex justify-center align-middle ">
      <input className="border-2 py-2 px-6 border-gray-500 rounded-lg" type="text" placeholder="email" />
    </div>
    <div className=" flex justify-center align-middle ">
      <input className="border-2 py-2 px-6 border-gray-500 rounded-lg" type="text" placeholder="Password" />
    </div>
  </div>
    
  </>
  )
}

export default LoginComp