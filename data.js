// ===== Portfolio Data =====

// About
const about = {
  text: "Data Scientist with 1.5 years of experience specializing in Computer Vision and RAG systems. Built ML models achieving 90%+ accuracy and automated document processing pipelines. Passionate about creating production-ready AI solutions that drive real business impact."
};


// Skills / Tech Stack
const skills = [
  { category: "Programming", items: ["Python", "SQL", "HTML/CSS", "JavaScript"] },
  { category: "Data Science & ML", items: ["Scikit-learn", "Pandas", "NumPy", "Statistics", "EDA", "ML Algorithms (Regression, Classification, Clustering)"] },
  { category: "AI & Deep Learning", items: ["Computer Vision", "NLP", "YOLO", "PyTorch"] },
  { category: "Advanced AI", items: ["LangChain", "RAG Systems", "Hugging Face", "Vector Databases", "OpenAI API"] },
  { category: "Data Visualization", items: ["Power BI", "Matplotlib", "Seaborn", "Plotly"] },
  { category: "Database & Analytics", items: ["PostgreSQL", "MySQL", "Data Cleaning", "ETL Pipelines", "Excel"] },
  { category: "Web Development", items: ["Streamlit", "Gradio", "Flask", "FastAPI", "Web Scraping", "APIs"] },
  { category: "Tools & Deployment", items: ["Git", "GitHub", "Jupyter", "VS Code", "Render", "Docker", "Linux"] }
];


