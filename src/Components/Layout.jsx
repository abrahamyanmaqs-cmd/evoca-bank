import React from "react";
import { Outlet } from "react-router-dom";
import ParentHeader from "./ParentHeader";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Գլխամասը, որը միշտ կմնա վերևում */}
      <ParentHeader />
      
      {/* Մեջտեղի հատվածը, որտեղ էջերը կփոխվեն (օրինակ՝ քո սպիտակ էջը) */}
      <main className="flex-grow bg-white">
        <Outlet />
      </main>

      {/* Ստորոտը, որը միշտ կմնա ներքևում */}
      <Footer />
    </div>
  );
}