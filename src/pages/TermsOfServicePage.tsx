import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. SCOPE</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">1.1 These Terms of Service ("Terms") govern the use of digital products and services ("Application") provided by Endezoon Retail Services LTD.</p>
                <p className="text-gray-600">1.2 In these Terms, "Endezoon", "we", "us", and "our" refer to Endezoon Retail Services LTD, a company incorporated under the laws of the United Kingdom, registered with company number [15264197].</p>
                <p className="text-gray-600">1.3 Any deviations from or additions to these Terms are only valid if agreed upon in writing.</p>
                <p className="text-gray-600">1.4 These Terms may be updated from time to time. In such cases, we will notify you in advance. If you do not agree to the new terms, you must discontinue use of the product.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. LICENSE TO USE</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">2.1 Endezoon grants you a worldwide, non-exclusive, non-transferable, non-sublicensable, and revocable license to use the Application. All intellectual property rights to the Application remain the sole property of Endezoon (or, where applicable, its licensors).</p>
                <p className="text-gray-600">2.2 Pages created using the Application may include a label such as "Built by Endezoon", along with our logo.</p>
                <p className="text-gray-600">2.3 You may not distribute the Application to third parties or use it in any unlawful or harmful way.</p>
                <p className="text-gray-600">2.4 You are fully responsible for how the Application is used, including any configurations, settings, or integrations.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. ONE-TIME PAYMENT AND ACCESS</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">3.1 Access to the Application is granted upon full payment. There is no recurring subscription model.</p>
                <p className="text-gray-600">3.2 After successful payment, the product or license is delivered digitally, typically via email. All sales are final and non-refundable due to the digital nature of the product.</p>
                <p className="text-gray-600">3.3 If any technical issues occur after purchase, Endezoon provides support to ensure proper access and delivery.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. DURATION AND TERMINATION</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">4.1 Your license becomes valid upon delivery and remains in effect indefinitely unless terminated.</p>
                <p className="text-gray-600">4.2 If you violate these Terms (such as unauthorized sharing of the product), Endezoon reserves the right to immediately revoke access.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. WARRANTIES AND UPDATES</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">5.1 The Application is provided "as is". No warranties are given regarding availability, fitness for a particular purpose, or uninterrupted functionality.</p>
                <p className="text-gray-600">5.2 Endezoon reserves the right to update, improve, or discontinue the Application at its discretion.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. INDEMNIFICATION</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">6.1 You agree to indemnify and hold harmless Endezoon, its employees, affiliates, and partners from any claims, losses, or damages (including legal fees) arising from your use of the Application.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. LIMITATION OF LIABILITY</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">7.1 Except in cases of willful misconduct or gross negligence, Endezoon's total liability shall not exceed the amount paid by you for the product. Endezoon shall not be liable for indirect, incidental, or consequential damages including, but not limited to, loss of profits, data, or reputation.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. DATA PRIVACY AND CONFIDENTIALITY</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">8.1 If Endezoon processes personal data on your behalf, the Data Processing Agreement (Annex I) shall apply.</p>
                <p className="text-gray-600">8.2 Both parties agree to keep confidential any information obtained in connection with this agreement and not disclose it to third parties.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. GOVERNING LAW AND JURISDICTION</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">9.1 These Terms are governed by the laws of the United Kingdom.</p>
                <p className="text-gray-600">9.2 Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in London, United Kingdom.</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. MISCELLANEOUS</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">10.1 These Terms represent the entire agreement between you and Endezoon Retail Services LTD, superseding all prior understandings.</p>
                <p className="text-gray-600">10.2 The failure of Endezoon to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision. If any provision is held invalid, the remaining provisions will remain in full force and effect.</p>
                <p className="text-gray-600">10.3 Endezoon may assign these Terms without your consent. You may not assign your rights or obligations without prior written approval from Endezoon.</p>
              </div>

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

export default TermsOfServicePage;