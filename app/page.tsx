import About from "@/components/About";
import BuyProcess from "@/components/BuyProcess";
// import Divider from "@/components/Divider";
import Expertises from "@/components/Expertise";
import Head from "@/components/Header";
import Luxury from "@/components/Luxury";
import Maps from "@/components/Maps";
import Plan from "@/components/Plan";
import SellProcess from "@/components/SellProcess";
import Strategy from "@/components/Strategy";
import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main className="bg-white h-full w-full text-black">
      <Head />
      <section className="relative w-full bg-[url('/bg-top.jpg')] h-[700px] flex flex-col  bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent sm:from-black/40 sm:to-black/40"></div>

        <div className="items-center h-full justify-center flex-col flex">
          <h1 className=" text-5xl text-white mb-10 z-10 font-bold uppercase">
            Services
          </h1>{" "}
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 z-10">
            <button className="text-white uppercase font bold border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-150">
              Search Homes
            </button>
            <button className="hover:text-white hover:bg-transparent uppercase font bold border border-white px-6 py-4 bg-white text-black transition-all duration-150">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <section>
        <Plan />
      </section>

      <div className="pb-14 md:pb-24">
        <section className="relative w-full bg-[url('/page-3.jpg')] h-[500px] flex  bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent sm:from-black/40 sm:to-black/40 flex items-center justify-center">
            <div className="items-center justify-center flex-col flex w-full ">
              <img
                src="/jhsereno-light.png"
                alt="logo"
                className="h-20 pb-5 "
              />
              <div className="flex flex-col md:flex-row md:gap-10 gap-5">
                <button className="text-white uppercase font bold border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-150">
                  Meet the team
                </button>
                <button className="hover:text-white hover:bg-transparent uppercase font bold border border-white px-6 py-4 bg-white text-black transition-all duration-150">
                  Home Valuation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <Expertises />
      </section>

      <section>
        <SellProcess />
      </section>

      <section>
        <BuyProcess />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Strategy />
      </section>

      <section>
        <Luxury />
      </section>

      <section>
        <Maps />
      </section>

      <section className="text-white relative w-full bg-[url('/work-with-us.jpg')] min-h-[700px] flex pt-10 bg-cover bg-center bg-no-repeat">
        <div className="absolute items-center p-5 md:p-44 justify-center flex flex-col inset-0 bg-gradient-to-r from-black/95 to-transparent sm:from-black/40 sm:to-black/40">
          <h1 className="text-2xl md:text-5xl text-center pb-10 underline-heading uppercase">
            Work With Us
          </h1>
          <p className="text-center px-0 md:px-48 text-xl font-extralight mt-10">
            With decades of experience in luxurious Tri Valley real estate, our
            team is here to ensure that your dreams are a reality. Let us guide
            you through your home buying journey, contact us today!
          </p>
          <Link
            href="/"
            className="border-2 px-10 h-12 items-center justify-center flex mt-20 hover:bg-white uppercase "
          >
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="w-auto min-h-[400px] mx-28 my-8 flex flex-row">
        <div className="flex flex-col p-10 w-full ">
          <div className="pb-10">
            <img
              src="/jhsereno-dark.png"
              alt="logo"
              className="h-7 w-52 items-left flex"
            />
          </div>
          <div className="flex flex-row">
            <div className="pl-8">
              <p className="font-bold text-2xl">Julie Hansen Partnership</p>
              <p className="my-3">(925) 553-6707</p>
              <p>luxuryhomesinwc@icloud.com</p>
            </div>
            <div className="pl-14">
              <p className="font-bold text-2xl">Address</p>
              <p className="my-3">4733 Chabot Drive #100</p>
              <p>Pleasanton, CA 94588</p>
            </div>
          </div>
          <p className="w-full pl-8 mt-5">
            An elite group of the East Bay’s most talented and visionary real
            estate professionals believed buyers and sellers deserved more from
            their real estate company. More service. More resources. More
            integrity. More global reach. In a word, more of everything people
            should expect when they buy or sell their homes.
          </p>
          <div className="flex flex-row">
            <p className="px-8 mt-5 underline-offset-8 underline">
              Julie Hansen-Orvis | CA DRE# 00934447
            </p>
            <div className="items-center flex justify-center">
              <Link href="/" className="mt-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 25"
                  fill="#A6942C"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M12 2.53906C17.5229 2.53906 22 7.01621 22 12.5391C22 17.5304 18.3431 21.6674 13.5625 22.4176V15.4297H15.8926L16.3359 12.5391L13.5625 12.5387V10.6632C13.5625 10.657 13.5625 10.6509 13.5626 10.6447C13.5626 10.6354 13.5628 10.6262 13.5629 10.6169C13.578 9.84259 13.9742 9.10156 15.1921 9.10156H16.4531V6.64062C16.4531 6.64062 15.3087 6.44492 14.2146 6.44492C11.966 6.44492 10.4842 7.78652 10.4386 10.2193C10.4379 10.2578 10.4375 10.2965 10.4375 10.3355V12.5387H7.89844V15.4293L10.4375 15.4297V22.4172C5.65686 21.667 2 17.5304 2 12.5391C2 7.01621 6.47715 2.53906 12 2.53906Z"
                    fill="#A6942C"
                  />
                </svg>
              </Link>

              <Link href="/" className="mt-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#A6942C"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
                    fill="#A6942C"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <p className="ml-8 mt-36">
            Website Designed & Developed by{" "}
            <span className="underline underline-offset-4 ">
              Luxury Presence
            </span>{" "}
          </p>
        </div>

        <div className=" w-full p-10">
          <h1 className="text-2xl font-semibold mb-5">Newsletter</h1>
          <p className="mb-5">
            Subscribe to our Newsletter for latest news and updates. Stay tuned!
          </p>
          <form>
            <label htmlFor="username"></label>
            <input
              name="email"
              type="email"
              className=" border-b-2 border-black  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
            <div className="flex flex-row items-start justify-center mt-3">
              <input type="checkbox" className="mr-5" required />
              <span className="text-sm">
                By providing Julie Hansen Partnership your contact information,
                you acknowledge and agree to our Privacy Policy and consent to
                receiving marketing communications, including through automated
                calls, texts, and emails, some of which may use artificial or
                prerecorded voices. This consent isn’t necessary for purchasing
                any products or services and you may opt out at any time. To opt
                out from texts, you can reply, ‘stop’ at any time. To opt out
                from emails, you can click on the unsubscribe link in the
                emails. Message and data rates may apply.
              </span>
            </div>
          </form>
          <div>
            <Link
              href="/"
              className="border-2 border-black px-2 max-w-[120px] items-center justify-center h-12 flex mt-3 ml-8 hover:bg-black hover:text-white uppercase"
            >
              Submit
            </Link>

            <div className="w-full mt-10 flex flex-row items-center ml-8 ">
              <img
                src="/dark-realtor-logo_x1vczu.png"
                alt="realtor"
                className="w-14 h-14"
              />
              <img
                src="/dark-equal-logo_gahxpa.png"
                alt="equal"
                className="px-5 20 h-14"
              />
              <img src="/sereno-logo.png" alt="sereno" className="w-20 h-5" />
            </div>
            <p className="mt-10 ml-7">Copyright 2024 | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Page;
