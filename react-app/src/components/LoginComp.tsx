
function LoginComp() {
  return (<>
  <div className="flex justify-center align-middle py-20 ">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" width={200} alt="" />
  </div>
  <div className="flex flex-col gap-3 align-middle justify-center">
    <div className=" flex justify-center align-middle ">
      <input className="border-2 w-3/4 py-2 px-6 border-gray-400 rounded-lg" type="text" placeholder="email" />
    </div>
    <div className=" flex justify-center align-middle ">
      <input className="border-2 w-3/4 py-2 px-6 border-gray-400 rounded-lg" type="text" placeholder="Password" />
    </div>
    <div className=" flex justify-center align-middle ">
    <button className="bg-cyan-400 w-3/4 text-white font-medium shadow-lg shadow-sky-900/20  hover:bg-cyan-600 hover:text-sky-50 p-2 rounded-lg px-6"><a href="/">login</a></button>
    </div>
  </div>
    
  </>
  )
}

export default LoginComp