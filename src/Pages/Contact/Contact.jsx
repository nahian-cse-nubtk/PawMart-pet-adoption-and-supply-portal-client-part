"use client";

const Contact = () => {
  return (
    <div className="min-h-screen  px-4 py-10">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Contact Us 🐾
        </h1>
        <p className="text-gray-600 dark:text-white max-w-2xl mx-auto">
          Have questions about pet adoption, supplies, or need help choosing the
          right companion? We’re here to help you every step of the way ❤️
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1  gap-8">
        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
            Get in Touch
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-xl">
              📍
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-white">Our Location</p>
              <p className="text-sm text-gray-500 dark:text-white">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
              📞
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-white">Phone</p>
              <p className="text-sm text-gray-500 dark:text-white">
                +880 1234 567 890
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
              ✉️
            </div>
            <div>
              <p className="font-semibold text-gray-700 dark:text-white">Email</p>
              <p className="text-sm text-gray-500 dark:text-white">
                support@petadoption.com
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600 dark:text-white">
            🐶 Our team responds within 24 hours.
            Your pet’s happiness is our priority.
          </div>
        </div>

        {/* Contact Form */}

      </div>

      {/* Footer Note */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        Made with ❤️ for pets and their humans
      </div>
    </div>
  );
};

export default Contact;
