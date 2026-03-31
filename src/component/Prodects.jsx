 const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className=" py-20 max-w-7xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p  className="text-center mb-8 text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {plans.map((plan, id) => (
          <div
            key={id}
            className={`border border-gray-200 rounded-2xl p-6 relative transition-all
            ${
              plan.highlight
                ? "  bg-linear-to-r from-red-400 via-orange-400 to-amber-400 text-white scale-105 shadow-xl"
                : "bg-white shadow-xl"
            }`}
          >
            {/* Badge */}
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p
              className={`mb-4 ${
                plan.highlight ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {plan.description}
            </p>

            {/* Price */}
            <h3 className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-base font-normal">
                {plan.period}
              </span>
            </h3>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-500"> <i class="fa-solid fa-check"></i></span>{feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-full font-medium transition-all
              ${
                plan.highlight
                  ? "bg-white text-orange-500 active:scale-95   transition-all  hover:bg-gray-200 "
                  : " bg-linear-to-r from-amber-400 via-orange-400 to-red-400 active:scale-95   text-white hover:opacity-90 mt-auto"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