// Projects 
const projects = [
  {
    title: "SmartPDF AI RAG System",
    desc: "AI-powered document Q&A system using RAG architecture with LangChain and vector embeddings.",
    tags: ["LangChain", "RAG", "AI", "PDF", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/SmartPDF-AI-RAG-Based-Document-Q-A-System",
    demo: "https://smartpdf-ai-rag-based-document-q-a-system-sankaran-s.streamlit.app/"
  },
  {
    title: "Brand Logo Detection System",
    desc: "Custom-trained AI model for detecting brand logos and analyzing their screen positions.",
    tags: ["Computer Vision", "AI", "Object Detection", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/Brand-Logo-Detection-and-Position-Analysis-System",
    demo: "https://brand-logo-detection-and-position-analysis-system-b4fugsdbrjfc.streamlit.app/"
  },
  {
    title: "Object Detection Recognition",
    desc: "Real-time object detection web app using YOLO and deep learning models.",
    tags: ["YOLO", "Deep Learning", "Computer Vision", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/Object-Detection-Recognition-System",
    demo: "https://object-detection-recognition-system-gvtatwq7wyqx7ws9xohbwq.streamlit.app/"
  },
  {
    title: "Movie Recommendation Engine",
    desc: "NLP-powered recommendation system using TF-IDF, cosine similarity and OMDB API.",
    tags: ["NLP", "ML", "TF-IDF", "API", "Streamlit", "Render"],
    repo: "https://github.com/sankaran-s2001/Movie-Recommendation-System",
    demo: "https://movie-recommendation-system-usbi.onrender.com/"
  },
  {
    title: "Book Recommendation System",
    desc: "Collaborative filtering algorithm for personalized book suggestions based on user preferences.",
    tags: ["ML", "Collaborative Filtering", "Cosine Similarity", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/Book-Recommendation-System",
    demo: "https://book-recommendation-system-x2kvzjycirbgm54surkaea.streamlit.app/"
  },
  {
    title: "PAN Number Validation & Analysis",
    desc: "Comprehensive data validation project implementing PAN validation using both SQL and Python approaches.",
    tags: ["SQL", "Python", "Data Validation", "Database"],
    repo: "https://github.com/sankaran-s2001/PAN-Number-Validation-Data-Cleaning",
    demo: null
  },
  {
    title: "YouTube Analytics Scraper",
    desc: "Web scraping project analyzing data science educators' channel performance using YouTube API.",
    tags: ["Web Scraping", "API", "Data Analysis", "Pandas"],
    repo: "https://github.com/sankaran-s2001/YouTube-Channel-Analytics-Web-Scraping",
    demo: null
  },
  {
    title: "US Traffic Accidents Analysis",
    desc: "Comprehensive EDA of US traffic accidents (2016-2023) analyzing patterns by time, location, and weather.",
    tags: ["EDA", "Data Analysis", "Python", "Visualization"],
    repo: "https://github.com/sankaran-s2001/US-Traffic-Accidents-Analysis-Python-EDA",
    demo: null
  },
  {
    title: "Blinkit Analytics Dashboard",
    desc: "Interactive Power BI dashboard analyzing grocery delivery app sales across outlets and locations.",
    tags: ["Power BI", "Dashboard", "Analytics", "Visualization"],
    repo: "https://github.com/sankaran-s2001/Blinkit-Grocery-Analytics-Dashboard-Power-BI-Project",
    demo: null
  },
  {
    title: "Healthcare Analytics Dashboard",
    desc: "Power BI dashboard analyzing healthcare waiting lists and patient data across medical specialties.",
    tags: ["Power BI", "Healthcare", "Dashboard", "Analytics"],
    repo: "https://github.com/sankaran-s2001/Healthcare-Analytics-Dashboard-Power-BI-Project",
    demo: null
  },
    {
    title: "E-Commerce Sales Dashboard",
    desc: "Interactive Power BI dashboard with geographic insights and business performance metrics for e-commerce.",
    tags: ["Power BI", "E-commerce", "Dashboard", "Business Intelligence"],
    repo: "https://github.com/sankaran-s2001/E-Commerce-Sales-Dashboard-Power-BI-Project",
    demo: null
  },
  {
    title: "Data Professional Survey Analysis",
    desc: "Power BI dashboard analyzing survey responses from 500+ data professionals about careers and salaries.",
    tags: ["Power BI", "Survey Analysis", "Data Jobs", "Visualization"],
    repo: "https://github.com/sankaran-s2001/Data-Professional-Survey-Analysis-Power-BI-Dashboard",
    demo: null
  },
  {
    title: "IPL Score Predictor",
    desc: "Machine learning web app predicting IPL cricket match scores using live match data.",
    tags: ["ML", "Cricket", "Regression", "Streamlit", "Render"],
    repo: "https://github.com/sankaran-s2001/IPL-Score-Predictor",
    demo: "https://ipl-score-predictor-fsu9.onrender.com/"
  },
  {
    title: "Emotion Classification System",
    desc: "Text emotion classification using TF-IDF vectorization and Random Forest algorithm.",
    tags: ["NLP", "Classification", "TF-IDF", "Random Forest", "ML"],
    repo: "https://github.com/sankaran-s2001/Emotion-Classification-System",
    demo: "https://emotion-classification-system.onrender.com/"
  },
  {
    title: "Layoffs SQL Analysis",
    desc: "Complete MySQL data cleaning and analysis project examining global company layoffs (2020-2023).",
    tags: ["SQL", "MySQL", "Data Cleaning", "EDA"],
    repo: "https://github.com/sankaran-s2001/layoffs-sql-analysis",
    demo: null
  },
  {
    title: "New York Airbnb Analysis",
    desc: "Exploratory data analysis of NYC Airbnb listings analyzing room types, pricing, and geographic distribution.",
    tags: ["EDA", "Data Analysis", "Pandas", "Matplotlib"],
    repo: "https://github.com/sankaran-s2001/New-York-Airbnb-EDA-Python-Data-Analysis",
    demo: null
  },
  {
    title: "Coffee Shop Revenue Predictor",
    desc: "Machine learning web app helping coffee shop owners predict daily sales revenue.",
    tags: ["ML", "Regression", "Business Analytics", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/Coffee-Shop-Revenue-Predictor",
    demo: "https://coffee-shop-revenue-predictor.onrender.com/"
  },
  {
    title: "Diabetes Risk Predictor",
    desc: "Health data analysis tool using ML to estimate diabetes risk for awareness and early detection.",
    tags: ["ML", "Healthcare", "Classification", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/Diabetes-Risk-Predictor",
    demo: "https://diabetes-risk-predictor-ep9x.onrender.com/"
  },
  {
    title: "Gold Price Predictor",
    desc: "Machine learning model predicting gold prices using Python and Gradio interface.",
    tags: ["ML", "Finance", "Prediction", "Gradio"],
    repo: "https://github.com/sankaran-s2001/gold-price-predictor",
    demo: "https://huggingface.co/spaces/sankarans2001/gold-price-predictor"
  },
  {
    title: "Data Visualizer Web App",
    desc: "Interactive web application for visualizing CSV data with beautiful charts and graphs.",
    tags: ["Data Visualization", "Web App", "Python", "Streamlit"],
    repo: "https://github.com/sankaran-s2001/Data-Visualizer-Web-App",
    demo: "https://data-visualizer-web-app.onrender.com/"
  },
  {
    title: "Smile Detection App",
    desc: "Computer vision application using logistic regression to detect smiles in images.",
    tags: ["Computer Vision", "Logistic Regression", "Image Processing"],
    repo: "https://github.com/sankaran-s2001/Logistic_Regression_Smile_Detection_app",
    demo: "https://logistic-regression-smile-detection-app.onrender.com"
  },
  {
    title: "Employee Attrition Analysis",
    desc: "Excel dashboard analyzing employee turnover patterns using interactive charts and filters.",
    tags: ["Excel", "HR Analytics", "Dashboard", "Attrition Analysis"],
    repo: "https://github.com/sankaran-s2001/Employee-Attrition-Analysis-Excel-Dashboard",
    demo: null
  }
];

// Experience 
const experience = [
  {
    role: "Junior Data Scientist",
    company: "F & R Data Analytical System & Solutions Pvt. Ltd.",
    duration: "Jan 2024 – May 2025",
    contributions: [
      "Developed computer vision models for brand logo detection with 92% accuracy, processing 100k+ images weekly",
      "Built automated receipt extraction system handling 5,000+ documents daily, reducing manual processing time by 75%",
      "Performed data labeling and annotation for 50+ brand categories, improving model training efficiency by 40%",
      "Collaborated with analytics team to deliver comprehensive reports, increasing client satisfaction by 30%"
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Nobeth Analytics",
    duration: "July 2023 – Dec 2023",
    contributions: [
      "Developed telecom customer churn prediction model achieving 85% accuracy on 100,000+ customer records",
      "Mastered SQL, Python, and Excel to analyze datasets containing 500K+ rows of customer data",
      "Created interactive Power BI dashboards reducing report generation time from 8 hours to 2 hours weekly",
      "Identified key churn factors resulting in 15% improvement in customer retention strategies"
    ]
  }
];



// Education 
const education = [
  {
    degree: "B.Tech Mechanical Engineering",
    institution: "Kalasalingam Academy of Research and Education",
    year: "| 2019 – 2023"
  },
  {
    certification: "IBM Data Analyst Professional Certificate",
    provider: "Coursera",
    year: "2025",
    description: "11-course comprehensive program covering Excel, Python, SQL, Data Visualization, and Capstone Project",
    certificateLink: "https://coursera.org/share/e12c6aa5ae528bf73e3db76e500b37d3"
  },
  {
    certification: "Python for Data Science, AI & Development",
    provider: "Coursera (IBM)",
    year: "2024",
    certificateLink: "https://coursera.org/share/68957f95b8c9c730ec637791e0669334"
  },
  {
    certification: "SQL Basic & Intermediate",
    provider: "HackerRank",
    year: "2024",
    certificateLink: "https://www.hackerrank.com/certificates/bb5b8ce5dfe4"
  },
  {
    certification: "Python for Beginners",
    provider: "Simplilearn",
    year: "2024",
    certificateLink: "https://simpli-web.app.link/e/ajf31a43AWb"
  }
];


// Contact (added WhatsApp)
const contact = [
  { type: "📧 Email", value: "sankaran.sangumuthu@gmail.com", link: "mailto:sankaran.sangumuthu@gmail.com" },
  { type: "💼 LinkedIn", value: "linkedin.com/in/sankaran-s21", link: "https://www.linkedin.com/in/sankaran-s21" },
  { type: "🐙 GitHub", value: "github.com/sankaran-s2001", link: "https://github.com/sankaran-s2001" },
  { type: "💬 WhatsApp", value: "+91 9677917815", link: "https://wa.me/919677917815" }
];
