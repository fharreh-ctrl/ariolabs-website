
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Link } from 'react-router-dom';

interface CaseStudy {
    title: string;
    client: string;
    description: string;
    result: string;
    industry: string;
    status?: 'In Progress';
    slug: string;
}

const caseStudies: CaseStudy[] = [
    {
        title: "Social Media Automation Workflow",
        client: "Media Company",
        description: "Built an automated social media workflow and marketing calendar system, using custom integrations with the client's existing social platforms.",
        result: "250% increase in engagement in 2 months.",
        industry: "Media & Marketing",
        slug: "media-company",
    },
    {
        title: "Automated Compliance & Audit System",
        client: "Finance/Audit Team",
        description: "Deployed a Google Apps Script system with a front-end form for automated decision-making, compliance checks, and reporting.",
        result: "Eliminated manual data entry and enabled real-time audit tracking, leading to 150% faster compliance in 3 weeks.",
        industry: "Finance & Compliance",
        slug: "finance-audit-team",
    },
    {
        title: "AI-Powered Client Prospecting System",
        client: "BOSS (Business Outsourcing Specialty Services)",
        description: "Developed and implemented a bespoke, AI-powered client prospecting system to identify and engage high-quality leads automatically.",
        result: "Closed 2 new high-value clients within the first 2 weeks of deployment.",
        industry: "Business Services",
        slug: "boss",
    },
    {
        title: "Cost Reduction Mobile Application",
        client: "Livestream Platform",
        description: "Currently developing a custom application to reduce streaming costs and a companion mobile app for organization members.",
        result: "Targeting savings of up to $150,000 USD per year upon completion.",
        industry: "Tech & Entertainment",
        status: "In Progress",
        slug: "livestream-platform",
    },
];

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <span className="inline-block bg-electric-teal/10 text-electric-teal text-xs font-semibold px-3 py-1 rounded-full">{study.industry}</span>
                 {study.status && <span className="inline-block bg-warning-orange/10 text-warning-orange text-xs font-bold px-3 py-1 rounded-full">{study.status}</span>}
            </div>
            <h3 className="text-2xl font-bold font-heading text-deep-navy mb-2">{study.title}</h3>
            <p className="text-sm text-dark-gray/80 mb-4"><strong>Client:</strong> {study.client}</p>
            <p className="text-base text-dark-gray mb-4 flex-grow">{study.description}</p>
            <div>
                <p className="font-semibold text-deep-navy">Result:</p>
                <p className="text-success-green font-bold text-lg">{study.result}</p>
            </div>
        </div>
        <div className="mt-auto p-6 bg-soft-gray">
             <Link to={`/case-studies/${study.slug}`} className="font-bold text-electric-teal hover:underline">
                View Full Study &rarr;
            </Link>
        </div>
    </div>
);


const CaseStudiesPage: React.FC = () => {
    return (
        <div className="bg-soft-gray">
            <header className="bg-deep-navy text-white pt-24 pb-16">
                 <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Success Stories</h1>
                     <p className="text-lg md:text-xl text-gray-300 mt-4">See how we've helped businesses like yours save time and scale faster.</p>
                 </div>
            </header>
            <SectionWrapper className="py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {caseStudies.map(study => (
                        <CaseStudyCard key={study.title} study={study} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default CaseStudiesPage;