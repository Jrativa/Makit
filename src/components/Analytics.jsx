

const Analytics = () => {
    // Definir los datos de las empresas, incluyendo sus vistas
    const companies = [
        { id: 1, name: "BuildSmart Consulting", description: "Offering expert consulting in construction project management and sustainable building practices.", services: ["Project Management", "Cost Estimation", "Quality Assurance"], category: "Architects", logo: "https://via.placeholder.com/100x100?text=BuildSmart", href:"/profile", views: 1500 },
        { id: 2, name: "HomeRevamp Interiors", description: "Specializing in interior remodeling, from kitchens to living spaces with a modern design touch.", services: ["Interior Design", "Kitchen Remodeling", "Bathroom Renovation"], category: "Interior Designers", logo: "https://via.placeholder.com/100x100?text=HomeRevamp", href:"/profile", views: 2300 },
        { id: 3, name: "EcoBuild Solutions", description: "Focused on eco-friendly construction and sustainable building materials for a greener future.", services: ["Green Building Consulting", "Energy Efficient Design", "Sustainable Materials"], category: "Architects", logo: "https://via.placeholder.com/100x100?text=EcoBuild",  href:"/profile", views: 1200 },
        { id: 4, name: "PrimeElectric", description: "Licensed electricians for residential and commercial projects, specializing in wiring and lighting.", services: ["Residential Wiring", "Commercial Lighting", "Electrical Repairs"], category: "Electricians", logo: "https://via.placeholder.com/100x100?text=PrimeElectric", href:"/profile", views: 900 },
        { id: 5, name: "FlowFix Plumbing", description: "Experienced plumbers providing solutions for homes and businesses, from leaks to full installations.", services: ["Pipe Installation", "Leak Repair", "Bathroom Plumbing"], category: "Plumbers", logo: "https://via.placeholder.com/100x100?text=FlowFix", href:"/profile", views: 500 },
    ];
    
    // Encontrar el máximo número de vistas para normalizar el ancho de las barras
    const maxViews = Math.max(...companies.map(company => company.views));
  
    return (
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Most viewed companies during the last month</h2>
        
        <div className="space-y-4">
          {companies.map(company => (
            <a href={company.href} key={company.id} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              
              {/* Logo */}
              <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 rounded object-cover" />
  
              {/* Nombre de la empresa */}
              <div className="text-center sm:text-left w-full sm:w-1/4 text-gray-800 font-semibold">
                {company.name}
              </div>
  
              {/* Barra de vistas */}
              <div className="w-full sm:flex-1">
                <div
                  className="bg-redMakit h-6 rounded"
                  style={{ width: `${(company.views / maxViews) * 100}%` }}
                ></div>
              </div>
  
              {/* Número de vistas */}
              <div className="text-center sm:text-right w-full sm:w-16 text-gray-600 font-medium">
                {company.views} views
              </div>
            </a>
          ))}
        </div>
      </div>
    );
};

export default Analytics;
