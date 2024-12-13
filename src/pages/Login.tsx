import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget as HTMLFormElement);
    const username = form.get("username") as string;
    const email = form.get("email") as string;

    try {
      login({ username, email });
    } catch (err) {
      console.log(err);
      setErrorMessage("ログインに失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto flex justify-center items-center px-8 md:px-16 lg:px-24">
        <div className="flex flex-col gap-10 w-2/3">
          <div>
            <label htmlFor="username" className="block font-semibold">
              username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border border-gray-300 h-8 rounded-md w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 h-8 rounded-md w-full"
              required
            />
          </div>
          <button className="bg-gray-300 px-8 py-4 hover:bg-gray-900 rounded-lg self-center">
            Login
          </button>
          {errorMessage && <p className="text-red-400 mx-auto">{errorMessage}</p>}
        </div>
      </div>
    </form>
  );
};

export default Login;
