import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";
import "../styles/context.css";
import { Carousel } from "bootstrap";
const Context = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example"
      data-bs-offset="50"
      tabIndex="0"
      className="scroll-container"
    >
      <div className="bg-image w-100 d-flex justify-content-center align-items-center mt-5">
        <h2
          className="main-title fs-6 fs-md-5 fw-normal text-center p-2 d-flex flex-column"
          id="text-top"
        >
          ,בבוקר שבת, שמחת תורה ה'תשפ"ד, (7.10.23) החלה מתקפת הפתע במטח ירי רקטי
          מסיבי מתמשך וחריג בהיקפו, של אלפי רקטות ופצצות מרגמה על אזורים נרחבים
          בישראל, בחסות המטחים חדרו – יבשתית, אווירית וימית – כ-6,000 מחבלים
          לשטח ישראל, הם תקפו והשתלטו על בסיסי צה"ל ומוצביו, בד בבד הם חדרו
          ליישובים אזרחיים, כבשו את חלקם, תקפו, רצחו וחטפו כ-1,450 מתושביהם,
          וגררו את ישראל למלחמה הארוכה ביותר בתולדות מדינת ישראל
          <br />
          <span className="fs-4 fw-bold mt-3">
            עמותת "זעקת שמע ישראל" נוסדה בכדי ליתן הנצחה וזיכרון לשבר ולאסון שעטף
            את עם ישראל, למסירות הנפש של אלו שנרצחו רק בשל היותם יהודים, ומנגד
            .לגבורה ולתקומה שקרתה דווקא מתוך החושך
          </span>
        </h2>
      </div>

     
      <div className="row p-3 mt-2 m-0 d-flex justify-content-center my-animation">
        <ServiceCard
          title="סיורים מודרכים"
          description="קבוצות גדולות וקטנות"
        />
        <ServiceCard
          title="סיורי בוטיק"
          description="אפשרות לנהיגה עצמית ברכבים פרטיים"
        />
        <ServiceCard title="הרצאות" description="האנשים שמאחורי הסיפורים" />
        <ServiceCard
          title="פאנלים"
          description="בהשתתפות אלו שחוו את האסון מקרוב"
        />
      </div>
      <div className="w-100 mt-5" data-aos="zoom-in-up">
      
      </div>
      <ul className="list-group w-100 p-2 mb-5">
        <li
          className="mb-3 list-group-item text-end mb-0 bg-color-gradient text-white border-bottom-0"
          data-aos="fade-up"
        >
          <p className="main-title fs-4">
            {" "}
            התאמה למגזר החרדי{" "}
            <span className="main-title fw-normal fs-6">
              {" "}
              אנחנו היחידים שהתאמנו עבור המגזר החרדי את המסלול שיהיה נקי מבחינה
              רוחנית ועוצמתי מבחינה רגשית{" "}
            </span>{" "}
          </p>
        </li>
        <li
          className="mb-3 list-group-item text-end mb-0 bg-color-gradient text-white border-bottom-0"
          data-aos="fade-up"
        >
          <p className="main-title fs-4">
            {" "}
            מדריכים מקצועיים{" "}
            <span className="main-title fw-normal fs-6">
              {" "}
              בעלי ידע רחב במאורעות שהתרחשו, בסיפורים האישיים ובנקודות
              ההתרחשויות{" "}
            </span>{" "}
          </p>
        </li>
        <li
          className="mb-3 list-group-item text-end mb-0 bg-color-gradient text-white border-bottom-0"
          data-aos="fade-up"
        >
          <p className="main-title fs-4">
            {" "}
            חוויה אישית{" "}
            <span className="main-title fw-normal fs-6">
              {" "}
              מפגשים עם ניצולים והרצאות מרתקות{" "}
            </span>{" "}
          </p>
        </li>
        <li
          className="mb-3 list-group-item text-end mb-0 bg-color-gradient text-white border-bottom-0"
          data-aos="fade-up"
        >
          <p className="main-title fs-4">
            {" "}
            גמישות{" "}
            <span className="main-title fw-normal fs-6">
              {" "}
              סיורים קבוצתיים ופרטיים אפשרות לרכבים פרטיים{" "}
            </span>{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Context;
