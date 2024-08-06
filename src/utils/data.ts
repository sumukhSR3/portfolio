import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  { name: "HTML", imgURL: "/icons_html.svg" },
  { name: "CSS", imgURL: "/icons_css.svg" },
  { name: "Javascript", imgURL: "/icons_js.svg" },
  { name: "Python", imgURL: "/icons_python.svg" },
  { name: "SQL", imgURL: "/icons_sql.svg" },
  { name: "Typescript", imgURL: "/icons-typescript.svg" },
  { name: "React", imgURL: "/logos_react.svg" },
  { name: "PyTorch", imgURL: "/icons_pytorch.svg" },
  { name: "R", imgURL: "/icons_R.png" },
  { name: "Tableau", imgURL: "/icons_Tableau.png" },
  { name: "PowerBi", imgURL: "/icons_PowerBI.svg" },
  { name: "TensorFlow", imgURL: "/icons_tensorflow.png" },
  { name: "Docker", imgURL: "/icons_docker.svg" },
  { name: "Aws", imgURL: "/icons_aws.png" },
  { name: "Azure", imgURL: "/icons-azure.png" },
  { name: "Apache Kafka", imgURL: "/images.png" },
  { name: "Apache Spark", imgURL: "/icons_spark.svg" },
  { name: "Apache Airflow", imgURL: "/icons_airflow.svg" },
  { name: "Git", imgURL: "/logos_git.svg" },
]

export const projectData: Project[] = [
  {
    name: "Music-streaming-ETL",
    description:
      "This project focuses on constructing a data warehousing solution for a hypothetical music streaming service. Using Apache Spark with Python (PySpark), the project aims to optimize the speed and efficiency of Extract, Transform, Load (ETL) processes while leveraging cloud-based infrastructure for cost-effective scaling.",
    projectURL: "",
    githubURL: `${githubProfile}/Music-streaming-ETL`,
    imgURL: "/music-streaming.png",
  },
  {
    name: "Divvy-Bikeshare-Data-warehousing",
    description:
      "This is an end to end data engineering project, This project uses Chicago's Divvy bikeshare dataset, Divvy is the bicycle sharing system in the Chicago metropolitan area, currently serving the cities of Chicago and Evanston. The system is owned by the Chicago Department of Transportation and has been operated by Lyft since 2019.",
    projectURL: "",
    githubURL: `${githubProfile}/Divvy-Bikeshare-Data-warehousing`,
    imgURL: "/Divvy-bikes.jpg",
  },
  {
    name: "Facial Recognition and Emotion Detection",
    description:
      "This project develops a facial emotion recognition system that detects human emotions from images, enhancing computer-human interactions. It's particularly useful in interactive gaming, customer service, and security by enabling computers to interpret non-verbal communication.",
    projectURL: "",
    githubURL: `${githubProfile}/facenemotion`,
    imgURL: "emoion.png",
  },
  {
    name: "Investing in Health, Investing in Life",
    description:
      "This project examines global life expectancy trends from 2000 to 2015, analyzing data from the WHO and UN to identify how factors like GDP, vaccination rates, and education affect life expectancy in 193 countries. Statistical analyses reveal key predictors and emphasize the importance of integrated public health strategies for enhancing life expectancy globally, providing critical insights for policymakers.",
    projectURL: "",
    githubURL: `${githubProfile}/Life-Expectancy-and-Socioeconomic-Health-Investments-`,
    imgURL: "life-expectancy.jpeg",
  },
]

export const experience = (
  (new Date().getTime() - new Date("2020-12-04").getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toLocaleString("en", {
  maximumFractionDigits: 2,

  style: "unit",
  unit: "year",
  unitDisplay: "long",
})

export const aboutData: About = {

  education: [
    {
    title: "Master of science in Business Analytics ",
    link:"https://www.newhaven.edu/index.php",
    subtitle: "From University of New Haven",
    },
    {
    title: "Bachelors in Electronics and Computer Engineering",
    link:"https://snist.sreenidhi.edu.in/",
    subtitle: "From Sreenidhi Institute of Technology",
    }
  ]}
