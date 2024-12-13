import { useAuth } from "../context/AuthContext"

const Header = () => {

  const {user, logout} = useAuth();

  return (
    <header className="container mx-auto flex justify-between items-center px-8 md:px-16 lg:px-24 w-full mt-4">
        <div className="text-xl font-bold">React Todo</div>
            { user && (
                <nav className="flex justify-between items-center gap-10">
                    <button onClick={() => logout()} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-900 transition-all duration-300">Logout</button>
                </nav>
              )
            }
    </header>
  )
}

export default Header
