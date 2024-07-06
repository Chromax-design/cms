import { LoraFont } from "@/app/layout";
import PageBanner from "@/components/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class room | Privacy",
  description: "Privacy policy",
};

const Privacypage = () => {
  return (
    <section>
      <PageBanner title="Privacy policy" />
      <div className="max-w-4xl mx-auto py-20 px-3">
        <h2 className={`capitalize ${LoraFont.className} text-3xl mb-5`}>
          Privacy policy
        </h2>
        <div className="space-y-5">
          <p>
            Welcome to our School CMS. We are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible manner. This Privacy Policy outlines how we
            collect, use, and protect your data when you use our platform.
          </p>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>
              Information We Collect
            </h3>
            <ul className="space-y-2 mt-3 list-disc list-inside">
              <li>
                <b> Personal Information:</b> When you register on our platform,
                we collect personal information such as your name, email
                address, phone number, and other contact details.
              </li>
              <li>
                <b>Student Information: </b> For students, we collect
                information related to your enrollment, grades, attendance, and
                other educational records.
              </li>
              <li>
                <b> Usage Data: </b> We collect data on how you interact with
                our platform, including IP addresses, browser type, operating
                system, and pages viewed.
              </li>
              <li>
                <b>Cookies:</b> We use cookies to enhance your experience on our
                platform. Cookies are small files stored on your device that
                help us remember your preferences and provide a personalized
                experience.
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>
              How We Use Your Information
            </h3>
            <ul className="space-y-2 mt-3 list-disc list-inside">
              <li>
                <b> To Provide and Improve Our Services:</b> We use your
                information to operate, maintain, and improve the functionality
                of our platform, including personalizing your experience.
              </li>
              <li>
                <b>To Communicate With You:</b> We use your contact information
                to send you updates, notifications, and other important
                information related to your use of the platform.
              </li>
              <li>
                <b> To Ensure Security:</b> We use data to monitor and protect
                the security of our platform, including detecting and preventing
                fraud and unauthorized access.
              </li>
              <li>
                <b>For Academic Purposes:</b> We use student information to
                manage enrollment, track progress, and provide educational
                services. experience.
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>
              Data Sharing and Disclosure
            </h3>
            <ul className="space-y-2 mt-3 list-disc list-inside">
              <li>
                <b> With Your Consent:</b> We may share your information with
                third parties if you give us explicit consent to do so.
              </li>
              <li>
                <b>With Service Providers:</b> We may share your data with
                trusted service providers who assist us in operating our
                platform, such as hosting services, email delivery, and
                analytics.
              </li>
              <li>
                <b> For Legal Reasons:</b> We may disclose your information if
                required to do so by law or in response to valid requests by
                public authorities.
              </li>
              <li>
                <b>Within Our Organization: </b> We may share your information
                within our organization to provide you with better service and
                to enhance the functionality of our platform.
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>
              Changes to This Privacy Policy
            </h3>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any significant changes by posting the new Privacy Policy on
              our platform and updating the effective date.
            </p>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>Contact us</h3>
            <p className="mt-3">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <ul className="space-y-2 mt-3">
              <li>
                <b>Email:</b> privacy@visualdev.com
              </li>
              <li>
                <b>Telephone No:</b> 09023456789
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacypage;
