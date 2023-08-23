
function Navbar() {
  return (
    <>
        <div className="bg-white text-sky-900 flex flex-row align-middle items-center justify-between font-medium py-5 px-5">
            <p className="text-2xl"><a href="/">Bootcamp</a></p>
            <button className="bg-blue-600 text-white shadow-lg shadow-sky-900/20  hover:bg-blue-800 hover:text-sky-50 p-2 rounded-lg px-6"><a href="/login">login</a></button>
        </div>
     
    </>
  )
}

export default Navbar