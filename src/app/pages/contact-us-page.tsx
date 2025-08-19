import ContactUsForm from '@/components/form/contact-us-form';
import { EmailSubscription } from '@/components/form/form-fields/subscribe-email';
import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import SectionHeading from '@/components/shared/section-heading';
import { contactUsBannerData } from '@/constants/banner-data/contact-us-banner-data';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function ContactUsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden pb-10">
      {/* Banner Section */}
      <div className="mt-20">
        <BannerTitleAndDescription sectionData={contactUsBannerData} />
      </div>

      {/* top content */}
      <div className="mx-auto my-10 grid max-w-6xl grid-cols-1 px-3 md:my-16 md:grid-cols-2 md:gap-10 lg:my-20 lg:gap-28">
        {/* contact us form */}
        <ContactUsForm />
        {/* right side content */}
        <div>
          {/* map */}
          <div className="mt-10 md:mt-0">
            <h3 className="font-space-grotesk text-xl font-bold md:text-2xl">
              Visit Us
            </h3>
            <p className="mt-1 flex items-center gap-2 text-xs md:items-start md:text-sm lg:items-center">
              <Icon
                icon="hugeicons:location-09"
                className="dark:text-primary/80 text-[#7E7E7E]"
              />
              <span className="dark:text-primary/80 text-[#0F0E0E]">
                Singapore Market, Agrabad, Chittagong, Bangladesh.
              </span>
            </p>
            <div className="my-5 md:h-[170px] lg:h-[200px]">
              <iframe
                className="h-full w-full rounded-2xl"
                allowFullScreen={true}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.402680260476!2d91.80218697770997!3d22.327132200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8ca66fb3673%3A0xdcb87583b34fd265!2sSingapore%20Bangkok%20Market!5e0!3m2!1sen!2sbd!4v1755502401547!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* contact us */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-space-grotesk text-xl font-bold md:text-2xl">
                Chat with us
              </h3>
              <p className="dark:text-primary/80 flex items-center gap-2 text-xs text-[#0F0E0E] md:text-sm">
                Speak to our friendly team through live chat.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <p className="flex items-center gap-2">
                  <Icon
                    icon="hugeicons:time-quarter-pass"
                    className="text-[#7E7E7E]"
                  />
                  <span className="dark:text-primary/80 text-[#0F0E0E]">
                    Set the meeting time
                  </span>
                </p>
                {/* book now button */}
                <button className="bg-brand cursor-pointer rounded-md px-3 py-1 font-semibold text-white shadow-[inset_2px_2px_12px_0_rgba(218,218,218,0.25)]">
                  Book Now
                </button>
              </div>
              <p className="flex items-center gap-2 text-xs md:text-sm">
                <Icon icon="fluent:chat-16-filled" className="text-[#7E7E7E]" />
                <span className="dark:text-primary/80 text-[#0F0E0E]">
                  Start a live chat
                </span>
              </p>
              <p className="flex items-center gap-2 text-xs md:text-sm">
                <Icon icon="material-symbols:mail" className="text-[#7E7E7E]" />
                <span className="dark:text-primary/80 text-[#0F0E0E]">
                  Ready to connect? Email us!
                </span>
              </p>
            </div>
          </div>
          {/* call us */}
          <div className="mt-5 space-y-3">
            <div className="space-y-1">
              <h3 className="font-space-grotesk text-xl font-bold md:text-2xl">
                Call us
              </h3>
              <p className="dark:text-primary/80 flex items-center gap-2 text-xs text-[#0F0E0E] md:text-sm">
                Call our team Sat-Thu from 10am to 6pm.
              </p>
            </div>
            <p className="flex items-center gap-2 text-xs md:text-sm">
              <Icon
                icon="fluent:call-add-24-filled"
                className="text-[#7E7E7E]"
              />
              <span className="dark:text-primary/80 text-[#0F0E0E]">
                +880123456789
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* news letter section */}
      <div className="bg-[#F2F2F2] py-8 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] md:py-12 dark:bg-[#0D0D0D]">
        <SectionHeading
          title="Join our weekly Newsletter"
          description="Stay up to date with the latest news, announcements and newsletter."
          className="mb-5 text-xs md:mb-10 md:text-xs lg:text-base"
        />

        <EmailSubscription />
      </div>
    </main>
  );
}
