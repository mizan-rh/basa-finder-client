import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <div className=" min-h-screen">{children}</div>
      {/* footer */}
    </div>
  );
};

export default layout;
