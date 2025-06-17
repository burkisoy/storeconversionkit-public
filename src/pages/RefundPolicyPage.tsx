import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
            
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">24-Hour Refund Policy</h2>
              
              <p className="text-gray-600 mb-6">
                At Store Conversion Kit, we want you to be completely satisfied with your purchase. We offer a 24-hour refund policy for all our digital products.
              </p>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-6">
                <p className="text-blue-700 font-medium">
                  You have 24 hours from the date of purchase to request a refund. After this period, no refunds will be issued.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Eligibility</h3>
              
              <p className="text-gray-600 mb-4">
                To be eligible for a refund, you must meet the following criteria:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Your refund request must be made within 24 hours of the original purchase date</li>
                <li>You must provide a valid reason for your refund request</li>
                <li>You must not have extensively used the product (as determined by our system logs)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Request a Refund</h3>
              
              <p className="text-gray-600 mb-4">
                To request a refund, please email us at <span className="font-semibold">support@storeconversionkit.com</span> with the following information:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Your full name</li>
                <li>Email address used for the purchase</li>
                <li>Date of purchase</li>
                <li>Reason for requesting a refund</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Process</h3>
              
              <p className="text-gray-600 mb-4">
                Once we receive your refund request, we will:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-600">
                <li>Review your request within 2 business days</li>
                <li>Verify your purchase and usage information</li>
                <li>Notify you of our decision via email</li>
                <li>If approved, process your refund within 5-7 business days</li>
              </ol>

              <p className="text-gray-600 mb-6">
                Refunds will be issued to the original payment method used for the purchase.
              </p>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 mb-6">
                <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                <p className="text-amber-700">
                  After the 24-hour refund period has expired, we will not issue refunds for any reason. By making a purchase, you acknowledge and agree to this policy.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptions</h3>
              
              <p className="text-gray-600 mb-4">
                We may make exceptions to this policy in the following cases:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Technical issues that prevent you from accessing or using the product, which our support team cannot resolve</li>
                <li>Incorrect or misrepresented product information at the time of purchase</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Please note that we reserve the right to deny refund requests that do not comply with this policy or that we determine to be abusive of our refund system.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              
              <p className="text-gray-600 mb-6">
                If you have any questions about our refund policy, please contact us at <span className="font-semibold">support@storeconversionkit.com</span>.
              </p>

              <div className="text-sm text-gray-500 pt-8 border-t">
                Last Updated: May 10, 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;