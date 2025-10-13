import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <section className="py-16" id="why-choose-us">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#00c4ea]">Why Choose Book Store?</h2>
        <p className="text-gray-600 mb-10">
          Read, download, or buy your favorite books — all in one place with a smooth and simple experience.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📖 Read Online Instantly</h3>
            <p>Start reading books directly on our website — no app required.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">⬇️ Download & Read Offline</h3>
            <p>Download your favorite books and enjoy them anytime, anywhere.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">💰 Buy Original Books</h3>
            <p>Purchase your favorite titles easily with safe and secure checkout.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📚 Vast Collection</h3>
            <p>Choose from thousands of books across every genre and category.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📱 Works on All Devices</h3>
            <p>Enjoy smooth reading on your mobile, tablet, or desktop.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">💡 Easy & Affordable</h3>
            <p>Simple design and budget-friendly options for every reader.</p>
          </div>
        </div>
      </div>
    </section>
      </div>
    </>
  );
}
