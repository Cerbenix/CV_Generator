import React, { forwardRef } from "react";
import { Email, Language, Phone, Room } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

interface CVSectionProps {
  contactDetails: ContactDetails;
  workExperiences: WorkExperience[];
  educations: Education[];
  customSections: CustomSection[];
  selectedColor: string;
  selectedFont: string;
}

const CvPage = forwardRef<HTMLDivElement, CVSectionProps>(
  (
    {
      contactDetails,
      workExperiences,
      educations,
      customSections,
      selectedColor,
      selectedFont,
    },
    ref
  ) => {
    return (
      <div
        className={`h-[calc(100vh-80px)] aspect-[1/1.41] mx-10 w-auto font-${selectedFont}`}
      >
        <div
          ref={ref}
          className="bg-white shadow-2xl pl-14 pr-10 py-6 w-full h-full"
        >
          <h2
            className="text-2xl font-bold text-center"
            style={{ color: selectedColor }}
          >
            {contactDetails.name}
          </h2>
          <p className="text-center text-sm text-gray-500 mb-1">
            {contactDetails.objective}
          </p>
          <div className="flex flex-row text-xs justify-between border-b-2 pb-1">
            <p>
              <Email fontSize="inherit" /> {contactDetails.email}
            </p>
            <p>
              <Phone fontSize="inherit" /> {contactDetails.phone}
            </p>
            <p>
              <Room fontSize="inherit" /> {contactDetails.location}
            </p>
            <p>
              <Language fontSize="inherit" /> {contactDetails.website}
            </p>
          </div>

          {workExperiences.some(
            (experience) =>
              experience.company || experience.jobTitle || experience.date
          ) && (
            <h3
              className="mt-2 font-bold text-lg"
              style={{ color: selectedColor }}
            >
              <WorkIcon fontSize="inherit" /> Work Experience
            </h3>
          )}
          {workExperiences.map((experience, index) => (
            <div key={index} className="mt-1 flex flex-col">
              <div className="flex flex-row justify-between">
                <p className="font-bold">{experience.company}</p>
                <p className="text-sm">{experience.date}</p>
              </div>
              <p className="text-sm">{experience.jobTitle}</p>
              {experience.description.split("\n").map((line, index) => (
                <p key={index} className="font-light text-sm">
                  {line}
                </p>
              ))}
            </div>
          ))}

          {educations.some(
            (education) =>
              education.school || education.degree || education.date
          ) && (
            <h3
              className="font-bold mt-2 text-lg"
              style={{ color: selectedColor }}
            >
              <SchoolIcon fontSize="inherit" /> Education
            </h3>
          )}
          {educations.map((education, index) => (
            <div key={index} className="mt-1 flex flex-col">
              <div className="flex flex-row justify-between align-middle">
                <p className="font-bold">{education.school}</p>
                <p className="text-sm">{education.date}</p>
              </div>
              <p className="text-sm">{education.degree}</p>
            </div>
          ))}

          <div className="flex flex-wrap gap-8 mt-2">
            {customSections.map(
              (section, index) =>
                section.title.trim() !== "" && (
                  <div key={index} className="flex-1">
                    <h3
                      className="mt-2 font-bold text-lg whitespace-nowrap"
                      style={{ color: selectedColor }}
                    >
                      <FingerprintIcon fontSize="inherit" /> {section.title}
                    </h3>
                    {section.bulletPoints.map((bulletPoint, bpIndex) => (
                      <div className="flex items-center" key={bpIndex}>
                        <p>
                          <span className="mr-2">•</span>
                          {bulletPoint}
                        </p>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default CvPage;
