"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import SignupNavbar from "@/components/SignupNavbar";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function SignIn() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: "",
    otp: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const totalSteps = 2;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(""); // Clear error when user types
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, any email is valid
      if (formData.email) {
        setOtpSent(true);
        setCurrentStep(2);
        setSuccess("OTP sent to your email address!");
        console.log("OTP sent to:", formData.email);
      } else {
        setError("Please enter a valid email address");
      }
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
      console.error("Error sending OTP:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, any OTP is valid (non-empty)
      if (formData.otp.trim()) {
        // Simulate successful login
        const success = await login(formData.email, "dummy-password");
        if (success) {
          setSuccess("Login successful! Welcome back!");
          setTimeout(() => {
            router.push("/dashboard");
          }, 1500);
        } else {
          setError("Account not found. Please check your email or sign up.");
        }
      } else {
        setError("Please enter the OTP sent to your email");
      }
    } catch (error) {
      setError("Invalid OTP. Please try again.");
      console.error("Error verifying OTP:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    setOtpSent(false);
    setError("");
    setSuccess("");
  };

  const handleResendOTP = async () => {
    setIsSubmitting(true);
    setError("");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess("OTP resent to your email address!");
    } catch (error) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SignupNavbar />
      
      {/* Main Content */}
      <div className="w-full pt-24 min-h-screen flex justify-center items-start">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8">
          
          {/* Form Section */}
          <div className="flex-1 w-full flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 py-8">
            <div className="w-full max-w-md flex flex-col justify-start items-center">
              <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-6">
                
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <h1 className="w-full text-left text-gray-900 text-xl sm:text-2xl font-normal font-anton leading-tight">
                    Welcome Back
                  </h1>
                  <p className="w-full text-left text-slate-600 text-sm font-normal font-lato leading-normal">
                    Sign in to access your Word Sanctuary dashboard
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="w-full flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-2 flex-1">
                      {[1, 2].map((step) => (
                        <div key={step} className="flex items-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            currentStep >= step 
                              ? 'text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`} style={currentStep >= step ? { backgroundColor: '#001856' } : {}}>
                            {step}
                          </div>
                          {step < totalSteps && (
                            <div className={`w-8 h-0.5 mx-1 ${
                              currentStep > step ? '' : 'bg-gray-200'
                            }`} style={currentStep > step ? { backgroundColor: '#001856' } : {}} />
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      Step {currentStep} of {totalSteps}
                    </span>
                  </div>
                </div>

                {/* Success Message */}
                {success && (
                  <div className="w-full bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-600 font-lato">{success}</p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="w-full bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-600 font-lato">{error}</p>
                  </div>
                )}
                
                {/* Step 1: Email Input */}
                {currentStep === 1 && (
                  <form onSubmit={handleSendOTP} className="w-full flex flex-col justify-start items-center gap-4">
                    <div className="w-full flex flex-col justify-start items-start gap-3">
                      <h3 className="text-base font-semibold text-gray-900 font-lato">Enter Your Email</h3>
                      
                      {/* Email */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-all duration-200"
                          style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                        />
                      </div>
                      
                      {/* Send OTP Button */}
                      <div className="w-full pt-3">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          fullWidth
                          className="h-10 hover:opacity-90 text-sm"
                          disabled={!formData.email || isSubmitting}
                          isLoading={isSubmitting}
                        >
                          {isSubmitting ? "Sending OTP..." : "Send OTP"}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
                
                {/* Step 2: OTP Verification */}
                {currentStep === 2 && (
                  <form onSubmit={handleVerifyOTP} className="w-full flex flex-col justify-start items-center gap-4">
                    <div className="w-full flex flex-col justify-start items-start gap-3">
                      <h3 className="text-base font-semibold text-gray-900 font-lato">Verify OTP</h3>
                      
                      <p className="text-slate-600 text-sm font-normal font-lato leading-normal">
                        We sent a verification code to <strong>{formData.email}</strong>
                      </p>
                      
                      {/* OTP Input */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Enter OTP*
                        </label>
                        <input
                          type="text"
                          name="otp"
                          value={formData.otp}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter 6-digit code"
                          maxLength={6}
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-all duration-200 text-center tracking-widest"
                          style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                        />
                      </div>

                      {/* Resend OTP */}
                      <div className="w-full text-center">
                        <button
                          type="button"
                          onClick={handleResendOTP}
                          disabled={isSubmitting}
                          className="text-sm font-medium font-lato underline"
                          style={{ color: '#001856' }}
                        >
                          Didn't receive code? Resend OTP
                        </button>
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="w-full flex gap-2 pt-3">
                        <Button
                          type="button"
                          onClick={handleBack}
                          variant="secondary"
                          size="lg"
                          className="flex-1 h-10 text-sm"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting || !formData.otp}
                          isLoading={isSubmitting}
                          className="flex-1 h-10 hover:opacity-90 text-sm"
                        >
                          {isSubmitting ? "Verifying..." : "Sign In"}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}

                {/* Sign Up Link */}
                <div className="w-full text-center pt-4">
                  <p className="text-slate-600 text-sm font-normal font-lato leading-normal">
                    Don't have an account?{' '}
                    <a href="/signup" className="font-medium underline" style={{ color: '#001856' }}>
                      Join our community
                    </a>
                  </p>
                </div>

                {/* Demo accounts info */}
                <div className="w-full pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3 font-lato">Demo Accounts:</h3>
                  <div className="space-y-2 text-xs text-gray-600 font-lato">
                    <div><strong>Super Admin:</strong> admin@wordsanctuary.com</div>
                    <div><strong>Head of Installation:</strong> head@wordsanctuary.com</div>
                    <div><strong>Sub Central Head:</strong> subcentral@wordsanctuary.com</div>
                    <div><strong>HOD:</strong> hod@wordsanctuary.com</div>
                    <div><strong>Member:</strong> member@wordsanctuary.com</div>
                    <div className="text-gray-500 mt-2">OTP: Any value works for demo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 w-full lg:sticky lg:top-20 lg:h-[100vh] lg:max-h-[100vh] lg:overflow-hidden flex justify-center items-center px-4 sm:px-6 md:px-8 py-8 lg:py-0">
            <div className="w-full max-w-lg h-48 sm:h-64 md:h-80 lg:h-96 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/optimized/signup.webp"
                alt="Welcome back to Word Sanctuary Global"
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
