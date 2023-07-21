interface ContactDetails {
    name: string;
    objective: string;
    email: string;
    website: string;
    phone: string;
    location: string;
  }
  
  interface WorkExperience {
    company: string;
    jobTitle: string;
    date: string;
    description: string;
  }
  
  interface Education {
    school: string;
    degree: string;
    date: string;
  }
  
  interface CustomSection {
    title: string;
    bulletPoints: string[];
  }