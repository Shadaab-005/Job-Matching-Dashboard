# Job Matching Dashboard

A responsive React application for displaying job matching analysis and candidate evaluation results.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Dashboard**: Multiple sections with detailed matching analysis
- **Modern UI**: Built with Tailwind CSS and Lucide React icons
- **Component-Based**: Modular and maintainable code structure
- **Match Quality Indicators**: Color-coded badges for easy assessment

## 🛠️ Tech Stack

- **React 18**
- **Tailwind CSS**
- **Lucide React** (for icons)
- **JavaScript (ES6+)**

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-matching-dashboard.git
cd job-matching-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
job-matching-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.js
│   │   │   ├── SidebarItem.js
│   │   │   └── DataTable.js
│   │   ├── sections/
│   │   │   ├── Overview.js
│   │   │   ├── OverallMatchSummary.js
│   │   │   ├── ExperienceMatch.js
│   │   │   ├── GranularDetails.js
│   │   │   └── AdditionalRequirements.js
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   └── Sidebar.js
│   │   └── Dashboard.js
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Components

### UI Components
- **Badge**: Reusable status indicators with different variants
- **SidebarItem**: Navigation items with icons and active states
- **DataTable**: Reusable table component with proper styling

### Section Components
- **Overview**: Job title and key metrics overview
- **OverallMatchSummary**: Detailed match analysis with scores
- **ExperienceMatch**: Project experience breakdown
- **GranularDetails**: Section-wise detailed analysis
- **AdditionalRequirements**: Additional JD requirements matching

### Layout Components
- **Header**: Top navigation with back button
- **Sidebar**: Left navigation panel
- **Dashboard**: Main container component

## 🎯 Usage

The dashboard displays job matching analysis for SAP TM Functional Consultant positions. Navigate through different sections using the sidebar to view:

- Overall match summary with 86% score
- Detailed experience matching
- Strengths and notable gaps
- Project-wise experience breakdown
- Granular skill assessments



## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px


