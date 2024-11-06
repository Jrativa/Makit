import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Freelancer",
      priceMonthly: 29,
      priceAnnually: 290,
      features: ["Profile listing", "Up to 1,000 views per month", "Basic analytics (views, clicks)"],
      support: "48-hour support response time",
    },
    {
      name: "Startup",
      priceMonthly: 59,
      priceAnnually: 590,
      features: [
        "Enhanced profile listing with photos and videos",
        "Up to 10,000 views per month",
        "Advanced analytics (views, clicks, engagement rates)",
        "Priority listing in search results",
        "Automated marketing tools (e.g., email outreach)"
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      priceMonthly: 99,
      priceAnnually: 990,
      features: [
        "Premium profile listing with branding options",
        "Unlimited views per month",
        "Advanced analytics with custom reporting",
        "Top placement in search results",
        "Dedicated account manager",
        "Access to marketing automations and lead generation tools"
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
