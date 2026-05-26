export interface Internship {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  location_names: string[];
  duration: string;
  stipend: {
    salary: string;
  };
  employment_type: string;
  work_from_home: boolean;
  posted_by_label: string;
  posted_on: string;
  start_date: string;
  application_status_message: {
    message: string;
  };
}