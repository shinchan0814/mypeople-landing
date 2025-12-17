import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - MyPeople",
  description: "Privacy Policy for MyPeople app by Avighna Digital Private Limited",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MyPeople"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-xl text-[#0F172A]">MyPeople</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Privacy Policy</h1>
        <p className="text-[#64748B] mb-8">Last updated: December 16, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">1. Introduction</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              Welcome to MyPeople. This Privacy Policy explains how Avighna Digital Private Limited
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards your
              information when you use our mobile application MyPeople (the &quot;App&quot;).
            </p>
            <p className="text-[#475569] leading-relaxed">
              Please read this Privacy Policy carefully. By using the App, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-[#1E293B] mb-3">2.1 Personal Information</h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
              <li>Phone number (for account verification and identification)</li>
              <li>Name and profile photo (optional, for personalization)</li>
              <li>Contact list (with your permission, to help you find friends on MyPeople)</li>
              <li>Messages, photos, and videos you share within the App</li>
            </ul>

            <h3 className="text-xl font-medium text-[#1E293B] mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              When you use the App, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (features used, time spent, interaction patterns)</li>
              <li>Push notification tokens (to send you notifications)</li>
              <li>Log data (IP address, access times, app crashes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Provide, maintain, and improve the App</li>
              <li>Create and manage your account</li>
              <li>Enable you to connect with your closest people</li>
              <li>Send you notifications about messages and moments from your connections</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">4. Data Storage and Security</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              Your data is stored securely using industry-standard encryption and security practices.
              We use Supabase for our backend infrastructure, which provides:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>End-to-end encryption for data in transit</li>
              <li>Encryption at rest for stored data</li>
              <li>Regular security audits and monitoring</li>
              <li>Compliance with industry security standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li><strong>With your connections:</strong> Messages and moments you share are visible to your approved connections</li>
              <li><strong>Service providers:</strong> We may share information with vendors who assist us in operating the App</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">6. Your Privacy Choices</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              You have control over your personal information:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li><strong>Access and Update:</strong> You can access and update your profile information within the App</li>
              <li><strong>Delete Account:</strong> You can request deletion of your account and associated data</li>
              <li><strong>Notifications:</strong> You can manage push notification preferences in your device settings</li>
              <li><strong>Contacts:</strong> You can revoke contact access through your device settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">7. Data Retention</h2>
            <p className="text-[#475569] leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to
              provide you services. If you delete your account, we will delete your personal information
              within 30 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-[#475569] leading-relaxed">
              The App is not intended for children under 13 years of age. We do not knowingly collect
              personal information from children under 13. If you are a parent or guardian and believe
              your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">9. International Data Transfers</h2>
            <p className="text-[#475569] leading-relaxed">
              Your information may be transferred to and processed in countries other than your country
              of residence. These countries may have different data protection laws. We ensure appropriate
              safeguards are in place to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">10. Changes to This Policy</h2>
            <p className="text-[#475569] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your
              continued use of the App after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">11. Contact Us</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-[#0F172A] font-semibold mb-2">Avighna Digital Private Limited</p>
              <p className="text-[#475569]">Email: <a href="mailto:privacy@myppl.club" className="text-[#6366F1] hover:underline">privacy@myppl.club</a></p>
              <p className="text-[#475569]">Website: <a href="https://myppl.club" className="text-[#6366F1] hover:underline">myppl.club</a></p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-[#6366F1] hover:underline font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#64748B]">
            &copy; {new Date().getFullYear()} Avighna Digital Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
