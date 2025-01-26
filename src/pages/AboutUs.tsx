import Container from "@/components/shared/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="bg-white">
        <header className="bg-cPrimary text-white text-center py-12">
          <h1 className="text-4xl font-bold mt-16">About Us</h1>
        </header>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Mission and Values</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            At Doodle Stationery, we aim to spark creativity and productivity by
            offering top-notch stationery products. Our values focus on quality,
            affordability, and a seamless shopping experience.
          </p>
          <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">5000+</h3>
              <p className="text-gray-700">Products Available</p>
            </div>
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">10+</h3>
              <p className="text-gray-700">Years in Business</p>
            </div>
          </div>
        </section>

        <section className="bg-cPrimary text-white py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            To become the ultimate destination for stationery lovers, where
            creativity meets quality and innovation.
          </p>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Best-Selling Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Notebooks</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Art Supplies</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Pens & Pencils</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Office Essentials</h3>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-4">
          <h2 className="text-2xl font-bold text-center">
            What Makes Us Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Eco-Friendly Options</h3>
              <p className="text-gray-700 mt-2">
                We offer a wide range of sustainable and eco-friendly stationery
                products.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Customizable Stationery</h3>
              <p className="text-gray-700 mt-2">
                Get personalized designs to make your stationery uniquely yours.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Quality Guarantee</h3>
              <p className="text-gray-700 mt-2">
                Every product is carefully curated to ensure the highest
                quality.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-gray-700 mt-2">
                Enjoy quick and reliable delivery for all your orders.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Customer Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Premium Journals</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Calligraphy Kits</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">Desk Organizers</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-40 transition-colors">
              <h3 className="text-xl font-bold">DIY Craft Supplies</h3>
            </div>
          </div>
        </section>

        <section className="bg-cPrimary bg-opacity-20 text-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold text-black">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-70 hover:bg-cPrimary transition-colors">
              <p>
                "Doodle Stationery has the most beautiful journals I've ever
                used. Amazing quality!"
              </p>
              <h3 className="mt-4 font-bold">- Sarah J.</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-70 hover:bg-cPrimary transition-colors">
              <p>
                "Great selection of art supplies. Their watercolor sets are
                simply outstanding."
              </p>
              <h3 className="mt-4 font-bold">- Mark P.</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-cPrimary bg-opacity-70 hover:bg-cPrimary transition-colors">
              <p>
                "Fast delivery and amazing customer service. Highly recommend
                Doodle Stationery!"
              </p>
              <h3 className="mt-4 font-bold">- Emily R.</h3>
            </div>
          </div>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="mt-8">
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 className="text-xl font-bold">
                Do you offer bulk discounts?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, we offer discounts for bulk orders. Contact us for more
                information.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                Can I customize my stationery?
              </h3>
              <p className="mt-2 text-gray-700">
                Absolutely! We offer customizable options for notebooks, pens,
                and more.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                What are your delivery times?
              </h3>
              <p className="mt-2 text-gray-700">
                Orders are typically delivered within 3-5 business days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;
