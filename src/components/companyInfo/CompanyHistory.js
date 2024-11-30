import React from "react";
import "./CompanyHistory.css"; // 스타일을 별도로 작성한 경우 불러올 CSS 파일

const CompanyHistory = () => {
  const historyData = [
    {
      date: "2000년 7월",
      event: "회사설립.",
    },
    {
      date: "2000년 8월",
      event: "전자비례밸브 제어용 GI-400PV 모델 및 주변장치 개발 및 출시.",
    },
    {
      date: "2000년 9월",
      event: "전기 PANEL CLEANING 업무 개시.",
    },
  ];

  return (
    <section id="company-history" className="company-history">
      <h3 className="history-title">회사 연혁 (Company History)</h3>
      <div className="history-list">
        {historyData.map((item, index) => (
          <div key={index} className="history-item">
            <div className="history-date">{item.date}</div>
            <div className="history-event">{item.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyHistory;
