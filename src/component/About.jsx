import React from "react";

export default function About(props) {
  return (
    <div>
      <main
        className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
        role="main"
      >
        <h1 className="bd-title" id="content">
          About
        </h1>
        <p className="bd-lead">
          Learn more about the team maintaining Bootstrap, how and why the
          project started, and how to get involved.
        </p>
        <span className="carbon-wrap" />
        <a href="/" />
        <h2 id="team">
          <div>Team</div>
        </h2>
        {/* CREATIN ABOUT CARD FOR TEAM MEMBERS */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className=" d-flex justify-content-center">
                  <img
                    className="rounded-circle "
                    style={{
                      height: 180,
                      width: 190,
                    }}
                    src="https://scontent.fbir1-1.fna.fbcdn.net/v/t31.18172-8/26240724_2047751088802059_5611703421880338825_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=JHmOubGUC74AX8y-RtA&_nc_ht=scontent.fbir1-1.fna&oh=00_AfC8DOkV_Qg8C8aQKwdd5M0AXjculoMwlmAig7AsPmlg8Q&oe=64A541B1"
                    alt="loading"
                  />
                </div>

                <h5 className="card-title text-center">Purushotam Khawash</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className=" d-flex justify-content-center">
                  <img
                    className="rounded-circle"
                    style={{ height: 180, width: 190 }}
                    src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/310524899_2004067736449032_7444856612063622171_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Q6eH9v6ucsAX8tTaHV&_nc_oc=AQkyK4E2aBINckKuI65uzD-_dmFQjL4aHF-cgQ-vpPNM8z9hBuG0M7L1ifSyXLy6SzvzQPZQCzYHolergarx1xpL&_nc_ht=scontent.fbir1-1.fna&oh=00_AfDIjoCM9gh6wk20Vz8oj3x-X5WbeZnvAckROQ6aAfyL6Q&oe=6483C4FD"
                    alt="loading"
                  />
                </div>
                <h5 className="card-title text-center">Rimesh Sapkota</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
