"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Products from "@/components/products";
import { useState } from "react";

export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Products />
      <Footer />
    </>
  );
}
