import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

interface CustomSectionProps {
  onChange: (customSections: CustomSection[]) => void;
  customSections: CustomSection[];
}

const CustomSection = ({ onChange, customSections }: CustomSectionProps) => {
  const handleCustomSectionBulletPointsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = e.target;
    const updatedSections = customSections.map((section, i) =>
      i === index ? { ...section, bulletPoints: value.split("\n") } : section
    );
    onChange(updatedSections);
  };

  const handleCustomSectionTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = e.target;
    const updatedSections = customSections.map((section, i) =>
      i === index ? { ...section, title: value } : section
    );
    onChange(updatedSections);
  };

  const handleAddCustomSection = () => {
    onChange([
      ...customSections,
      { title: "", bulletPoints: [] },
    ]);
  };

  const handleRemoveCustomSection = (index: number) => {
    onChange(customSections.filter((_, i) => i !== index));
  };

  return (
    <>
      {customSections.map((section, index) => (
            <Grid
              container
              spacing={2}
              className="border-solid border-2 border-gray-200 pb-4 pr-4 bg-slate-100 rounded-md mb-10"
              key={index}
            >
              <Grid item xs={12}>
                <TextField
                  name="customSectionTitle"
                  label="Custom Section Title"
                  value={section.title}
                  onChange={(e) => handleCustomSectionTitleChange(e, index)}
                  fullWidth
                  className="bg-white"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="customSectionBulletPoints"
                  label="Bullet Points"
                  value={section.bulletPoints.join("\n")}
                  onChange={(e) =>
                    handleCustomSectionBulletPointsChange(e, index)
                  }
                  multiline
                  fullWidth
                  className="bg-white"
                />
              </Grid>
              <Grid item xs={6}>
                <Button color="primary" onClick={handleAddCustomSection}>
                  Add Custom Section
                </Button>
              </Grid>
              {customSections.length > 1 && (
                <Grid item xs={6} className="flex justify-end">
                  <Button
                    color="error"
                    onClick={() => handleRemoveCustomSection(index)}
                  >
                    Delete
                  </Button>
                </Grid>
              )}
            </Grid>
          ))}
    </>
  );
};

export default CustomSection;