// src/components/Home.jsx
function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website!</h1>
      <p className="text-gray-600 mb-8 text-center">
        Discover amazing features and stay connected with us. Sign up to explore more!
      </p>
      <button className="px-6 py-2 bg-redMakit text-white rounded-lg hover:bg-red-400 transition duration-200" onClick={()=>{window.location.href = "/CompaniesList";}}>
        Get Started
      </button>
    </div>
  );
}

export default Dashboard;
