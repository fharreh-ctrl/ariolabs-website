
import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const LivestreamPlatformPage: React.FC = () => {
    const caseStudyData = {
        title: "Cost Reduction Mobile Application",
        industry: "Multimedia & Streaming",
        problem: "A global organization with 2,000 live locations required 99.999% uptime for its real-time streams but was facing excessively high costs from their shared server infrastructure, which also lacked stability.",
        approach: (
             <div className="space-y-4">
                <p>ArioLabs engineered a custom, end-to-end streaming solution from the ground up to optimize for both cost and performance. Our approach involved:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Custom Transcoding System:</strong> Designed a proprietary system to efficiently process video streams, reducing server load.</li>
                    <li><strong>Cross-Platform Mobile Apps:</strong> Developed applications using Flutter and React Native for members to stream securely from any device.</li>
                    <li><strong>Centralized Broadcast Control:</strong> Built a JavaScript API to allow for centralized management of multi-channel broadcasts across all 2,000 locations.</li>
                </ul>
            </div>
        ),
        solution: "The final product is an end-to-end livestreaming application with secure member logins and customizable server logic. This bespoke solution was built specifically to reduce server costs while increasing broadcast stability and control, moving the client away from expensive, inflexible shared hosting.",
        results: [
            "$150K+ projected annual savings",
            "99.999% uptime target",
            "Lower stream latency"
        ],
        highlight: "A stable, custom solution achieving enterprise-grade performance and reliability at a fraction of the traditional cost.",
        tools: ["Flutter", "React Native", "JavaScript API", "Custom Transcoding Engine", "Secure Authentication"]
    };

    return <CaseStudyLayout {...caseStudyData} />;
};

export default LivestreamPlatformPage;
