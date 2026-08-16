import React from 'react';

export default function BuilderHeader() {
  return (
    <div className="w-full select-none ml-[120px] text-[#333333]">
      {/* Վերնագիր */}
      <h1 className="text-[34px] font-medium mb-8">
        Կառուցապատողներ
      </h1>

      {/* Տեքստային հատված */}
      <div className="space-y-6 text-base md:text-[17px] leading-relaxed">
        <p>
          Ձե՛ռք բերեք Ձեր նորաոճ և հարմարավետ բնակարանը <span className="text-[#5E1EEB]">Evocabank</span>-ի հետ:
        </p>
        
        <p>
          Ծանոթացե՛ք մեզ հետ համագործակցող կառուցապատող կազմակերպությունների ցանկին և անհրաժեշտ տեղեկատվությանը ստորև.
        </p>
      </div>
    </div>
  );
}