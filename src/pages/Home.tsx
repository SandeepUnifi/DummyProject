// pages/Home.tsx
import React from "react";
const Home: React.FC = () => {
  const backgroundImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzs-tRvcWkmLa51XWVWKOURbRtXCBZYbJAg&s";

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <p className="text-white text-2xl md:text-4xl font-bold">
          This is the Home page
        </p>
      </div>
    </div>
  );
};

export default Home;
