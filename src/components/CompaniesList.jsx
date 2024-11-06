import { useState } from 'react';

const companies = [
  { id: 1, name: "BuildSmart Consulting", description: "Offering expert consulting in construction project management and sustainable building practices.", services: ["Project Management", "Cost Estimation", "Quality Assurance"], category: "Architects", logo: "https://via.placeholder.com/100x100?text=BuildSmart", href:"/profile" },
  { id: 2, name: "HomeRevamp Interiors", description: "Specializing in interior remodeling, from kitchens to living spaces with a modern design touch.", services: ["Interior Design", "Kitchen Remodeling", "Bathroom Renovation"], category: "Interior Designers", logo: "https://via.placeholder.com/100x100?text=HomeRevamp", href:"/profile" },
  { id: 3, name: "EcoBuild Solutions", description: "Focused on eco-friendly construction and sustainable building materials for a greener future.", services: ["Green Building Consulting", "Energy Efficient Design", "Sustainable Materials"], category: "Architects", logo: "https://via.placeholder.com/100x100?text=EcoBuild",  href:"/profile" },
  { id: 4, name: "PrimeElectric", description: "Licensed electricians for residential and commercial projects, specializing in wiring and lighting.", services: ["Residential Wiring", "Commercial Lighting", "Electrical Repairs"], category: "Electricians", logo: "https://via.placeholder.com/100x100?text=PrimeElectric", href:"/profile" },
  { id: 5, name: "FlowFix Plumbing", description: "Experienced plumbers providing solutions for homes and businesses, from leaks to full installations.", services: ["Pipe Installation", "Leak Repair", "Bathroom Plumbing"], category: "Plumbers", logo: "https://via.placeholder.com/100x100?text=FlowFix", href:"/profile" },
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
