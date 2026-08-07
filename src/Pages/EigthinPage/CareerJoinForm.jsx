import React, { useState } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը
import { collection, addDoc } from "firebase/firestore";

const CareerJoinForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    facebook: "",
    linkedin: "",
    coverLetter: "",
    captchaInput: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Կապչայի նկարի հղումը, որը նշել ես
  const captchaImageUrl = "https://accounts.zoho.com/static/showcaptcha?digest=1_C_c9b51de51fe913cf18ee353e7e6fabd9b774f25b3c7aa6b552225e1fd3972fc644458f4cbc99b42e1a96554ad44be604d987682a0b11c05902cc7a023579c55e";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "careerApplications"), {
        ...formData,
        createdAt: new Date(),
      });
      setSubmitted(true);
      alert("Դիմումը հաջողությամբ ուղարկվեց և գրանցվեց Firebase-ում!");
    } catch (error) {
      console.error("Սխալ Firebase ուղարկելիս:", error);
      alert("Տեղի ունեցավ սխալ, փորձեք կրկին:");
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-[800px] mx-auto bg-white rounded-[32px] p-6 md:p-12 shadow-xl border border-gray-100">
        
        {/* Վերնագրի հատված */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[38px] font-bold text-[#1C1C1E] mb-3 tracking-tight">
            Դառնալ թիմի անդամ
          </h2>
          <p className="text-[#4A4A4E] text-[15px] md:text-[16px] leading-relaxed">
            Եթե ցանկանում es միանալ <span className="text-[#5E1EEB] font-semibold">EvocaTEAM</span>-ին, կարող es ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
          </p>
        </div>

        {/* Ֆորմա */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Անուն */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Անուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none transition-colors text-[16px]"
            />
          </div>

          {/* Ազգանուն */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none transition-colors text-[16px]"
            />
          </div>

          {/* Հեռախոսահամար */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Հեռախոսահամար <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#5E1EEB] transition-colors h-[52px]">
              <div className="flex items-center gap-2 px-4 bg-gray-50 border-r border-gray-200 h-full text-gray-700 font-medium">
                <span>🇦🇲</span>
                <span>+374</span>
              </div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="XX XXXXXX"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 focus:outline-none text-[16px]"
              />
            </div>
          </div>

          {/* Էլ. հասցե */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Էլ. հասցե
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none transition-colors text-[16px]"
            />
          </div>

          {/* Facebook */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Facebook սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none transition-colors text-[16px]"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              LinkedIn սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none transition-colors text-[16px]"
            />
          </div>

          {/* Ուղեկցող նամակ */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Ուղեկցող նամակ
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none transition-colors text-[16px] resize-none"
            ></textarea>
          </div>

          {/* Վերբեռնեք Ձեր ռեզյումեն */}
          <div>
            <label className="block text-[#1C1C1E] font-medium mb-2 text-[15px]">
              Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-[#5E1EEB] transition-colors cursor-pointer bg-gray-50/50">
              <div className="flex flex-col items-center justify-center gap-2">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="text-gray-600 font-medium text-[15px]">Կցել ֆայլը / ֆայլերը</span>
              </div>
              <input type="file" required className="hidden" />
            </div>
          </div>

          {/* Ստուգման ծածկագիր (Կապչա) */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <label className="block text-[#1C1C1E] font-medium mb-3 text-[15px]">
              Ստուգման ծածկագիր <span className="text-red-500">*</span>
            </label>
            <div className="max-w-[320px] space-y-4">
              {/* Կապչայի նկարը՝ քո տված URL-ով */}
              <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <img src={captchaImageUrl} alt="Captcha" className="h-10 object-contain" />
                <button type="button" className="text-gray-500 hover:text-[#5E1EEB] transition-colors">
                  🔄
                </button>
              </div>
              <input
                type="text"
                name="captchaInput"
                required
                placeholder="Մուտքագրեք ծածկագիրը"
                value={formData.captchaInput}
                onChange={handleChange}
                className="w-full h-[48px] px-4 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none bg-white text-[16px]"
              />
            </div>
          </div>

          {/* Ուղարկելու կոճակ */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-12 h-[56px] bg-[#5E1EEB] hover:bg-[#5217ce] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-purple-200 cursor-pointer text-[16px]"
            >
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default CareerJoinForm;