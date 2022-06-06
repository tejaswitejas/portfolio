import React, {useState} from 'react';
import ProjectDetailsModal from "./ProjectDetailsModal";

const FreelanceProject = ({freelanceProject,resumeBasicInfo}) => {
    const [deps, setDeps] = useState({});
    const [detailsModalShow, setdetailsModalShow] = useState(false);
    const detailsModalShowfun = (data) => {
        setDeps(data);
        setdetailsModalShow(true)
      };
    const detailsModalClose = () => {
        setdetailsModalShow(false)
    }
    if (freelanceProject && resumeBasicInfo) {
        var sectionName = resumeBasicInfo.section_name.freelanceProjects;
        var projects = freelanceProject;
    }
return (
  <section id="freeLance">
    <h1 className="section-title">
      <span>{sectionName}</span>
    </h1>
    {projects &&
      projects.map((project, i) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 freelance-image"
            key={project.title}
            style={{ cursor: "pointer", maxWidth: "100%" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto freelance-img" onClick={() => detailsModalShowfun(project)} >
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/"+project.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">{project.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">{project.title}</p>
                </div>
              </div>
            </span>
          </div>
        );
      })}
    <ProjectDetailsModal
      show={detailsModalShow}
      onHide={detailsModalClose}
      data={deps}
    />
  </section>
);
};

export default FreelanceProject;
