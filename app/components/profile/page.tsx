export default function Profile() {
  return (
    <section className="h-screen  flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi, I am Aiswarya Kotharambath</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6">
        Frontend Developer | React & Next.js Expert | Dubai Opportunities
      </p>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        Contact Me
      </a>
    </section>
  );
}
