import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App Usage Policy - MyPeople",
  description: "App Usage Policy and Community Guidelines for MyPeople app by Avighna Digital Private Limited",
};

export default function AppUsagePolicy() {
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
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">App Usage Policy</h1>
        <p className="text-[#64748B] mb-8">Last updated: December 16, 2025</p>

        <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-lg p-6 mb-8">
          <p className="text-[#3730A3] font-medium">
            MyPeople is designed for meaningful connections. This policy outlines how we expect our
            community to use the app responsibly and respectfully.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">1. Community Guidelines</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              MyPeople is built on the foundation of genuine, meaningful connections. To maintain a safe
              and positive environment, we ask all users to:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li><strong>Be authentic:</strong> Use your real identity and represent yourself honestly</li>
              <li><strong>Be respectful:</strong> Treat your connections with kindness and consideration</li>
              <li><strong>Be responsible:</strong> Think before you share and consider how your content affects others</li>
              <li><strong>Be supportive:</strong> Foster positive interactions with your closest people</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">2. Acceptable Use</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              The App should be used for:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Connecting with close friends and family members</li>
              <li>Sharing personal moments, updates, and memories</li>
              <li>Private messaging with your approved connections</li>
              <li>Staying updated with the lives of people you care about</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">3. Content Guidelines</h2>

            <h3 className="text-xl font-medium text-[#1E293B] mb-3">3.1 Allowed Content</h3>
            <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
              <li>Personal photos and videos from your daily life</li>
              <li>Text updates, thoughts, and messages</li>
              <li>Shared moments with your connections (with their consent)</li>
              <li>Appropriate personal expressions and communications</li>
            </ul>

            <h3 className="text-xl font-medium text-[#1E293B] mb-3">3.2 Prohibited Content</h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              The following content is strictly prohibited:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li><strong>Illegal content:</strong> Any content that violates local, national, or international laws</li>
              <li><strong>Harmful content:</strong> Content promoting self-harm, suicide, or dangerous activities</li>
              <li><strong>Harassment:</strong> Bullying, threats, intimidation, or targeting of individuals</li>
              <li><strong>Hate speech:</strong> Content promoting discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or national origin</li>
              <li><strong>Sexual content:</strong> Nudity, pornography, or sexually explicit material</li>
              <li><strong>Violence:</strong> Graphic violence, gore, or content promoting violence</li>
              <li><strong>Misinformation:</strong> Deliberately false or misleading information</li>
              <li><strong>Spam:</strong> Repetitive, unwanted, or promotional content</li>
              <li><strong>Intellectual property violations:</strong> Content that infringes on copyrights, trademarks, or other intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">4. Connection Guidelines</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              MyPeople limits you to 7 connections to ensure meaningful relationships. When managing connections:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Only connect with people you know and trust in real life</li>
              <li>Do not send connection requests to strangers</li>
              <li>Respect others&apos; decisions to accept or decline connection requests</li>
              <li>Do not pressure others to add you as a connection</li>
              <li>Use the connection limit thoughtfully to include your most important people</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">5. Privacy and Safety</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              To ensure privacy and safety:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Do not share login credentials with anyone</li>
              <li>Do not screenshot or share content from the app without consent</li>
              <li>Report any suspicious activity or policy violations</li>
              <li>Do not share personal information of others without their permission</li>
              <li>Be cautious about sharing sensitive personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">6. Messaging Etiquette</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              When using the chat feature:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Be respectful and considerate in your communications</li>
              <li>Do not send spam or repetitive messages</li>
              <li>Do not share harmful links or malicious content</li>
              <li>Respect others&apos; boundaries and response times</li>
              <li>Do not use the chat for harassment or unwanted contact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">7. Reporting Violations</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              If you encounter content or behavior that violates this policy:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li>Report the content or user through the app&apos;s reporting feature</li>
              <li>Contact us directly at <a href="mailto:safety@myppl.club" className="text-[#6366F1] hover:underline">safety@myppl.club</a></li>
              <li>Provide as much detail as possible about the violation</li>
              <li>Do not engage with or respond to harmful content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">8. Enforcement</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              Violations of this policy may result in:
            </p>
            <ul className="list-disc pl-6 text-[#475569] space-y-2">
              <li><strong>Warning:</strong> A notification about the policy violation</li>
              <li><strong>Content removal:</strong> Deletion of content that violates our guidelines</li>
              <li><strong>Temporary suspension:</strong> Limited access to app features for a period of time</li>
              <li><strong>Permanent ban:</strong> Complete removal of account access for severe or repeated violations</li>
            </ul>
            <p className="text-[#475569] leading-relaxed mt-4">
              We review each case individually and consider the severity and context of the violation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">9. Appeals</h2>
            <p className="text-[#475569] leading-relaxed">
              If you believe your account was suspended or terminated in error, you may appeal by
              contacting us at <a href="mailto:appeals@myppl.club" className="text-[#6366F1] hover:underline">appeals@myppl.club</a>.
              Please include your phone number and a detailed explanation of why you believe the
              decision should be reconsidered.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">10. Updates to This Policy</h2>
            <p className="text-[#475569] leading-relaxed">
              We may update this App Usage Policy from time to time to reflect changes in our practices
              or for legal reasons. We will notify you of significant changes through the App or by
              email. Your continued use of the App after changes are posted constitutes your acceptance
              of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">11. Contact Us</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              For questions about this policy or to report violations:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-[#0F172A] font-semibold mb-2">Avighna Digital Private Limited</p>
              <p className="text-[#475569]">General: <a href="mailto:hello@myppl.club" className="text-[#6366F1] hover:underline">hello@myppl.club</a></p>
              <p className="text-[#475569]">Safety: <a href="mailto:safety@myppl.club" className="text-[#6366F1] hover:underline">safety@myppl.club</a></p>
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
