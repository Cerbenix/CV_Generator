import { TextField, Button, Grid } from "@mui/material";

interface EducationProps {
  onChange: (educations: Education[]) => void;
  educations: Education[];
}

const Education = ({ onChange, educations }: EducationProps) => {
  const handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [name]: value,
    };
    onChange(updatedEducations);
  };

  const handleAddEducation = () => {
    onChange([
      ...educations,
      {
        school: "",
        degree: "",
        date: "",
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    onChange(educations.filter((_, i) => i !== index));
  };

  return (
    <>
      {educations.map((education, index) => (
        <Grid
          container
          spacing={2}
          className="border-solid border-2 border-gray-200 pb-4 pr-4 bg-slate-100 rounded-md mb-10"
          key={index}
        >
          <Grid item xs={12}>
            <p className="font-bold">Education</p>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="school"
              label="School"
              value={education.school}
              onChange={(e) => handleEducationChange(e, index)}
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="degree"
              label="Degree"
              value={education.degree}
              onChange={(e) => handleEducationChange(e, index)}
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="date"
              label="Date"
              placeholder="Sep 2022 - July 2023"
              value={education.date}
              onChange={(e) => handleEducationChange(e, index)}
              fullWidth
              className="bg-white"
            />
          </Grid>
          <Grid item xs={6}>
            <Button color="primary" onClick={handleAddEducation}>
              Add Education
            </Button>
          </Grid>
          {educations.length > 1 && (
            <Grid item xs={6} className="flex justify-end">
              <Button
                color="error"
                onClick={() => handleRemoveEducation(index)}
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

export default Education;
