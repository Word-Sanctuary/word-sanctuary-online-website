"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SignupNavbar from "@/components/SignupNavbar";
import { Button } from "@/components/ui";
import Image from "next/image";

// Christian topics for the life class dropdown
const lifeClassTopics = [
  "Biblical Foundations",
  "Prayer and Worship",
  "Christian Character",
  "Spiritual Gifts",
  "Leadership Development",
  "Marriage and Family",
  "Financial Stewardship",
  "Evangelism and Missions",
  "Biblical Counseling",
  "Church History",
  "Discipleship",
  "Christian Ethics",
  "Prophetic Ministry",
  "Youth Ministry",
  "Women's Ministry",
  "Men's Ministry"
];

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    homeAddress: "",
    lifeClassTeacher: "",
    lifeClassTopics: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTopicChange = (topic: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      lifeClassTopics: checked 
        ? [...prev.lifeClassTopics, topic]
        : prev.lifeClassTopics.filter(t => t !== topic)
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Account created successfully", formData);
      
      // Redirect to dashboard
      router.push("/dashboard");
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
      <div className="w-full pt-24 min-h-screen flex justify-center items-start">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8">
          
          {/* Form Section */}
          <div className="flex-1 w-full flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 py-8">
            <div className="w-full max-w-md flex flex-col justify-start items-center">
              <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-6">
                
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <h1 className="w-full text-left text-gray-900 text-xl sm:text-2xl font-normal font-anton leading-tight">
                    Join Word Sanctuary
                  </h1>
                  <p className="w-full text-left text-slate-600 text-sm font-normal font-lato leading-normal">
                    Complete your registration to join our community
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="w-full flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-2 flex-1">
                      {[1, 2].map((step) => (
                        <div key={step} className="flex items-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            currentStep >= step 
                              ? 'bg-sky-900 text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {step}
                          </div>
                          {step < totalSteps && (
                            <div className={`w-8 h-0.5 mx-1 ${
                              currentStep > step ? 'bg-sky-900' : 'bg-gray-200'
                            }`} />
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      Step {currentStep} of {totalSteps}
                    </span>
                  </div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start items-center gap-4">
                  
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="w-full flex flex-col justify-start items-start gap-3">
                      <h3 className="text-base font-semibold text-gray-900 font-lato">Personal Information</h3>
                      
                      {/* Full Name */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Gender */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Gender*
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          required
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      
                      {/* Date of Birth */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Date of Birth*
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Phone Number */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your phone number"
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Home Address */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Home Address*
                        </label>
                        <textarea
                          name="homeAddress"
                          value={formData.homeAddress}
                          onChange={handleInputChange}
                          required
                          rows={2}
                          placeholder="Enter your home address"
                          className="w-full px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200 resize-none"
                        />
                      </div>
                      
                      {/* Next Button */}
                      <div className="w-full pt-3">
                        <Button
                          type="button"
                          onClick={handleNext}
                          variant="primary"
                          size="lg"
                          fullWidth
                          className="h-10 bg-sky-900 hover:bg-sky-800 text-sm"
                          disabled={!formData.fullName || !formData.gender || !formData.dateOfBirth || !formData.phoneNumber || !formData.homeAddress}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Life Class Information */}
                  {currentStep === 2 && (
                    <div className="w-full flex flex-col justify-start items-start gap-3">
                      <h3 className="text-base font-semibold text-gray-900 font-lato">Life Class Information</h3>
                      
                      {/* Life Class Teacher */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Life Class Teacher*
                        </label>
                        <input
                          type="text"
                          name="lifeClassTeacher"
                          value={formData.lifeClassTeacher}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your life class teacher's name"
                          className="w-full h-10 px-3 py-2 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Life Class Topics */}
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Life Class Topics* (Select multiple)
                        </label>
                        <div className="w-full max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-2 bg-white">
                          <div className="grid grid-cols-1 gap-1">
                            {lifeClassTopics.map((topic) => (
                              <label key={topic} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded text-sm">
                                <input
                                  type="checkbox"
                                  checked={formData.lifeClassTopics.includes(topic)}
                                  onChange={(e) => handleTopicChange(topic, e.target.checked)}
                                  className="w-3.5 h-3.5 text-sky-900 bg-white border-gray-300 rounded focus:ring-sky-500 focus:ring-1"
                                />
                                <span className="text-sm text-gray-700 font-lato">{topic}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 text-xs font-normal font-lato leading-tight">
                          Selected: {formData.lifeClassTopics.length} topic{formData.lifeClassTopics.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="w-full flex gap-2 pt-3">
                        <Button
                          type="button"
                          onClick={handlePrev}
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
                          disabled={isSubmitting || !formData.lifeClassTeacher || formData.lifeClassTopics.length === 0}
                          isLoading={isSubmitting}
                          className="flex-1 h-10 bg-sky-900 hover:bg-sky-800 text-sm"
                        >
                          {isSubmitting ? "Creating Account..." : "Complete Registration"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 w-full lg:sticky lg:top-20 lg:h-[100vh] lg:max-h-[100vh] lg:overflow-hidden flex justify-center items-center px-4 sm:px-6 md:px-8 py-8 lg:py-0">
            <div className="w-full max-w-lg h-48 sm:h-64 md:h-80 lg:h-96 relative rounded-2xl overflow-hidden shadow-lg">
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
