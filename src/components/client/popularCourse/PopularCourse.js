import React from "react";
import "./style.css";
import Wrapper from "./Wrapper";

export default function PopularCourse() {
    const menuItems=["همه دوره ها","مراقبت مو","آرایش صورت","درمان جوش"]
  return (
    <div className="mt-5">
      <Wrapper menuItems={menuItems}></Wrapper>
    </div>
  );
}
