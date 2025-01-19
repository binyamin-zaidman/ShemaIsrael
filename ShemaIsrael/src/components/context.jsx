import React from "react";

const Context = () => {
  return (
    <div className="container w-100 h-100">
      <div className="w-100 text-center mb-4">
        <h2>פעילות העמותה</h2>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="border p-3 h-100">
            <h2>סיורים מודרכים</h2>
            <p>קבוצות גדולות וקטנות</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="border p-3 h-100">
            <h2>סיורי משפחות</h2>
          </div>
        </div>
        <div className="col-md-4 mb-3">
        <div className="border p-3 h-100">
          <h2>סיורי בוטיק</h2>
          <p>אפשרות לנהיגה עצמית ברכבים פרטיים</p>
        </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="border p-3 h-100">
          <h2>הרצאות</h2>
          <p>האנשים שמאחורי הסיפורים</p>
        </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="border p-3 h-100">
          <h2>פאנלים</h2>
          <p>בהשתתפות אלו שחוו את האסון מקרוב</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
