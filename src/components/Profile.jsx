function Profile() {
  // Simulación de reseñas de usuarios
  const reviews = [
    { user: "John Doe", rating: 4, comment: "Great service and professional team!" },
    { user: "Jane Smith", rating: 5, comment: "Exceeded my expectations, highly recommended!" },
    { user: "Mark Johnson", rating: 3, comment: "Good service but some delays in communication." },
    { user: "Anna Brown", rating: 5, comment: "Superb quality and timely delivery!" },
    { user: "Mike Taylor", rating: 4, comment: "Very professional and reliable." },
    { user: "Emily White", rating: 3, comment: "Average experience, could be better." },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
      {/* Company Banner */}
      <div className="relative h-40 bg-gray-700 rounded-t-lg">
        <img
          className="absolute bottom-0 left-6 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
          src="/logo.png"
          alt="Company Logo"
        />
      </div>

      {/* Company Info */}
      <div className="mt-12 pl-6">
        <h1 className="text-2xl font-bold text-gray-800">BuildSmart Consulting</h1>
        <p className="text-gray-600">Construction Consulting • Nationwide</p>
        <p className="text-gray-500 mt-2">10 - 50 employees • Founded 2010</p>

        <div className="mt-4 flex space-x-3">
          <button className="px-4 py-2 bg-redMakit text-white font-semibold rounded-md hover:bg-red-700">
            Follow
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100">
            Message
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-2">
          BuildSmart Consulting is a leader in construction management and consulting services. We collaborate with clients to ensure their projects are designed and managed to the highest standards. Our team of experts brings decades of experience in construction strategy, planning, and sustainable design. We work with developers, architects, and engineers to guide projects from inception to completion without taking on direct contracts.
        </p>
        <p className="text-gray-600 mt-2">
          Our services include project planning, construction supervision, quality assurance, and cost control, ensuring your projects are delivered on time, within budget, and in compliance with all safety standards.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Some of our work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/Designer.jpeg" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
          <img src="/Designer.jpeg" alt="Project 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/300x200?text=Project+3" alt="Project 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/300x200?text=Project+4" alt="Project 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
          <img src="/Designer.jpeg" alt="Project 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
          <img src="/Designer.jpeg" alt="Project 6" className="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Services Offered */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Services Offered</h2>
        <ul className="mt-4 space-y-4">
          <li className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Project Management</h3>
            <p className="text-gray-600">
              Comprehensive project management services from initial planning through to final inspections, ensuring smooth progress and compliance with timelines.
            </p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Cost Estimation & Budgeting</h3>
            <p className="text-gray-600">
              Accurate cost estimation and financial planning services to keep your projects within budget without sacrificing quality.
            </p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Quality Assurance</h3>
            <p className="text-gray-600">
              Quality assurance and control services to maintain high standards at every stage of construction.
            </p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Sustainable Building Consulting</h3>
            <p className="text-gray-600">
              Guidance on sustainable construction practices, including energy-efficient designs and eco-friendly materials, to reduce environmental impact.
            </p>
          </li>
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800 font-semibold">{review.user}</p>
              <p className="text-yellow-500">Rating: {review.rating}⭐</p>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
