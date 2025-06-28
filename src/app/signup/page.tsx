"use client";

import { useState } from "react";
import SignupNavbar from "@/components/SignupNavbar";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle success
      console.log("Account created successfully");
    } catch (error) {
      console.error("Error creating account:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SignupNavbar />
      
      {/* Main Content */}
      <div className="w-full pt-20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-start items-center lg:items-stretch gap-8 lg:gap-12">
          
          {/* Form Section */}
          <div className="flex-1 w-full flex flex-col justify-center items-center">
            <div className="w-full max-w-md px-4 sm:px-8 flex flex-col justify-start items-center">
              <div className="w-full flex flex-col justify-start items-center gap-6 sm:gap-8">
                
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <h1 className="w-full text-left text-gray-900 text-2xl sm:text-3xl font-normal font-anton leading-tight">
                    Create Account
                  </h1>
                  <p className="w-full text-left text-slate-600 text-sm sm:text-base font-normal font-lato leading-normal">
                    Fill in the form with the appropriate details
                  </p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full rounded-xl flex flex-col justify-start items-center gap-6">
                  <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-5">
                    
                    {/* Name Field */}
                    <div className="w-full flex flex-col justify-start items-start gap-1.5">
                      <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your name"
                        className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                      />
                    </div>
                    
                    {/* Email Field */}
                    <div className="w-full flex flex-col justify-start items-start gap-1.5">
                      <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                      />
                    </div>
                    
                    {/* Password Field */}
                    <div className="w-full flex flex-col justify-start items-start gap-1.5">
                      <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                        Password*
                      </label>
                      <div className="relative w-full">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          placeholder="Create a password"
                          className="w-full h-11 px-3.5 py-2.5 pr-10 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.05 6.05M9.878 9.878a3 3 0 105.243 5.243m0 0L17.95 17.95M9.878 9.878L6.05 6.05m3.828 3.828l4.242 4.242M9.878 9.878L6.05 6.05m3.828 3.828l4.242 4.242" />
                            </svg>
                          )}
                        </button>
                      </div>
                      <p className="text-slate-600 text-sm font-normal font-lato leading-tight">
                        Must be at least 8 characters.
                      </p>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      className="h-12 sm:h-14 bg-sky-900 hover:bg-sky-800 text-base sm:text-lg"
                    >
                      {isSubmitting ? "Creating..." : "Get started"}
                    </Button>
                  </div>
                </form>
                
                {/* Login Link */}
                <div className="w-full flex justify-center items-start gap-1">
                  <span className="text-slate-600 text-sm font-normal font-lato leading-tight">
                    Already have an account?
                  </span>
                  <a 
                    href="/login" 
                    className="text-sky-900 text-sm font-semibold font-lato leading-tight hover:text-sky-700 transition-colors duration-200"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 w-full flex justify-center items-center">
            <div className="w-full max-w-[620px] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/optimized/signup.webp"
                alt="Join Word Sanctuary Global"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
