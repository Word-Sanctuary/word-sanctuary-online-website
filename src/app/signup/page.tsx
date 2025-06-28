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
      <div className="w-full pt-20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-start items-center lg:items-stretch gap-8 lg:gap-12 h-full">
          
          {/* Form Section */}
          <div className="flex-1 w-full flex flex-col justify-center items-center min-h-0">
            <div className="w-full max-w-lg px-4 sm:px-8 flex flex-col justify-start items-center">
              <div className="w-full flex flex-col justify-start items-center gap-6 sm:gap-8">
                
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <h1 className="w-full text-left text-gray-900 text-2xl sm:text-3xl font-normal font-anton leading-tight">
                    Join Word Sanctuary
                  </h1>
                  <p className="w-full text-left text-slate-600 text-sm sm:text-base font-normal font-lato leading-normal">
                    Complete your registration to join our community
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="w-full flex items-center gap-2 mt-4">
                    <div className="flex items-center gap-2 flex-1">
                      {[1, 2].map((step) => (
                        <div key={step} className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            currentStep >= step 
                              ? 'bg-sky-900 text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            {step}
                          </div>
                          {step < totalSteps && (
                            <div className={`w-12 h-1 mx-2 ${
                              currentStep > step ? 'bg-sky-900' : 'bg-gray-200'
                            }`} />
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      Step {currentStep} of {totalSteps}
                    </span>
                  </div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start items-center gap-6">
                  
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-5">
                      <h3 className="text-lg font-semibold text-gray-900 font-lato">Personal Information</h3>
                      
                      {/* Full Name */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
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
                          className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Gender */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Gender*
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          required
                          className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      
                      {/* Date of Birth */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Date of Birth*
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Phone Number */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
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
                          className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Home Address */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Home Address*
                        </label>
                        <textarea
                          name="homeAddress"
                          value={formData.homeAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          placeholder="Enter your home address"
                          className="w-full px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200 resize-none"
                        />
                      </div>
                      
                      {/* Next Button */}
                      <div className="w-full pt-4">
                        <Button
                          type="button"
                          onClick={handleNext}
                          variant="primary"
                          size="lg"
                          fullWidth
                          className="h-12 bg-sky-900 hover:bg-sky-800 text-base"
                          disabled={!formData.fullName || !formData.gender || !formData.dateOfBirth || !formData.phoneNumber || !formData.homeAddress}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Life Class Information */}
                  {currentStep === 2 && (
                    <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-5">
                      <h3 className="text-lg font-semibold text-gray-900 font-lato">Life Class Information</h3>
                      
                      {/* Life Class Teacher */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
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
                          className="w-full h-11 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm font-normal font-lato leading-normal placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200"
                        />
                      </div>
                      
                      {/* Life Class Topics */}
                      <div className="w-full flex flex-col justify-start items-start gap-1.5">
                        <label className="text-slate-700 text-sm font-medium font-lato leading-tight">
                          Life Class Topics* (Select multiple)
                        </label>
                        <div className="w-full max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3 bg-white">
                          <div className="grid grid-cols-1 gap-2">
                            {lifeClassTopics.map((topic) => (
                              <label key={topic} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input
                                  type="checkbox"
                                  checked={formData.lifeClassTopics.includes(topic)}
                                  onChange={(e) => handleTopicChange(topic, e.target.checked)}
                                  className="w-4 h-4 text-sky-900 bg-white border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
                                />
                                <span className="text-sm text-gray-700 font-lato">{topic}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm font-normal font-lato leading-tight">
                          Selected: {formData.lifeClassTopics.length} topic{formData.lifeClassTopics.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="w-full flex gap-3 pt-4">
                        <Button
                          type="button"
                          onClick={handlePrev}
                          variant="secondary"
                          size="lg"
                          className="flex-1 h-12 text-base"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting || !formData.lifeClassTeacher || formData.lifeClassTopics.length === 0}
                          isLoading={isSubmitting}
                          className="flex-1 h-12 bg-sky-900 hover:bg-sky-800 text-base"
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
