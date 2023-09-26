import React from "react";
import HorizontalCard from "../Elements/horizontalCard";
import Nav from "../section/nav";

export default function Members() {
  return (
    <>
      <div>
        <Nav />
        <div className="flex justify-start pt-24 gap-5 flex-wrap px-16">
          <HorizontalCard link="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <HorizontalCard link="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <HorizontalCard link="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <HorizontalCard link="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
        
      </div>
    </>
  );
}
