import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigation = useNavigate();
  useEffect(() => {
    document.title = "Page Not Found | Nafisarkar";
    setTimeout(() => {
      navigation("/");
    }, 2000); // Redirect after 2 seconds
  }, [navigation]);
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col justify-center items-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>
    </main>
  );
};

export default NotFoundPage;
