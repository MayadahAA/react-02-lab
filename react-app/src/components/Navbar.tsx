
function Navbar() {
  return (
    <>
        <div className="border-b-2 border-gray-100 bg-white text-cyan-400 flex flex-row align-middle items-center justify-between font-medium py-5 px-5">
            <p className="text-2xl"><a href="/">Bootcamp</a></p>
            <button className="bg-cyan-400 text-white shadow-lg shadow-sky-900/20  hover:bg-cyan-600 hover:text-sky-50 p-2 rounded-lg px-6"><a href="/login">login</a></button>
        </div>
     
    </>
  )
}

export default Navbar