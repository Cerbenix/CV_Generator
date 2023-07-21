import { TextField, Button, Grid } from "@mui/material";

interface WorkExperienceProps {
  onChange: (workExperiences: WorkExperience[]) => void;
  workExperiences: WorkExperience[];
}

const WorkExperience = ({ onChange, workExperiences }: WorkExperienceProps) => {
    const handleWorkExperienceChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
      ) => {
        const { name, value } = e.target;
        const updatedExperiences = [...workExperiences];
        updatedExperiences[index] = {
          ...updatedExperiences[index],
          [name]: value,
        };
        onChange(updatedExperiences);
      };

  const handleAddWorkExperience = () => {
    onChange([
      ...workExperiences,
      {
        company: "",
        jobTitle: "",
        date: "",
        description: "",
      },
    ]);
  };

  const handleRemoveWorkExperience = (index: number) => {
    onChange(workExperiences.filter((_, i) => i !== index));
  };

  return (
    <>
      {workExperiences.map((experience, index) => (
        <Grid
          container
          spacing={2}
          className="border-solid border-2 border-gray-200 pb-4 pr-4 bg-slate-100 rounded-md mb-10"
          key={index}
        >
          <Grid item xs={12}>
          <p className="font-bold">Work Experience</p>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="company"
              label="Company"
              value={experience.company}
              onChange={(e) => handleWorkExperienceChange(e, index)}
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="jobTitle"
              label="Job Title"
              value={experience.jobTitle}
              onChange={(e) => handleWorkExperienceChange(e, index)}
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="date"
              label="Date"
              placeholder="Sep 2022 - July 2023"
              value={experience.date}
              onChange={(e) => handleWorkExperienceChange(e, index)}
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              value={experience.description}
              onChange={(e) => handleWorkExperienceChange(e, index)}
              multiline
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={6}>
            <Button color="primary" onClick={handleAddWorkExperience}>
              Add Work Experience
            </Button>
          </Grid>
          {workExperiences.length > 1 && (
            <Grid item xs={6} className="flex justify-end">
              <Button
                color="error"
                onClick={() => handleRemoveWorkExperience(index)}
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

export default WorkExperience;
