"use client";

import Wave from "react-wavify";

const Footer = () => {
  return (
    <section className="mt-20">
      <Wave
        mask="url(#mask)"
        fill="#ee4668"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 27,
          amplitude: 17,
          speed: 1.15,
          points: 4,
        }}
      />
    </section>
  );
};

export default Footer;
