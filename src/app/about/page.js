// src/app/about/page.js
export default function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">Meet with a Mission</h2>

      <div className="about-zigzag">

        {/* BOX 1 */}
        <div className="about-box left">
          <h3 className="about-heading">
            KUNDAPURA RURAL AYURVEDA MEDICAL COLLEGE AND HOSPITAL
          </h3>
          <p>
            The Kundapura Rural Ayurveda Medical College was envisioned by the
            Amriteshwari Education Trust with the aim to impart quality Ayurvedic
            education to achieve holistic health in the community.
          </p>
          <p>
            The institution is situated in the coastal belt of Kundapura, adorned
            by the Arabian Sea on one hand and the vibrant culture of Kundapura
            on the other.
          </p>
          <p>
            Under the dynamic leadership of Principal Dr. Sanjay K S, the college
            has grown as a centre of academic excellence supported by a
            dedicated team of faculty and staff across all Ayurvedic
            departments.
          </p>
        </div>

        {/* BOX 2 */}
        <div className="about-box right">
          <h3 className="about-heading">AAPTAS AYURVEDA TRUST</h3>
          <p>
            Aaptas Ayurveda Trust is a non-profit organization initiated in 2016
            and formally registered in 2024, founded with the mission
            <strong> “Reach Ayurveda to Each”.</strong>
          </p>
          <p>
            The trust conducts awareness programs through educational camps,
            exhibitions, publications, and digital outreach, becoming a
            volunteer-driven movement with a national presence.
          </p>
          <ul>
            <li>Promotes Ayurveda among the public and students</li>
            <li>Conducts national Charaka Jayanti contests</li>
            <li>Runs school, college, and village programs</li>
            <li>Registered in Haveri, Karnataka</li>
          </ul>
        </div>

        {/* BOX 3 */}
        <div className="about-box left">
          <h3 className="about-heading">CHARAKA FOR CHILDREN PROJECT</h3>
          <p>
            CHARAKA FOR CHILDREN is a national-level Ayurveda initiative that
            engages BAMS students in implementing short-term school health
            projects for children from 5th to 10th standard.
          </p>
          <p>
            The project bridges classical Ayurvedic wisdom with modern public
            health by encouraging preventive and promotive healthcare models
            rooted in Charaka Samhitha.
          </p>
          <p>
            It empowers students with hands-on experience while fostering
            healthier habits among children and strengthening community
            outreach.
          </p>
        </div>

      </div>
    </section>
  );
}
