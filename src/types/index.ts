export type Major = {
  Rank: number;
  Major_code: number;
  Major: string;
  Total: number | string;
  Men: number | string;
  Women: number | string;
  Major_category: string;
  ShareWomen: number | string;
  Sample_size: number;
  Employed: number;
  Full_time: number;
  Part_time: number;
  Full_time_year_round: number;
  Unemployed: number;
  Unemployment_rate: number;
  Median: number;
  P25th: number;
  P75th: number;
  College_jobs: number;
  Non_college_jobs: number;
  Low_wage_jobs: number;
};

export interface Category {
  name: string;
}
