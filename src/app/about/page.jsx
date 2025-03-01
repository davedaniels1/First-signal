"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Whoweare from "@/components/whoweare";
import { useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Whoweare />
      <Footer />
    </>
  );
}
