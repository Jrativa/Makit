import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      priceMonthly: 29,
      priceAnnually: 300,
      features: ["Free Access to Workshops", "Basic company profile on the platform", "Access to a limited list of client projects (5 projects per month)", "Receipt of direct contact requests from customers", "Access to tips and resources to improve the visibility of the company"],
      support: "48-hour support response time",
    },
    {
      name: "Pro",
      priceMonthly: 69,
      priceAnnually: 750,
      features: [
        "Free Access to Workshops",
        "Complete company profile with logo, detailed description and photos of achievements",
        "Unlimited access to all available client projects",
        "Ability to send proposals directly to customers",
        "Priority and dedicated support for technical assistance",
        "Access to profile statistics (number of views, contact rate"
      ],
      highlight: true,
    },
    {
      name: "Premium",
      priceMonthly: 130,
      priceAnnually: 1200,
      features: [
        "Free Access to Workshops",
        "Priority and exclusive access to certain client projects",
        "Highlighting the company's profile in searches and suggestions",
        "Integrated project management tool with potential customer tracking",
        "Personalised advice and marketing support to maximise conversion",
        "Advanced statistics and performance analysis",
        "VIP support with dedicated assistance"
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        Pricing that grows with you
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${
            billingCycle === "monthly" ? "bg-redMakit text-white" : "text-gray-600"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded ${
            billingCycle === "annually" ? "bg-redMakit text-white" : "text-gray-600"
          }`}
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full md:w-1/4 bg-white p-6 rounded-lg shadow ${
              plan.highlight ? "border-2 border-blue-600" : "border"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="mt-4 text-3xl font-bold text-redMakit">
            €{billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually}
              <span className="text-sm font-medium">/{billingCycle}</span>
            </p>
            <button className="mt-6 w-full py-2 px-4 rounded text-white bg-redMakit hover:bg-red-700 font-semibold">
              Buy plan
            </button>
            <ul className="mt-4 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-red-600">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
              {plan.support && (
                <li className="flex items-center space-x-2">
                  <span className="text-red-600">✔</span>
                  <span>{plan.support}</span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
