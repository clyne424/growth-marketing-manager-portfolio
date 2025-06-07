const CaseStudies = () => {
    return(
        <section id="case-studies" className="case-studies-section" aria-label="Case studies">
            <article className='pt-2 text-start'>
                <h2 className='section-title'>Case Studies / Project Spotlights</h2>
                <div className='section-content ps-5'>
                    <h4>Case Study 1: Global SaaS Platform</h4>
                    <div className="ps-4">
                        <div className="item-detail"><strong>Objective:</strong> 10x monthly signups and reduce CAC within 8 months.</div>
                        <div className="item-detail"><strong>Strategy:</strong> Developed a multi-channel paid acquisition engine targeting B2B decision-makers. Integrated growth loops (referral incentives), constructed high-converting landing pages, and rebuilt the lead nurture journey using behavioral triggers.</div>
                        <div className="item-detail"><p className='fw-bold'>Execution:</p></div>
                        <ul>
                            <li>Launched precision-targeted LinkedIn & Google Ads campaigns.</li>
                            <li>Led dozens of A/B tests across copy, signup flow, and CTA placements.</li>
                            <li>Implemented segment-based email sequences via HubSpot.</li>
                            <div className='fw-bold'>Result:</div>
                            <ul>
                                <li>Signups increased by 970% within six months (24,000 → 233,000).</li>
                                <li>CAC reduced by 38%.</li>
                                <li>Email open rates up 37%</li>
                            </ul>
                        </ul>
                        <h5 className='fst-italic pt-2'>Key Role: Designed the full experiment matrix, led cross-team execution, and set up all analytics dashboards.</h5>
                    </div>

                    <h4 className="pt-3">Case Study 2: DTC eComm – Mobile App Launch</h4>
                    <div className="ps-4">
                        <div className="item-detail"><strong>Objective:</strong> Achieve 50k installs & 30% retention rate at profitable CAC within 4 months.</div>
                        <div className="item-detail"><strong>Strategy:</strong> Built organic and paid acquisition loops; developed influencer partnerships and managed ASO (App Store Optimization); deployed onboarding flows to maximize Day 30 retention.</div>
                        <div className="item-detail"><p className='fw-bold'>Execution:</p></div>
                        <ul>
                            <li>Ran TikTok and Meta lookalike campaigns, optimized creative based on attribution data.</li>
                            <li>Automated onboarding emails triggered by behavioral milestones.</li>
                            <li>Partnered with micro-influencers for viral UGC content.</li>
                            <div className='fw-bold'>Result:</div>
                            <ul>
                                <li>52,600 installs in 4 months (exceeded goal).</li>
                                <li>Blended CAC: $2.17 (30% below target).</li>
                                <li>Day 30 retention hit 32% (vs. 20% industry average).</li>
                            </ul>
                        </ul>
                        <h5 className='fst-italic pt-2'>Key Role: Owned all paid & organic channels, analyzed attribution data, and iterated on onboarding experience.</h5>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default CaseStudies;