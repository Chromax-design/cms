import { LoraFont } from "@/app/layout";
import PageBanner from "@/components/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class room | Terms",
  description: "Terms and conditions",
};

const TermsPage = () => {
  return (
    <section>
      <PageBanner title="Terms &amp; conditions" />
      <div className="max-w-4xl mx-auto py-20 px-3">
        <h2 className={`capitalize ${LoraFont.className} text-3xl mb-5`}>
          terms &amp; conditions
        </h2>
        <div className="space-y-5">
          <p>
            Welcome to our School CMS. These terms and conditions outline the
            rules and regulations for the use of our platform.
          </p>
          <p>
            By accessing this platform, we assume you accept these terms and
            conditions in full. Do not continue to use our platform if you do
            not accept all of the terms and conditions stated on this page.
          </p>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>License to Use</h3>
            <ol className="space-y-2 mt-3 list-inside list-decimal">
              <li>
                Permission is granted to temporarily use our platform for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
                <ul className="list-inside list-disc space-y-2 my-4">
                  <li> Modify or copy the materials.</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display &lpar;commercial or non-commercial&rpar;                    .
                  </li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on our platform.
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials.
                  </li>
                </ul>
              </li>
              <li>
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by us at any time. Upon
                terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded
                materials in your possession whether in electronic or printed
                format.
              </li>
            </ol>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>User Account</h3>
            <ol className="space-y-2 mt-3 list-inside list-decimal">
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your computer
                or device. You agree to accept responsibility for all activities
                that occur under your account or password.
              </li>
              <li>
                You must notify us immediately upon becoming aware of any breach
                of security or unauthorized use of your account.
              </li>
            </ol>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>Content</h3>
            <ol className="space-y-2 mt-3 list-inside list-decimal">
              <li>
                Our platform allows you to post, link, store, share, and
                otherwise make available certain information, text, graphics,
                videos, or other material (&quot;Content&quot;). You are responsible for
                the Content that you post on our platform, including its
                legality, reliability, and appropriateness.
              </li>
            </ol>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>Modifications</h3>
            <ol className="space-y-2 mt-3 list-inside list-decimal">
              <li>
                We may revise these terms of service for our platform at any
                time without notice. By using our platform you are agreeing to
                be bound by the then current version of these terms of service.
              </li>
            </ol>
          </div>

          <div>
            <h3 className={`${LoraFont.className} text-xl`}>Governing law</h3>
            <ol className="space-y-2 mt-3 list-inside list-decimal">
              <li>
                These terms and conditions are governed by and construed in
                accordance with the laws of Your Country/State and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </li>
            </ol>
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

export default TermsPage;
