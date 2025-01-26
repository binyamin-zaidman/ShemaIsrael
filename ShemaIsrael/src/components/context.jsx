import React from "react";
import "../styles/colors.css";
import "../styles/animations.css";


const Context = () => {
  return (
    <div className="w-100 h-100 bg-color-gradient rounded">
      <div className="w-100 text-white text-center mb-4">
        <h2 className="cssanimation effect3d">פעילות העמותה</h2>
      </div>
      <div className="row bg-color-gradient p-3 m-0">
        <div className="col-md-4 mb-3 placeholder-wave">
          <div className="rounded p-3 h-100 bg-white">
            <h2>סיורים מודרכים</h2>
            <p>קבוצות גדולות וקטנות</p>
          </div>
        </div>
        <div className="col-md-4 mb-3 placeholder-wave">
          <div className="rounded p-3 h-100 bg-white">
            <h2>סיורי משפחות</h2>
          </div>
        </div>
        <div className="col-md-4 mb-3 placeholder-wave">
          <div className="rounded p-3 h-100 bg-white">
            <h2>סיורי בוטיק</h2>
            <p>אפשרות לנהיגה עצמית ברכבים פרטיים</p>
          </div>
        </div>
        <div className="col-md-6 mb-3 placeholder-wave">
          <div className="rounded p-4 h-100 bg-white">
            <h2>הרצאות</h2>
            <p>האנשים שמאחורי הסיפורים</p>
          </div>
        </div>
        <div className="col-md-6 mb-3 placeholder-wave">
          <div className="rounded p-4 h-100 bg-white">
            <h2>פאנלים</h2>
            <p>בהשתתפות אלו שחוו את האסון מקרוב</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
