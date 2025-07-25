import React from "react";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const PageNotFound = ({ onGoHome, onGoBack }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="text-center px-8 py-12 max-w-2xl mx-auto animate-fadeInScale">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse select-none">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-white/10 animate-float">
              404
            </div>
          </div>
        </div>

        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
            <AlertTriangle size={40} className="text-white" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slideInUp">
            Oops! Page Not Found
          </h2>
          <p
            className="text-lg text-gray-300 mb-2 animate-slideInUp"
            style={{ animationDelay: "0.2s" }}
          >
            The page you're looking for seems to have vanished into the digital
            void.
          </p>
          <p
            className="text-gray-400 animate-slideInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            to={"/"}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
          >
            <Home size={20} className="mr-2 group-hover:animate-pulse" />
            Go Home
          </Link>

          <Link
            to={"/"}
            onClick={onGoBack}
            className="flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:animate-pulse" />
            Go Back
          </Link>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageNotFound;
