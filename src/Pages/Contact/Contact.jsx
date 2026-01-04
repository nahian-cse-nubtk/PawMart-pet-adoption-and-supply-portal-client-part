"use client";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 px-4 py-10">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Contact Us 🐾
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about pet adoption, supplies, or need help choosing the
          right companion? We’re here to help you every step of the way ❤️
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-xl">
              📍
            </div>
            <div>
              <p className="font-semibold text-gray-700">Our Location</p>
              <p className="text-sm text-gray-500">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
              📞
            </div>
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <p className="text-sm text-gray-500">
                +880 1234 567 890
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
              ✉️
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-sm text-gray-500">
                support@petadoption.com
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            🐶 Our team responds within 24 hours.
            Your pet’s happiness is our priority.
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-xl"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-xl"
              required
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded-xl"
              required
            />

            <button
              type="submit"
              className="btn bg-amber-200 hover:bg-amber-300 text-gray-800 rounded-xl w-full"
            >
              Send Message 🐕
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        Made with ❤️ for pets and their humans
      </div>
    </div>
  );
};

export default Contact;
