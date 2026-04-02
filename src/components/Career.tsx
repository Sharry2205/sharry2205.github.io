import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations &amp; Logistics</h4>
                <h5>Goodera</h5>
              </div>
              <h3>Sep–Dec 2025</h3>
            </div>
            <p>
              Managed supply chain pipelines, monitoring 150+ shipments to optimize
              warehousing and logistics decisions; defined inventory quality KPIs for
              200+ weekly products; streamlined tracking and client IDs to save ~8 hours/day
              of manual ops work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Intern</h4>
                <h5>Birla Institute of Technology and Sciences</h5>
              </div>
              <h3>Jan–Aug 2025</h3>
            </div>
            <p>
              Led the product roadmap for an ERP platform redesign, improving user
              experience across 250+ academic departments; streamlined the PhD thesis
              submission process from 6 to 2 months via workflow optimization; coordinated
              cross-functional teams to digitize data and improve navigation for 20,000+
              students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finance &amp; Product Research</h4>
                <h5>Esgee Leathers Goods Pvt. Ltd.</h5>
              </div>
              <h3>May–Dec 2024</h3>
            </div>
            <p>
              Built data-driven product strategies using analytics; collaborated on 10+
              structuring requests, building and back-testing models; led 3+ strategic
              initiatives to design customized solutions for institutional clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics</h4>
                <h5>AlmaConnect</h5>
              </div>
              <h3>May–Jul 2023</h3>
            </div>
            <p>
              Implemented product improvement ideas to improve user outcomes; analyzed
              10,000+ data entries to stabilize data layers and reporting; managed backend
              systems to ensure smooth operations and precise data integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
