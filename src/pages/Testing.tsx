import { useState } from "react";
import {
  Check,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Clock,
  Calendar,
  Zap
} from "lucide-react";

const CleaningDashboardData = () => {
  const [activeFrequency, setActiveFrequency] = useState(5);
  const [selectedPlan, setSelectedPlan] = useState("daily");

  const services = [
    { id: 1, name: "Surface Care", status: "active", completion: 100 },
    { id: 2, name: "Floor Maintenance", status: "active", completion: 100 },
    { id: 3, name: "Facility Sanitization", status: "active", completion: 100 },
    { id: 4, name: "Waste Management", status: "active", completion: 100 },
    { id: 5, name: "Glass Cleaning", status: "active", completion: 100 },
    {
      id: 6,
      name: "Touch Point Disinfection",
      status: "active",
      completion: 100
    }
  ];

  const impactMetrics = [
    {
      icon: Users,
      value: 30,
      unit: "%",
      label: "Fewer Sick Days",
      title: "Healthier Work Environment",
      description:
        "Reduces sick days by up to 30% and promotes overall wellness",
      color: "emerald",
      trend: "+12%"
    },
    {
      icon: TrendingUp,
      value: 23,
      unit: "%",
      label: "Productivity Gain",
      title: "Boosts Productivity",
      description: "Employees are more focused with workplace satisfaction",
      color: "blue",
      trend: "+8%"
    },
    {
      icon: Building2,
      value: 85,
      unit: "%",
      label: "Client Satisfaction",
      title: "Professional Image",
      description: "Impresses clients and visitors with immaculate facilities",
      color: "violet",
      trend: "+15%"
    },
    {
      icon: DollarSign,
      value: 40,
      unit: "%",
      label: "Cost Reduction",
      title: "Extends Asset Life",
      description: "Proper maintenance preserves furniture and equipment value",
      color: "amber",
      trend: "+18%"
    }
  ];

  const plans = [
    {
      id: "daily",
      name: "Daily",
      frequency: "7x/week",
      price: 175,
      traffic: "High-traffic"
    },
    {
      id: "weekly",
      name: "Weekly",
      frequency: "1x/week",
      price: 120,
      traffic: "Minimal"
    },
    {
      id: "biweekly",
      name: "Biweekly",
      frequency: "2x/week",
      price: 140,
      traffic: "Optimum"
    },
    {
      id: "monthly",
      name: "Monthly",
      frequency: "1x/month",
      price: 100,
      traffic: "Thorough"
    },
    {
      id: "custom",
      name: "Custom",
      frequency: "Flexible",
      price: 160,
      traffic: "Flexible"
    }
  ];

  const getColorClasses = (colorName) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
        text: "text-emerald-600",
        trend: "text-emerald-600"
      },
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-600",
        trend: "text-blue-600"
      },
      violet: {
        bg: "bg-violet-500",
        light: "bg-violet-50",
        text: "text-violet-600",
        trend: "text-violet-600"
      },
      amber: {
        bg: "bg-amber-500",
        light: "bg-amber-50",
        text: "text-amber-600",
        trend: "text-amber-600"
      }
    };
    return colorMap[colorName];
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                Cleaning Services Dashboard
              </h1>
              <p className="text-slate-300">
                Comprehensive office and commercial solutions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm text-slate-300">Current Plan</div>
                <div className="text-lg font-bold">Daily Service</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Service Tasks Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Active Services
              </h2>
              <p className="text-slate-600">All tasks included in your plan</p>
            </div>
            <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold text-sm">
              6 Services Active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {service.name}
                      </h3>
                      <div className="text-xs text-slate-500">Active</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {service.completion}%
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: `${service.completion}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Business Impact Metrics
            </h2>
            <p className="text-slate-600">
              Real-world benefits of professional cleaning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, idx) => {
              const colors = getColorClasses(metric.color);

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center`}
                    >
                      <metric.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div
                      className={`px-2 py-1 ${colors.light} rounded-full text-xs font-bold ${colors.trend}`}
                    >
                      {metric.trend}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-slate-900">
                        {metric.value}
                      </span>
                      <span className="text-2xl font-bold text-slate-600">
                        {metric.unit}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-semibold ${colors.text} mt-1`}
                    >
                      {metric.label}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Scheduling & Pricing */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Flexible Scheduling Options
            </h2>
            <p className="text-slate-600">
              Choose the perfect cleaning schedule for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`p-5 rounded-xl border-2 transition-all text-left ${
                  selectedPlan === plan.id
                    ? "border-slate-900 bg-slate-50 shadow-lg"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <Clock
                  className={`w-8 h-8 mb-3 ${
                    selectedPlan === plan.id
                      ? "text-slate-900"
                      : "text-slate-400"
                  }`}
                />
                <div className="font-bold text-slate-900 text-lg mb-1">
                  {plan.name}
                </div>
                <div className="text-sm text-slate-500 mb-2">
                  {plan.frequency}
                </div>
                <div className="text-xs text-slate-400">{plan.traffic}</div>
              </button>
            ))}
          </div>

          {/* Pricing Visualization */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-2">
                  ESTIMATED PRICING
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black">$150</span>
                  <span className="text-3xl font-bold text-slate-300">
                    - $200
                  </span>
                </div>
                <div className="text-slate-300 mb-6">
                  Price range for daily cleaning services
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">
                      Best for high-traffic offices
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">
                      All comprehensive tasks included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">
                      Professional equipment provided
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Service Frequency: {activeFrequency}x per week
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={activeFrequency}
                    onChange={(e) => setActiveFrequency(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>1x/week</span>
                    <span>7x/week</span>
                  </div>
                </div>

                <button className="w-full bg-white text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  Get Custom Quote
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CleaningDashboardData;
