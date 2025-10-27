
import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const FinanceAuditTeamPage: React.FC = () => {
    const caseStudyData = {
        title: "Automated Compliance & Audit System",
        industry: "Accounting & Compliance",
        problem: "An internal accounting audit department was receiving multiple weekly and batch financial reports from 55 different locations manually. There was no standardized format, no central repository, and the process was prone to errors and delays.",
        approach: (
             <div className="space-y-4">
                <p>ArioLabs designed and implemented a centralized data collection and processing system. Our approach included:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Google Apps Script Workflow:</strong> A robust backend script was created to handle all data logic, validation, and processing.</li>
                    <li><strong>Standardized Form Input:</strong> A user-friendly form was deployed to ensure all 55 locations submitted data in a consistent format.</li>
                    <li><strong>Live Currency Conversion:</strong> An API was integrated to perform live CAD to USD conversions, eliminating manual calculations.</li>
                    <li><strong>Automated Data Aggregation:</strong> The system automatically collected submissions and aggregated them into master reports.</li>
                </ul>
            </div>
        ),
        solution: "The new system automatically validated incoming data, performed currency conversions in real-time, and generated standardized reports. We also integrated an AI analysis layer for accuracy control, flagging potential anomalies for human review. This completely replaced the manual submission and consolidation process.",
        results: [
            "150% faster compliance workflow",
            "55 locations automated",
            "Zero manual data entry"
        ],
        highlight: "High accuracy and real-time data assured reliable financial tracking for sensitive audit reports.",
        tools: ["Google Apps Script", "Google Forms", "Google Sheets", "Currency Conversion API", "AI Data Analysis"]
    };

    return <CaseStudyLayout {...caseStudyData} />;
};

export default FinanceAuditTeamPage;
