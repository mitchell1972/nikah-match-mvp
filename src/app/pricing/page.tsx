'use client';

import { useState } from 'react';
import { Check, X, Crown, Star, Sparkles, Heart } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Get started with basic features',
      icon: Heart,
      color: 'bg-gray-100 text-gray-600',
      buttonStyle: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
      isCurrent: true,
      features: [
        { name: 'Browse profiles', included: true },
        { name: 'Create your profile', included: true },
        { name: 'Express interest (5/day)', included: true },
        { name: 'Basic search filters', included: true },
        { name: 'Send messages', included: false },
        { name: 'See who viewed your profile', included: false },
        { name: 'Priority support', included: false },
        { name: 'Verified badge', included: false },
        { name: 'Advanced filters', included: false },
        { name: 'Profile boost', included: false },
      ],
    },
    {
      name: 'Gold',
      price: { monthly: 9.99, yearly: 7.99 },
      description: 'Most popular for serious searchers',
      icon: Star,
      color: 'bg-accent-100 text-accent-600',
      buttonStyle: 'bg-accent-500 text-white hover:bg-accent-600',
      isCurrent: false,
      popular: true,
      features: [
        { name: 'Browse profiles', included: true },
        { name: 'Create your profile', included: true },
        { name: 'Express interest (25/day)', included: true },
        { name: 'Advanced search filters', included: true },
        { name: 'Send messages (50/day)', included: true },
        { name: 'See who viewed your profile', included: true },
        { name: 'Priority support', included: false },
        { name: 'Verified badge', included: false },
        { name: 'Profile boost (1/week)', included: true },
        { name: 'Read receipts', included: true },
      ],
    },
    {
      name: 'Platinum',
      price: { monthly: 19.99, yearly: 15.99 },
      description: 'Premium experience with full access',
      icon: Crown,
      color: 'bg-primary-100 text-primary-600',
      buttonStyle: 'bg-primary-600 text-white hover:bg-primary-700',
      isCurrent: false,
      features: [
        { name: 'Browse profiles', included: true },
        { name: 'Create your profile', included: true },
        { name: 'Unlimited express interest', included: true },
        { name: 'Advanced search filters', included: true },
        { name: 'Unlimited messages', included: true },
        { name: 'See who viewed your profile', included: true },
        { name: 'Priority support (24/7)', included: true },
        { name: 'Verified badge', included: true },
        { name: 'Profile boost (daily)', included: true },
        { name: 'Featured profile placement', included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Premium Plans</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Your Match Faster</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Upgrade your account to unlock premium features and connect with more matches.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
            Yearly
          </span>
          {billingCycle === 'yearly' && (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border shadow-sm overflow-hidden ${
                plan.popular ? 'border-accent-300 ring-2 ring-accent-200' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="bg-accent-500 text-white text-center text-xs font-semibold py-1.5">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.color}`}>
                    <plan.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-xs text-gray-400">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      ${plan.price[billingCycle].toFixed(2)}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                      <span className="text-sm text-gray-400">/month</span>
                    )}
                  </div>
                  {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                    <p className="text-xs text-gray-400 mt-1">
                      Billed ${(plan.price.yearly * 12).toFixed(2)} yearly
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors ${plan.buttonStyle}`}
                >
                  {plan.isCurrent ? 'Current Plan' : `Upgrade to ${plan.name}`}
                </button>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Trust */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4 mt-8 text-left">
            {[
              { q: 'Can I cancel my subscription anytime?', a: 'Yes, you can cancel your premium subscription at any time. Your premium features will remain active until the end of your billing period.' },
              { q: 'Is my payment information secure?', a: 'Absolutely. We use industry-standard encryption and partner with trusted payment providers to ensure your financial information is always protected.' },
              { q: 'Can I switch between plans?', a: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will be charged the prorated difference. When downgrading, the change takes effect at the next billing cycle.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-medium text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
