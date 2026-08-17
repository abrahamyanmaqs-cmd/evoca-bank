import React, { useState } from 'react';

export default function FeedbackForm() {
  const [personType, setPersonType] = useState('physical'); // 'physical' կամ 'legal'
  const [feedbackType, setFeedbackType] = useState('thanks'); // 'thanks' կամ 'suggestion'
  
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
    file: null,
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { personType, feedbackType, ...formData });
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 font-sans">
      <div className="max-w-[850px] mx-auto bg-white rounded-3xl border border-[#E5E2EC] shadow-sm p-6 md:p-12">
        
        {/* Ներածական տեքստ */}
        <div className="mb-8 text-[#555555] text-[16px] md:text-[17px] leading-relaxed">
          <p className="mb-4">
            Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները, մտահոգությունները կամ ցանկացած խնդրի հետ կապված խնդիրները, որպեսզի կարողանանք բարելավել մեր ծառայությունները։
          </p>
          <p className="text-[15px] text-[#777777]">
            Հաղորդագրություն ուղարկելու համար լրացրեք ստորև բերված դաշտերը՝
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Դուք հանդիսանում եք */}
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-[#222222]">
              Դուք հանդիսանում եք
            </label>
            <div className="flex items-center gap-6 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="personType" 
                  checked={personType === 'physical'} 
                  onChange={() => setPersonType('physical')}
                  className="w-4 h-4 text-[#7C3AED] focus:ring-[#7C3AED]"
                />
                <span className="text-[#333333] text-[16px]">Ֆիզիկական անձ</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="personType" 
                  checked={personType === 'legal'} 
                  onChange={() => setPersonType('legal')}
                  className="w-4 h-4 text-[#7C3AED] focus:ring-[#7C3AED]"
                />
                <span className="text-[#333333] text-[16px]">Իրավաբանական անձ</span>
              </label>
            </div>
          </div>

          {/* Հետադարձ կապի տեսակը */}
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-[#222222]">
              Հետադարձ կապի տեսակը <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="feedbackType" 
                  checked={feedbackType === 'thanks'} 
                  onChange={() => setFeedbackType('thanks')}
                  className="w-4 h-4 text-[#7C3AED] focus:ring-[#7C3AED]"
                />
                <span className="text-[#333333] text-[16px]">Հայտնել շնորհակալություն</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="feedbackType" 
                  checked={feedbackType === 'suggestion'} 
                  onChange={() => setFeedbackType('suggestion')}
                  className="w-4 h-4 text-[#7C3AED] focus:ring-[#7C3AED]"
                />
                <span className="text-[#333333] text-[16px]">Ներկայացնել առաջարկ</span>
              </label>
            </div>
          </div>

          {/* Անուն */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#222222]">
              Անուն <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E5E2EC] focus:outline-none focus:border-[#7C3AED] text-[16px] transition-colors"
            />
          </div>

          {/* Ազգանուն */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#222222]">
              Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="surname" 
              required
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E5E2EC] focus:outline-none focus:border-[#7C3AED] text-[16px] transition-colors"
            />
          </div>

          {/* Հեռ.` */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#222222]">
              Հեռ.` <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#E5E2EC] rounded-xl overflow-hidden focus-within:border-[#7C3AED] transition-colors">
              <div className="flex items-center gap-2 bg-[#FAFAFA] px-4 py-3 border-r border-[#E5E2EC]">
                <span className="text-xl">🇦🇲</span>
                <span className="text-[15px] font-medium text-[#333]"> +374</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <input 
                type="tel" 
                name="phone" 
                required
                placeholder="XX XXXXXX"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 focus:outline-none text-[16px]"
              />
            </div>
          </div>

          {/* Էլ. փոստ */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#222222]">
              Էլ. փոստ <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E5E2EC] focus:outline-none focus:border-[#7C3AED] text-[16px] transition-colors"
            />
          </div>

          {/* Հաղորդագրություն */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#222222]">
              Հաղորդագրություն <span className="text-red-500">*</span>
            </label>
            <textarea 
              name="message" 
              rows="4" 
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E5E2EC] focus:outline-none focus:border-[#7C3AED] text-[16px] transition-colors resize-y"
            ></textarea>
          </div>

          {/* Կցել փաստաթուղթ */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#222222]">
              Կցել փաստաթուղթ
            </label>
            <label className="w-full border border-dashed border-[#D1CBDB] rounded-xl p-4 flex items-center justify-between bg-[#FAFAFA] cursor-pointer hover:border-[#7C3AED] transition-colors">
              <span className="text-[#777777] text-[15px]">
                {formData.file ? formData.file.name : 'Կցել ֆայլը'}
              </span>
              <div className="w-9 h-9 rounded-full bg-white border border-[#E5E2EC] flex items-center justify-center text-[#555]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              </div>
              <input type="file" name="file" onChange={handleChange} className="hidden" />
            </label>
          </div>

          {/* Ստուգման ծածկագիր (Captcha) */}
          <div className="flex flex-col gap-2 max-w-[280px]">
            <label className="text-[15px] font-bold text-[#222222]">
              Ստուգման ծածկագիր <span className="text-red-500">*</span>
            </label>
            
            <div className="border border-[#E5E2EC] rounded-xl p-3 bg-[#FAFAFA] flex flex-col gap-3">
              <div className="flex items-center justify-between bg-white border border-[#E5E2EC] rounded-lg px-3 py-2">
                <input 
                  type="text" 
                  name="captcha" 
                  required
                  placeholder="Մուտքագրեք ծածկագիրը"
                  value={formData.captcha}
                  onChange={handleChange}
                  className="w-full focus:outline-none text-[14px]"
                />
                <button type="button" className="text-gray-500 hover:text-[#7C3AED] ml-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
              </div>

              {/* Կապտչայի նկար */}
              <div className="bg-white border border-[#E5E2EC] rounded-lg p-2 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://accounts.zoho.com/static/showcaptcha?digest=1_C_e5d613e97de0d3b871123afefa7b5aae97b235940c8cf3a3e344610e612cae50bdb81b7f5ada998de0b52631ca4e6f23e09c66480df238bf353df313b2786c3d" 
                  alt="Captcha" 
                  className="h-10 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Ուղարկել կոճակ */}
          <div className="mt-4">
            <button 
              type="submit"
              className="bg-[#6B21A8] hover:bg-[#581c87] text-white font-medium text-[16px] px-10 py-3.5 rounded-full shadow-md transition-all"
            >
              Ուղարկել
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}