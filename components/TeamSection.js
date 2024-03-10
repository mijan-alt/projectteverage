import React from "react";

function TeamSection() {
  return (
    <div className="team-section section-spacing-bottom">
      <div className="container w-container">
        <div className="section-title text-center">
          <h2>Meet Our Squad</h2>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="grid-team w-dyn-items">
            <div role="listitem" className="team-item w-dyn-item">
              <a href="/team/judy-nguyen" className="w-inline-block">
                <img
                  src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/62204b416e44ea2a794f8a9b_08.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 88vw, (max-width: 767px) 31vw, (max-width: 991px) 30vw, 15vw"
                  srcSet="https://assets-global.website-files.com/621cb0f61153e187c55962f8/62204b416e44ea2a794f8a9b_08-p-500.jpeg 500w, https://assets-global.website-files.com/621cb0f61153e187c55962f8/62204b416e44ea2a794f8a9b_08.jpg 600w"
                  className="team-image"
                />
                <h6 className="team-title">Judy Nguyen</h6>
              </a>
            </div>
            <div role="listitem" className="team-item w-dyn-item">
              <a href="/team/larry-lawson" className="w-inline-block">
                <img
                  src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/62204af9fdada5001f3b1267_07.jpg"
                  loading="lazy"
                  alt=""
                  className="team-image"
                />
                <h6 className="team-title">Larry Lawson</h6>
              </a>
            </div>
            <div role="listitem" className="team-item w-dyn-item">
              <a href="/team/amanda-reed" className="w-inline-block">
                <img
                  src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bf1e4584a0fc975b47b_06.jpg"
                  loading="lazy"
                  alt=""
                  className="team-image"
                />
                <h6 className="team-title">Amanda Reed</h6>
              </a>
            </div>
            <div role="listitem" className="team-item w-dyn-item">
              <a href="/team/lori-stevens" className="w-inline-block">
                <img
                  src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bdb6cab1068d4211bdc_05.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 88vw, (max-width: 767px) 31vw, (max-width: 991px) 30vw, 15vw"
                  srcSet="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bdb6cab1068d4211bdc_05-p-500.jpeg 500w, https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bdb6cab1068d4211bdc_05.jpg 600w"
                  className="team-image"
                />
                <h6 className="team-title">Lori Stevens</h6>
              </a>
            </div>
            <div role="listitem" className="team-item w-dyn-item">
              <a href="/team/samuel-bishop" className="w-inline-block">
                <img
                  src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bc792d238d1151b59c0_04.jpg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 88vw, (max-width: 767px) 31vw, (max-width: 991px) 30vw, 15vw"
                  srcSet="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bc792d238d1151b59c0_04-p-500.jpeg 500w, https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bc792d238d1151b59c0_04.jpg 600w"
                  className="team-image"
                />
                <h6 className="team-title">Samuel Bishop</h6>
              </a>
            </div>
            <div role="listitem" className="team-item w-dyn-item">
              <a href="/team/jacqueline-miller" className="w-inline-block">
                <img
                  src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bb1662c9d2c31ced933_03.jpg"
                  loading="lazy"
                  alt=""
                  className="team-image"
                />
                <h6 className="team-title">Jacqueline Miller</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
