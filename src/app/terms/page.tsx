import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms and Conditions - MyPeople",
  description: "Terms and Conditions for MyPeople app by Avighna Digital Private Limited",
};

export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Terms and Conditions</h1>
        <p className="text-[#64748B] mb-8">Last updated: December 16, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">1. Agreement to Terms</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you
              and Avighna Digital Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your
              access to and use of the MyPeople mobile application (the &quot;App&quot;).
            </p>
            <p className="text-[#475569] leading-relaxed">
              By downloading, installing, or using the App, you agree to be bound by these Terms. If you
              do not agree with any part of these Terms, you must not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">2. Eligibility</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              To use the App, you must:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Be at least 13 years of age (or the minimum age required in your jurisdiction)</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the App under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">3. Account Registration</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              To access certain features of the App, you must create an account. When creating an account:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>You must provide a valid phone number for verification</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">4. The MyPeople Service</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              MyPeople is a private social platform that allows you to:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Connect with up to 7 of your closest people</li>
              <li>Share photos, videos, and messages with your connections</li>
              <li>View moments shared by your connections</li>
              <li>Chat privately with your connections</li>
            </ul>
            <p className="text-[#475569] leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the App at any time
              without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">5. User Content</h2>

            <h3 className="text-xl font-medium text-[#1E293B] mb-3">5.1 Your Content</h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              You retain ownership of any content you submit, post, or display through the App (&quot;User Content&quot;).
              By submitting User Content, you grant us a non-exclusive, royalty-free, worldwide license to use,
              store, and display your content solely for the purpose of providing the App services.
            </p>

            <h3 className="text-xl font-medium text-[#1E293B] mb-3">5.2 Content Restrictions</h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              You agree not to post or share content that:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Is illegal, harmful, threatening, abusive, or harassing</li>
              <li>Contains nudity or sexually explicit material</li>
              <li>Promotes violence, discrimination, or hatred</li>
              <li>Infringes on intellectual property rights of others</li>
              <li>Contains malware, viruses, or harmful code</li>
              <li>Is spam, misleading, or deceptive</li>
              <li>Violates the privacy of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">6. Prohibited Activities</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              When using the App, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Use the App for any illegal purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App or servers</li>
              <li>Use automated means to access or collect data from the App</li>
              <li>Reverse engineer or decompile the App</li>
              <li>Harass, bully, or intimidate other users</li>
              <li>Create multiple accounts or use accounts of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">7. Intellectual Property</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              The App and its original content (excluding User Content), features, and functionality are
              owned by Avighna Digital Private Limited and are protected by international copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-[#475569] leading-relaxed">
              You may not copy, modify, distribute, sell, or lease any part of our App or included
              software without our explicit written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">8. Termination</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Suspend or terminate your account at any time for any reason</li>
              <li>Remove any content that violates these Terms</li>
              <li>Block access to the App without prior notice</li>
            </ul>
            <p className="text-[#475569] leading-relaxed mt-4">
              You may terminate your account at any time by deleting your account through the App settings.
              Upon termination, your right to use the App will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              THE APP IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>The App will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from the App will be accurate or reliable</li>
              <li>Any defects in the App will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">10. Limitation of Liability</h2>
            <p className="text-[#475569] leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVIGHNA DIGITAL PRIVATE LIMITED SHALL NOT BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
              PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">11. Indemnification</h2>
            <p className="text-[#475569] leading-relaxed">
              You agree to defend, indemnify, and hold harmless Avighna Digital Private Limited and its
              officers, directors, employees, and agents from any claims, damages, losses, liabilities,
              and expenses arising out of your use of the App or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">12. Governing Law</h2>
            <p className="text-[#475569] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without
              regard to its conflict of law provisions. Any disputes arising from these Terms shall be
              subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">13. Changes to Terms</h2>
            <p className="text-[#475569] leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes
              by posting the updated Terms and revising the &quot;Last updated&quot; date. Your continued use of
              the App after any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">14. Contact Us</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-[#0F172A] font-semibold mb-2">Avighna Digital Private Limited</p>
              <p className="text-[#475569]">Email: <a href="mailto:legal@myppl.club" className="text-[#6366F1] hover:underline">legal@myppl.club</a></p>
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
