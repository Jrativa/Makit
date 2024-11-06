import { useState } from 'react';

const companies = [
  { id: 1, name: "BuildSmart Consulting", description: "Offering expert consulting in construction project management and sustainable building practices.", services: ["Project Management", "Cost Estimation", "Quality Assurance"], category: "Architects", logo: "/logo.png", href:"/profile", premium: true },
  { id: 2, name: "HomeRevamp Interiors", description: "Specializing in interior remodeling, from kitchens to living spaces with a modern design touch.", services: ["Interior Design", "Kitchen Remodeling", "Bathroom Renovation"], category: "Interior Designers", logo: "/logo1.png", href:"/profile" },
  { id: 3, name: "EcoBuild Solutions", description: "Focused on eco-friendly construction and sustainable building materials for a greener future.", services: ["Green Building Consulting", "Energy Efficient Design", "Sustainable Materials"], category: "Architects", logo: "/logo2.png",  href:"/profile" },
  { id: 4, name: "PrimeElectric", description: "Licensed electricians for residential and commercial projects, specializing in wiring and lighting.", services: ["Residential Wiring", "Commercial Lighting", "Electrical Repairs"], category: "Electricians", logo: "/logo3.png", href:"/profile" },
  { id: 5, name: "FlowFix Plumbing", description: "Experienced plumbers providing solutions for homes and businesses, from leaks to full installations.", services: ["Pipe Installation", "Leak Repair", "Bathroom Plumbing"], category: "Plumbers", logo: "/logo.png", href:"/profile" },
];

const categories = ["Architects", "Interior Designers", "Electricians", "Plumbers"];

function CompanyList() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // Initially hide the filter on mobile

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredCompanies =
    selectedCategories.length === 0
      ? companies
      : companies.filter((company) => selectedCategories.includes(company.category));

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Toggle Button for Sidebar */}
      <button
        className="p-2 bg-redMakit text-white rounded md:hidden m-4 self-start"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Sidebar Filter */}
      <aside className={`fixed md:relative md:translate-x-0 bg-redMakit text-white p-6 transition-transform duration-300 ${showFilter ? 'translate-x-0' : '-translate-x-full'} md:flex-shrink-0 md:w-64 w-full h-full md:h-auto`}>
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
        <div>
          {categories.map((category) => (
            <label key={category} className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2 rounded text-purple-950 focus:ring-purple-500"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
        <button
            className="p-2 bg-red-800 text-white rounded md:hidden m-4 self-start"
            onClick={() => setShowFilter(!showFilter)}
        >
            {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-2 md:ml-94">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Construction & Interior Remodeling Companies</h1>
          <div className="space-y-6">
            {filteredCompanies.map((company) => (
              <a href={company.href} key={company.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row items-center">
                <img src={company.logo} alt={`${company.name} logo`} className="w-20 h-20 mr-0 sm:mr-4 rounded-full object-cover mb-4 sm:mb-0" />
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-semibold text-gray-800">{company.name}</h2>
                  <p className="text-gray-600 mt-2">{company.description}</p>
                  <h3 className="mt-4 font-medium text-gray-800">Services Offered:</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {company.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div style={{marginLeft:'10%', marginBottom:'6%'}}>
                  {company.premium && (
                    <div className="bg-redMakit text-white p-2 rounded-full text-sm" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                      </svg>

                    </div>
                      
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
