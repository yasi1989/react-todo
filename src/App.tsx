import Header from "./components/Header"
import { useAuth } from "./context/AuthContext"
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";


function App() {

  const {user} = useAuth();

  return (
    <>
      <Header></Header>
      <main className="w-full mt-32">
        {user ? (<Tasks></Tasks>) : (<Login></Login>)}
      </main>
    </>
  )
}

export default App
