"use client";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import ContactDetails from "./components/ContactDetails";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import CustomSection from "./components/CustomSection";
import CvPage from "./components/CvPage";
import ConfigurationSection from "./components/ConfigSection";

const CVGenerator = () => {
  const cvSectionRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#00bcd4");
  const [selectedFont, setSelectedFont] = useState<string>("font-serif");
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    name: "",
    objective: "",
    email: "",
    website: "",
    phone: "",
    location: "",
  });

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    {
      company: "",
      jobTitle: "",
      date: "",
      description: "",
    },
  ]);

  const [educations, setEducations] = useState<Education[]>([
    {
      school: "",
      degree: "",
      date: "",
    },
  ]);

  const [customSections, setCustomSections] = useState<CustomSection[]>([
    {
      title: "",
      bulletPoints: [],
    },
  ]);

  const handleDownloadPDF = async () => {
    if (cvSectionRef.current) {
      const html2pdf = (await import("html2pdf.js")).default;

      const opt = {
        filename: "my_cv.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1.1 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf().set(opt).from(cvSectionRef.current).save();
    }
  };

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
  };

  const handleFontChange = (newFont: string) => {
    setSelectedFont(newFont);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-row items-center justify-between py-5 px-10 bg-black">
        <h1 className="text-white text-2xl font-bold">CV Generator</h1>
        <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
          Download CV
        </Button>
      </div>

      <div className="flex flex-row justify-center">
        <div className="w-1/3 overflow-y-scroll h-[calc(100vh-80px)] p-10">
          <ContactDetails
            onChange={setContactDetails}
            contactDetails={contactDetails}
          />

          <WorkExperience
            onChange={setWorkExperiences}
            workExperiences={workExperiences}
          />

          <Education onChange={setEducations} educations={educations} />

          <CustomSection
            onChange={setCustomSections}
            customSections={customSections}
          />

          <ConfigurationSection
            selectedColor={selectedColor}
            onChangeColor={handleColorChange}
            onChangeFont={handleFontChange}
            selectedFont={selectedFont}
          />
        </div>

        <CvPage
          ref={cvSectionRef}
          contactDetails={contactDetails}
          workExperiences={workExperiences}
          educations={educations}
          customSections={customSections}
          selectedColor={selectedColor}
          selectedFont={selectedFont}
        />
      </div>
    </div>
  );
};

export default CVGenerator;
