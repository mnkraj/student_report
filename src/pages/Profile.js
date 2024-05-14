import React from "react";

const Profile = (d) => {
  return (
    <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
      <img
        src="data:image/png;base64,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"
        className="card-img-top"
        alt="..."
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="card-body">
        <h3 className="card-title fs-3" style={{ fontWeight: "bolder" }}>
          {d.student.name}
        </h3>
        <h4 style={{ fontWeight: "bold" }}>{d.student.RegistrationNo}</h4>
        <h3 className="fs-6" style={{ fontWeight: "bolder" }}>
          Total Marks :{" "}
          {d.student.marks.reduce(
            (total, mark) => total + mark.marksObtained,
            0
          )}
        </h3>
        <h4 style={{ fontWeight: "bold" }}>
          Aggregate Percentage :{" "}
          {(d.student.marks.reduce(
            (total, mark) => total + mark.marksObtained,
            0
          ) / d.student.marks.length)
            .toString()
            .slice(0, 5)}{" "}
        </h4>
      </div>
      <ul className="list-group list-group-flush">
        {d.student.marks &&
          d.student.marks.map((subject, index) => (
            <li
              key={index}
              className="list-group-item"
              style={{ fontWeight: "bold" }}
            >
              {subject.subject} ({subject.subjectcode}) : {subject.marksObtained}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
