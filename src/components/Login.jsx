import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    sessionStorage.setItem('user', 'Team105');
    navigate('/'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    await sessionStorage.setItem('user', 'Team105');
    navigate('/'); 
    // Implement login functionality here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login to Your Account</h2>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border text-redMakit border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border text-redMakit border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-redMakit rounded-lg hover:bg-red-700"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="text-redMakit">or</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 flex w-full items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google icon" className="h-5 w-5" />
          <span className='text-redMakit'>Log in with Google</span>
        </button>

        <p className="mt-6 text-center text-gray-500">
          Don’t have an account? <a href="#" className="text-redMakit hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
