const Store = () => {
  return (
    <section
      id="Store"
      className="text-[rgb(248,195,44)] relative py-16 bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/asstes/images/img4.jpg')",
      }}
    >
      <div className="space-y-6 text-center">
        <h1 className="font-titleFont text-2xl md:text-4xl font-semibold">
          Get your discount now
        </h1>
        <div>get a discount of up to 60% for membership</div>
        <button className="px-6 py-2 text-[#C31F26]  bg-[#F8C32C] rounded-3xl">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Store;
