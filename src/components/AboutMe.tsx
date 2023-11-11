import { useState } from "react";

interface Props {
    heading: string;
}

export default function AboutMe({heading}: Props) {

    return (
      // <> means to use a fragment for all the children element below
      <>
        <div className="container-fluid mt-3">
            <h2 className="font-weight-bold">{heading}</h2>
                <ul className="entry content">
                    <div>
                        <li>Technical Skills: Java, AWS, Terraform, Spring Boot, REST API, Datadog, Git, Json, IntelliJ, Jira, OpenAPI/Swagger,
                            SQL, Sonar, Jenkins, Maven, Gaia Cloud Platform, Python, Pandas, Confluence, R, Shiny, Tableau, Github, HTML,
                            and CSS</li>
                        <li>AWS Cloud Practitioner Certified (March 2023), HashiCorp Certified: Terraform Associate (October 2023)</li>
                    </div>
                </ul>
                
            <h2 className="font-weight-bold">RELATED EXPERIENCE</h2>
                <h5 className="font-weight-bold">JPMorgan & Chase - <i>Software Engineer Program (Chicago)</i></h5>
                <ul className="entry content">
                        <li>Participated in the pilot group to perform <b>AWS</b> setups for PaymentNet, including automating the ECS cluster creation
                            using <b>Terraform</b>, containerizing applications, deploying apps to clusters and developing comprehensive
                            documentation to facilitate a seamless migration to AWS for all PaymentNet teams</li>
                        <li>Configured <b>DataDog</b> monitoring alerts with defined scenarios, thresholds, tags, severity, and targeted recipient groups</li>
                        <li>Collaborated with off-shore teammates to successfully debug errors in the internal cloud (Gaia) dev, test, and perf
                            environment for the Jules pipeline; ensured that all required criteria were met, including Swagger UI pages and
                            heartbeat display, absence of vulnerabilities on SSAP, test coverage of 80%+ on Sonar, and well-functioning logs</li>
                        <li>Upgraded <b>Spring Boot</b>, JDK, and <b>Junit test</b> versions for increased efficiency and better performance</li>
                        <li>Achieved 80% or higher Junit coverage for assigned APIs to improve code quality and minimize defects in production</li>
                        <li>Merged feature branch to release branch in preparation for release, ensuring successful deployment of software updates</li>
                        <li>Troubleshooted defects in weekend releases, collaborated with QA team to validate UI page changes post-code update, and provided <b>JET</b> evidence for issue resolution</li>
                        <li>Implemented <b>Agile</b> framework and tracked progress using comments to streamline workflows</li>
                </ul>

                <h5 className="font-weight-bold">JPMorgan & Chase - <i>Tech Connect (Chicago)</i></h5>
                <ul className="entry content">
                        <li>Completed a 12-week boot camp and gained comprehensive knowledge in <b>Java</b>, <b>HTML</b>, <b>CSS</b>, <b>SQL</b>, and <b>Spring MVC</b>
                            , resulting in strong foundational skills for software engineering</li>
                        <li>Created a website called "Restaurant Tinder" with 3 teammates as a final project that generates a list of recommended
                            restaurants in Chicago based on filtered preferences and displays each restaurant as a flip card with additional details
                            behind; implemented functionality to allow users to add restaurants to their favorites and view them in a dedicated tab,
                            enhancing user experience and engagement with the website</li>
                </ul>

                <h5 className="font-weight-bold">2020 Fall USCLAP Competition - <i>Intermediate Statistics Honorable Mention</i></h5>
                <ul className="entry content">
                        <li>Reconciled and investigated the association among American income, health insurance coverage, and tendency to have
                            a primary care provider from IPUMS database</li>
                        <li>Cleaned a huge amount of data with <b>R</b> to filter out missing information and to narrow the focus of our research,
                            generating a sample of 11,332 individuals</li>
                </ul>

                <h5 className="font-weight-bold">Smith College Human Computational and Visualization Lab - <i>Research Assistant</i></h5>
                <ul className="entry content">
                        <li>Analyzed and graphically visualized test data using R; concluded that the combination of visualization and text helped
                            the participants to attain correct answers for Bayesian reasoning most easily</li>
                        <li>Designed web page layouts including drag and drop, the arrangement of visualizations, and buttons with <b>JavaScript</b>
                            and <b>Redis</b></li>
                </ul>
            
                <h5 className="font-weight-bold">Co-op Project with the Urban Institute - Balancing Data Privacy Data Utility - <i>Team member</i></h5>
                <ul className="entry content">
                        <li>Implemented the SCRUM methodology with 5 team members to establish biweekly sprints; acted as a product owner
                            and a communication lead to generate weekly reports after sponsor meetings</li>
                        <li>Applied 5 statistical privacy methods to the Vermont 1940s US Census data to assess tradeoffs between the accuracy of
                            representations and identifiability of individuals; built an interactive dashboard via <b>R shiny</b> to display the results</li>
                </ul>
                
                <h2 className="font-weight-bold">LEADERSHIP DEVELOPMENT</h2>    
                <h5 className="font-weight-bold">JPMC Take It Forward/Women On The Move - <i> Volunteer/Event Coordinator</i></h5>
                <ul className="entry content">
                        <li>Collaborated weekly to plan events with catering options, promotional emails, and booked venues, leading to
                            successful open discussions such as topics on work-life balance and career development</li>
                        <li>Participated in External Speaking Program, honing public speaking skills and promoting female technologists' development</li>
                </ul>

                <h2 className="font-weight-bold">EDUCATION</h2>    
                <h5 className="font-weight-bold">Smith College</h5>
                <p>B.A. in Statistical and Data Science | GPA:4.0</p>
                <ul className="entry content">
                        <li>Honors: 2020 - 2021 Dean’s List</li>
                </ul>
        </div>
      </>
    );
}