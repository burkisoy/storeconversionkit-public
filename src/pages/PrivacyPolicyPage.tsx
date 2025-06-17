import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                At Endezoon Retail Services LTD, we place great importance on the protection of personal data and compliance with data protection laws. This privacy policy briefly explains when and how Endezoon processes personal data under its control. This policy applies only to the processing of data belonging to external users; it does not cover how we process data of our own employees.
              </p>

              <p className="text-gray-600 mb-6">
                This policy has been drafted in accordance with data protection laws of the United Kingdom, where our company is established, and with the General Data Protection Regulation (GDPR) which applies throughout the European Economic Area (EEA). Endezoon Retail Services LTD is a company incorporated in the United Kingdom. [Company number: 15264197].
              </p>

              <p className="text-gray-600 mb-6">
                You can always contact us regarding the processing of your personal data. Please email us at support@storeconversionkit.com in such cases. We will get back to you as soon as possible.
              </p>

              <p className="text-gray-600 mb-8">
                This privacy policy may be updated from time to time, for example when our processing activities change. The most current version is always available on our website. You can find the last updated date at the bottom of this page.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Does Endezoon Process, When, and Why?</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-blue-500 flex-shrink-0">🔹</span>
                  <p className="text-gray-600"><strong>Website Visits:</strong> When you visit our website (https://storeconversionkit.com), certain personal data such as your IP address may be collected automatically. We also use cookies. For privacy-sensitive cookies, we obtain your consent through a cookie banner. For more information, please see our Cookie Policy. The legal basis for processing this data is your consent (if you accept cookies) or legitimate interest (e.g., to maintain and improve the website).</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 flex-shrink-0">🔹</span>
                  <p className="text-gray-600"><strong>When You Contact Us:</strong> If you contact us via our website or any other channel, we process the personal data you provide. This data will not be used for any other purpose. The legal basis for this processing is our legitimate interest (to respond to your request) or pre-contractual steps when applicable.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 flex-shrink-0">🔹</span>
                  <p className="text-gray-600"><strong>If You Become a Customer:</strong> If you or your employer becomes a customer of Endezoon, we may process certain personal data to communicate with you or provide access to our products/services. In this case, the legal basis is the performance of a contract.</p>
                </li>
              </ul>

              <p className="text-gray-600 mb-8">All data is retained only for as long as necessary to fulfill the purposes stated above.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing Personal Data with Third Parties</h2>
              <p className="text-gray-600 mb-8">Personal data is only shared with trusted third parties when necessary for the purposes outlined above. These service providers are permitted to use the data only to deliver the agreed service.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Transfers Outside the EEA</h2>
              <p className="text-gray-600 mb-8">When personal data needs to be transferred outside the EEA (e.g., when working with service providers using overseas servers), appropriate safeguards are implemented. In such cases, we ensure compliance with legal standards such as the European Commission's standard contractual clauses.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">Under the GDPR, you have the following rights concerning the personal data held about you by Endezoon:</p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                <li>The right to request access to your personal data</li>
                <li>The right to request correction or deletion of your data</li>
                <li>The right to object to or restrict the processing of your data</li>
                <li>The right to data portability (transferring your data to another controller)</li>
                <li>The right to withdraw your consent at any time (for data processed based on consent)</li>
                <li>The right to lodge a complaint with a supervisory authority (in the UK, this is the Information Commissioner's Office - ICO)</li>
              </ul>

              <div className="text-sm text-gray-500 pt-8 border-t">
                Last Updated: April 23, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;