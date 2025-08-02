// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Noida Thunders",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//           <Navbar/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Noida Thunders | UPPVL Volleyball Team | Official Website",
  description:
    "Official website of Noida Thunders – UPPVL's powerhouse volleyball team. Get match fixtures, player stats, news, tickets, videos & Noida’s volleyball updates.",
  keywords: [
    "Noida Thunders",
    "Noida volleyball team",
    "UPPVL",
    "Uttar Pradesh Pro Volleyball League",
    "volleyball teams in India",
    "Indian volleyball league",
    "UPPVL 2025",
    "Noida sports",
    "volleyball match schedule",
    "Noida Thunders players",
    "volleyball news India",
    "UPPVL Noida team",
    "professional volleyball India",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
